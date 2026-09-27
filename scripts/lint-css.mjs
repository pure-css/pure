// Lints Pure's source CSS with CSSLint, using the rules in `.csslintrc`.
// Every rule is enabled as a warning unless disabled in `.csslintrc`; only
// errors (e.g. parse errors) fail the lint.

import csslint from 'csslint';

import { MODULES, glob, read } from './util.mjs';

const { CSSLint } = csslint;

function getRuleset() {
    const { '*': star, ...options } = JSON.parse(read('.csslintrc'));
    const defaultDisabled = star === false;
    const ruleset = {};

    for (const { id } of CSSLint.getRules()) {
        if (options[id] || !defaultDisabled) {
            ruleset[id] = 1;
        }
    }

    for (const [id, level] of Object.entries(options)) {
        if (level) {
            ruleset[id] = level;
        } else {
            delete ruleset[id];
        }
    }

    return ruleset;
}

const plural = (n, word) => `${n} ${word}${n === 1 ? '' : 's'}`;

/** Lints all source CSS. Returns `true` when there are no errors. */
export function lintCss() {
    const ruleset = getRuleset();
    let errors = 0;

    for (const mod of MODULES) {
        const files = glob(`src/${mod}/css/*.css`);

        for (const file of files) {
            const css = read(file);

            if (!css.length) {
                console.log(`Skipping empty file ${file}.`);
                continue;
            }

            const { messages } = CSSLint.verify(css, ruleset);

            if (messages.length) {
                console.log(`Linting ${file}...`);
            }

            for (const { type, line, col, message, rule } of messages) {
                console.log(`[${line === undefined ? 'GENERAL' : `L${line}:C${col}`}]`);
                console.log(`${type.toUpperCase()}: ${message} ${rule.desc} (${rule.id}) Browsers: ${rule.browsers}`);

                if (type === 'error') {
                    errors += 1;
                }
            }
        }

        console.log(`${mod}: ${plural(files.length, 'file')} linted.`);
    }

    if (errors) {
        console.error(`CSSLint found ${plural(errors, 'error')}.`);
        return false;
    }

    console.log('CSS lint free.');
    return true;
}

if (import.meta.main && !lintCss()) {
    process.exitCode = 1;
}
