import { globSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

import pkg from '../package.json' with { type: 'json' };

export { pkg };

export const ROOT = resolve(import.meta.dirname, '..');
export const NICK = 'pure';
export const MODULES = ['base', 'buttons', 'forms', 'grids', 'menus', 'tables'];

// Resolve all relative paths against the repo root.
process.chdir(ROOT);

/** Reads a file as UTF-8, stripping a leading byte order mark. */
export function read(file) {
    const contents = readFileSync(file, 'utf8');
    return contents.charCodeAt(0) === 0xFEFF ? contents.slice(1) : contents;
}

/** Writes a file, creating parent directories as needed. */
export function write(file, contents) {
    mkdirSync(dirname(file), { recursive: true });
    writeFileSync(file, contents);
}

/** Returns the files matching `pattern`, sorted for deterministic output. */
export function glob(pattern) {
    return globSync(pattern).sort();
}
