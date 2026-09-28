// Loads every page of the built site in a browser and checks that it renders:
// the page responds, Pure's CSS is applied, content is present, the layout fits
// the viewport, and there are no JavaScript or same-origin loading errors.

import { existsSync, globSync } from 'node:fs';

import { expect, test } from '@playwright/test';

const BUILD_DIR = new URL('../build/', import.meta.url);

if (!existsSync(BUILD_DIR)) {
    throw new Error('site/build/ not found. Run `npm run pure && npm run build` in site/ first.');
}

// Every page in the build: `index.html` -> `/`, `grids/index.html` -> `/grids/`.
const PAGES = globSync('**/index.html', { cwd: BUILD_DIR })
    .map((file) => `/${file.replace(/index\.html$/, '')}`)
    .sort();

const EXPECTED_PAGES = [
    '/', '/start/', '/base/', '/grids/', '/forms/', '/buttons/', '/tables/',
    '/menus/', '/layouts/', '/customize/', '/extend/', '/tools/',
];

// Pages that already scroll horizontally on the live site (pre-existing bugs in
// the static layout examples). Remove an entry once that layout is fixed.
const KNOWN_HORIZONTAL_SCROLL = {
    '/layouts/tucked-menu/': ['desktop', 'mobile'],
    '/layouts/tucked-menu-vertical/': ['mobile'],
};

test('build contains the documentation pages', () => {
    expect(PAGES).toEqual(expect.arrayContaining(EXPECTED_PAGES));
});

for (const path of PAGES) {
    test(`renders ${path}`, async ({ page, baseURL }) => {
        const origin = new URL(baseURL).origin;
        const problems = [];

        // Keep the test hermetic: block third-party requests (analytics, icon kits, CDNs).
        await page.route((url) => url.origin !== origin, (route) => route.abort());

        page.on('pageerror', (err) => problems.push(`uncaught error: ${err.message}`));
        page.on('console', (msg) => {
            if (msg.type() === 'error' && /hydrat|Minified React error/i.test(msg.text())) {
                problems.push(`React error: ${msg.text()}`);
            }
        });
        page.on('response', (res) => {
            if (new URL(res.url()).origin === origin && res.status() >= 400) {
                problems.push(`${res.status()} ${res.url()}`);
            }
        });
        page.on('requestfailed', (req) => {
            if (new URL(req.url()).origin === origin) {
                problems.push(`request failed: ${req.url()} (${req.failure()?.errorText})`);
            }
        });

        const response = await page.goto(path, { waitUntil: 'networkidle' });

        expect(response?.status()).toBe(200);
        await expect(page).toHaveTitle(/Pure/);

        // Pure's CSS is loaded and applied: `.pure-g` is a wrapping flex row and
        // `.pure-u-1-2` is half its width. (Some layout examples restyle buttons,
        // but none restyle the grid.)
        const grid = await page.evaluate(() => {
            const row = document.createElement('div');
            row.className = 'pure-g';
            row.style.width = '200px';
            row.innerHTML = '<div class="pure-u-1-2"></div>';
            document.body.append(row);
            const { display, flexWrap } = getComputedStyle(row);
            const unitWidth = row.firstElementChild.getBoundingClientRect().width;
            row.remove();
            return { display, flexWrap, unitWidth };
        });
        expect(grid, 'Pure CSS should style .pure-g and .pure-u-1-2')
            .toEqual({ display: 'flex', flexWrap: 'wrap', unitWidth: 100 });

        const text = await page.locator('body').innerText();
        expect(text.trim().length, 'page should render content').toBeGreaterThan(100);

        // Can the visitor actually scroll sideways? (Off-canvas menus that are
        // clipped don't count.)
        const scrollX = await page.evaluate(() => {
            window.scrollTo(100000, window.scrollY);
            return window.scrollX;
        });
        const project = test.info().project.name;
        if (KNOWN_HORIZONTAL_SCROLL[path]?.includes(project)) {
            test.info().annotations.push({ type: 'known issue', description: `scrolls horizontally by ${scrollX}px` });
        } else {
            expect(scrollX, 'page should not scroll horizontally').toBe(0);
        }

        expect(problems).toEqual([]);
    });
}
