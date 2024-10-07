import js from '@eslint/js';
import globals from 'globals';
import reactPlugin from 'eslint-plugin-react';

export default [
    js.configs.recommended,
    reactPlugin.configs.flat.recommended,
    {
        ignores: [
            '.idea/',
            '*-debug.log',
            'build/',
            'node_modules/',
            'release/',
            'npm-*.log',
            'site/.docusaurus',
            'site/build',
            'site/node_modules',
            'site/static/css/pure',
        ],
    },
    {
        files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
        languageOptions: {
            ...reactPlugin.configs.flat.recommended.languageOptions,
            ecmaVersion: 2024,
            globals: {
                ...globals.browser,
                ...globals.jest,
                ...globals.mocha,
                ...globals.node,
                ...globals.protractor,
            },
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
                sourceType: 'module',
            },
        },
        plugins: {
            react: reactPlugin,
        },
        rules: {
            indent: [2, 4, { SwitchCase: 1 }],
            quotes: [0, 'single'],
            'no-console': 0,
            'react/no-unescaped-entities': 0,
            'react/prop-types': 0,
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
];
