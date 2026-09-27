// Lints and builds Pure. Run via `npm run watch`, which re-runs this script
// whenever a file in `src/` changes.

import { build } from './build.mjs';
import { lintCss } from './lint-css.mjs';

if (lintCss()) {
    await build().catch((err) => console.error(err));
}
