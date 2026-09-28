// Creates `release/<version>/pure-<version>.tar.gz` from `build/`.
// Expects `build/` to already exist (see `npm run release`).

import { copyFileSync, createWriteStream, mkdirSync, rmSync, statSync } from 'node:fs';
import { basename, join } from 'node:path';
import { finished } from 'node:stream/promises';

import archiver from 'archiver';

import { NICK, glob, pkg } from './util.mjs';

export async function release() {
    const { version } = pkg;
    const releaseDir = join('release', version);
    const archivePath = join(releaseDir, `${NICK}-${version}.tar.gz`);

    rmSync(releaseDir, { recursive: true, force: true });

    for (const file of ['LICENSE', 'README.md', 'HISTORY.md']) {
        copyFileSync(file, join('build', file));
    }

    mkdirSync(releaseDir, { recursive: true });

    const files = glob('build/*');
    const archive = archiver('tar', { gzip: true });
    const output = createWriteStream(archivePath);

    archive.pipe(output);

    for (const file of files) {
        archive.file(file, { name: `${NICK}/${version}/${basename(file)}`, stats: statSync(file) });
    }

    await Promise.all([archive.finalize(), finished(output)]);

    console.log(`Compressed ${files.length} files into ${archivePath}.`);
}

if (import.meta.main) {
    await release();
}
