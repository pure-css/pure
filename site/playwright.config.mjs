import { defineConfig, devices } from '@playwright/test';

const PORT = 4173;
const CI = Boolean(process.env.CI);

// Renders the built site (`npm run build`) in a real browser.
export default defineConfig({
    testDir: 'tests',
    forbidOnly: CI,
    retries: CI ? 1 : 0,
    reporter: CI ? [['github'], ['html', { open: 'never' }]] : 'list',
    use: {
        baseURL: `http://127.0.0.1:${PORT}`,
        trace: 'retain-on-failure',
    },
    projects: [
        { name: 'desktop', use: { ...devices['Desktop Chrome'] } },
        { name: 'mobile', use: { ...devices['Pixel 7'] } },
    ],
    webServer: {
        command: `npm run serve -- --port ${PORT} --host 127.0.0.1 --no-open`,
        url: `http://127.0.0.1:${PORT}/`,
        reuseExistingServer: !CI,
    },
});
