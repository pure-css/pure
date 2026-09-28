// Builds Pure's CSS from `src/` into `build/`.

import { copyFileSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import { EOL } from 'node:os';
import { basename, dirname, join } from 'node:path';

import autoprefixer from 'autoprefixer';
import CleanCSS from 'clean-css';
import postcss from 'postcss';

import generateGridsCSS from '../lib/grids.js';
import { prefixSelectors } from './prefix-selectors.mjs';
import { MODULES, NICK, glob, pkg, read, write } from './util.mjs';

// -- Config -------------------------------------------------------------------

// Concatenated in order; later entries may depend on earlier ones.
const CONCAT = [
    ['build/base.css', [
        'node_modules/normalize.css/normalize.css',
        'build/base.css',
    ]],
    ['build/buttons.css', [
        'build/buttons-core.css',
        'build/buttons.css',
    ]],
    ['build/forms-nr.css', [
        'build/forms.css',
    ]],
    ['build/forms.css', [
        'build/forms-nr.css',
        'build/forms-r.css',
    ]],
    ['build/grids.css', [
        'build/grids-core.css',
        'build/grids-units.css',
    ]],
    ['build/menus.css', [
        'build/menus-core.css',
        'build/menus-horizontal.css',
        'build/menus-dropdown.css',
        'build/menus-scrollable.css',
        'build/menus-skin.css',
    ]],

    // Rollups

    [`build/${NICK}.css`, [
        'build/base.css',
        'build/grids.css',
        'build/buttons.css',
        'build/forms.css',
        'build/menus.css',
        'build/tables.css',
    ]],
    [`build/${NICK}-nr.css`, [
        'build/base.css',
        'build/grids.css',
        'build/buttons.css',
        'build/forms-nr.css',
        'build/menus.css',
        'build/tables.css',
    ]],
];

const GRIDS = [
    {
        dest: 'build/grids-units.css',
        units: [5, 24],
        options: {},
    },
    {
        dest: 'build/grids-responsive.css',
        options: {
            mediaQueries: {
                sm: 'screen and (min-width: 35.5em)',   // 568px
                md: 'screen and (min-width: 48em)',     // 768px
                lg: 'screen and (min-width: 64em)',     // 1024px
                xl: 'screen and (min-width: 80em)',     // 1280px
                xxl: 'screen and (min-width: 120em)',   // 1920px
                xxxl: 'screen and (min-width: 160em)',  // 2560px
                x4k: 'screen and (min-width: 240em)',   // 3840px
            },
        },
    },
];

// NOTE: there is no `normalize-css` devDependency, so the version renders
// empty. This is kept as-is to match previously published builds.
const normalizeVersion = pkg.devDependencies['normalize-css'] ?? '';

const BANNERS = {
    normalize: [
        '/*!',
        `normalize.css v${normalizeVersion} | MIT License | https://necolas.github.io/normalize.css/`,
        'Copyright (c) Nicolas Gallagher and Jonathan Neal',
        '*/\n',
    ].join('\n'),

    yahoo: [
        '/*!',
        `Pure v${pkg.version}`,
        'Copyright 2013 Yahoo!',
        'Licensed under the BSD License.',
        'https://github.com/pure-css/pure/blob/main/LICENSE',
        '*/\n',
    ].join('\n'),
};

// -- Steps --------------------------------------------------------------------

function copySources() {
    mkdirSync('build', { recursive: true });

    for (const mod of MODULES) {
        for (const file of glob(`src/${mod}/css/*.css`)) {
            copyFileSync(file, join('build', basename(file)));
        }
    }
}

function generateGrids() {
    for (const { dest, units, options } of GRIDS) {
        write(dest, generateGridsCSS(units, { indent: '    ', ...options }));
    }
}

function concat() {
    for (const [dest, srcs] of CONCAT) {
        write(dest, srcs.filter((file) => existsSync(file)).map(read).join(EOL));
    }
}

function baseContext() {
    write('build/base-context.css', prefixSelectors(read('build/base.css'), '.pure'));
}

async function autoprefix() {
    const processor = postcss([autoprefixer()]);

    await Promise.all(glob('build/*.css').map(async (file) => {
        const result = await processor.process(read(file), { from: file, to: file, map: false });

        for (const warning of result.warnings()) {
            console.error(warning.toString());
        }

        write(file, result.css);
    }));
}

function minify() {
    for (const file of glob('build/*.css')) {
        const output = new CleanCSS({ noAdvanced: true, report: 'min', sourceMap: false }).minify([file]);

        if (output.errors.length) {
            throw new Error(output.errors.join('\n'));
        }

        if (output.warnings.length) {
            console.error(output.warnings.join('\n'));
        }

        // `foo.css` -> `foo-min.css`
        write(join(dirname(file), `${basename(file).split('.')[0]}-min.css`), output.styles);
    }
}

function stampBanner(banner, files) {
    for (const file of files) {
        write(file, banner + read(file));
    }
}

function license() {
    stampBanner(BANNERS.normalize, glob(`build/{base,${NICK}}*.css`));
    stampBanner(BANNERS.yahoo, glob('build/*.css'));
}

// -- Main ---------------------------------------------------------------------

export async function build() {
    rmSync('build', { recursive: true, force: true });

    copySources();
    generateGrids();
    concat();

    for (const file of glob('build/*-r.css')) {
        rmSync(file);
    }

    baseContext();
    await autoprefix();
    minify();
    license();

    console.log(`Built ${glob('build/*.css').length} files in build/.`);
}

if (import.meta.main) {
    await build();
}
