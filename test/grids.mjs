// The fixtures were generated with Rework (`rework-pure-grids` and
// `rework-mutate-selectors`) before it was removed, so these tests pin the
// build to Rework's output.

import { readFileSync } from 'node:fs';

import t from 'tap';

import pure from '../index.js';
import generateGrids from '../lib/grids.js';
import { prefixSelectors } from '../scripts/prefix-selectors.mjs';
import cases from './fixtures/cases.json' with { type: 'json' };

const fixture = (name) => readFileSync(new URL(`fixtures/${name}`, import.meta.url), 'utf8');

// api
t.equal(pure.generateGrids, generateGrids, 'should expose generateGrids');

// grids
for (const { name, units, options } of cases.grids) {
    t.equal(generateGrids(units, options), fixture(`grids-${name}.css`), `grids: ${name}`);
}

t.equal(generateGrids(), '', 'grids: no units or media queries');
t.equal(
    generateGrids({ indent: '    ', mediaQueries: cases.grids[1].options.mediaQueries }),
    fixture('grids-responsive.css'),
    'grids: options as the only argument',
);

// selectors
t.equal(
    prefixSelectors(fixture('base-input.css'), '.pure'),
    fixture('base-context.css'),
    'prefixSelectors: should match base-context output',
);

t.throws(
    () => prefixSelectors('@media print { a { color: red; } }', '.pure'),
    /unsupported atrule/,
    'prefixSelectors: should reject at-rules',
);
