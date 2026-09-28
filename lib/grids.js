/*
Copyright (c) 2013, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/

// Generates Pure Grids unit CSS. Ported from `rework-pure-grids`, and produces
// the same output that `rework('').use(pureGrids.units(...)).toString()` did.

'use strict';

module.exports = generateGrids;

// -----------------------------------------------------------------------------

// IE < 8 has issues with rounding, reducing the width slightly prevents the
// grid units from wrapping to the next line.
var OLD_IE_WIDTH_DELTA = -0.00031;

// Pure's default grid unit sizes which are used when no unit sizes are
// provided.
var PURE_GRID_UNIT_SIZES = [5, 24];

// Declarations of Pure's `.pure-u` styles that get applied to all of the
// generated grid units.
var PURE_GRID_UNIT_DECLARATIONS = [
    ['display', 'inline-block'],
    ['letter-spacing', 'normal'],
    ['word-spacing', 'normal'],
    ['vertical-align', 'top'],
    ['text-rendering', 'auto'],
];

/**
 * Returns the CSS for Pure Grids units.
 *
 * @param {number|number[]} [units] Grid unit sizes, e.g. `[5, 24]`. When set,
 *     unit rules are generated outside of any media query.
 * @param {object} [options]
 * @param {object} [options.mediaQueries] Map of name -> media query. Each one
 *     wraps unit rules (for `units`, or Pure's default sizes) whose selectors
 *     include the name, e.g. `.pure-u-md-1-2`.
 * @param {number} [options.decimals=4] Decimal places for non-whole widths.
 * @param {boolean} [options.includeOldIEWidths=false] Adds `*width` for IE < 8.
 * @param {boolean} [options.includeReducedFractions=true] Adds a selector for
 *     the reduced fraction, e.g. `.pure-u-1-2` alongside `.pure-u-12-24`.
 * @param {boolean} [options.includeWholeNumbers=true] Adds `.pure-u-1` for
 *     fractions that reduce to a whole number.
 * @param {string} [options.selectorPrefix='.pure-u-']
 * @param {string} [options.indent='  '] Indentation of the output.
 * @returns {string}
 */
function generateGrids(units, options) {
    // Check for specificed `units` Number or Number[], if it's neither, assume
    // this was called with one argument and `units` is really `options`.
    if (typeof units === 'number') {
        units = [units];
    } else if (units && !Array.isArray(units)) {
        options = units;
        units   = null;
    }

    // Apply defaults to any non-specified `options`.
    options = extend({
        decimals: 4,

        includeOldIEWidths     : false,
        includeReducedFractions: true,
        includeWholeNumbers    : true,

        selectorPrefix: '.pure-u-',

        indent: '  '
    }, options);

    var mediaQueries = options.mediaQueries,
        rules        = [];

    // Custom Pure Grids unit size rules, if `units` were specified.
    if (units) {
        rules = rules.concat(generateUnitRules(units, options));
    }

    // Media queries wrappers for either custom or default Pure Grids unit
    // size rules.
    if (mediaQueries) {
        units || (units = PURE_GRID_UNIT_SIZES);

        Object.keys(mediaQueries).forEach(function (name) {
            // Appends the media query's `name` to the selector prefix.
            var mediaRules = generateUnitRules(units, extend({}, options, {
                selectorPrefix: options.selectorPrefix + name + '-'
            }));

            rules.push({
                media: mediaQueries[name],
                rules: mediaRules
            });
        });
    }

    return stringify(rules, options.indent || '  ');
}

function generateUnitRules(units, options) {
    var selectors = {},
        widths, rules;

    // Creates a collection of unique widths -> selectors for all `units`.
    widths = units.reduce(function (widths, numUnits) {
        return generateUnitSelectors(widths, numUnits, options);
    }, {});

    // Creates an ordered collection of abstract CSS rules for the `widths`. And
    // captures all the selectors for creating the generic `.pure-u` rule.
    rules = Object.keys(widths).sort().map(function (width) {
        var widthSelectors = widths[width];

        // Captures a unique set of _all_ the selectors.
        extend(selectors, widthSelectors);

        // Converts `width` to a number and convert `widthSelectors` to array.
        width          = Number(width);
        widthSelectors = Object.keys(widthSelectors).sort(compareSelectors);

        return generateWidthRule(width, widthSelectors, options);
    });

    // Prepends rule that applies the `.pure-u` declarations to all of the grid
    // unit selectors that were created in the process above.
    if (rules.length) {
        rules.unshift({
            selectors   : Object.keys(selectors).sort(compareSelectors),
            declarations: PURE_GRID_UNIT_DECLARATIONS
        });
    }

    return rules;
}

function generateUnitSelectors(widths, numUnits, options) {
    var numerator = 1,
        prefix    = options.selectorPrefix,
        selector, selectors, width, reduced;

    while (numUnits > 0 && numerator <= numUnits) {
        width     = numerator / numUnits;
        selectors = widths[width] || (widths[width] = {});

        // Create and store the selectors, in de-dupped format.
        selector = getSelector(prefix, numerator, numUnits);
        selectors[selector] = true;

        // Adds an additional selector for the reduced fraction if there is one
        // and the `includeReducedFractions` option is truthy.
        if (options.includeReducedFractions) {
            reduced = getReducedFraction(numerator, numUnits);

            // Makes sure the faction has been reduced before adding another
            // selector for the current grid unit.
            if (reduced[0] !== numerator && reduced[1] !== numUnits) {
                // Create and store the selectors, in de-dupped format.
                selector = getSelector(prefix, reduced[0], reduced[1]);
                selectors[selector] = true;

                // Adds an additional, denominator-less selector for fractions
                // whose denominator is `1`.
                if (options.includeWholeNumbers && reduced[1] === 1) {
                    selector = getSelector(prefix, reduced[0]);
                    selectors[selector] = true;
                }
            }
        }

        // Update numerator and process the next grid unit width.
        numerator += 1;
    }

    return widths;
}

function generateWidthRule(width, selectors, options) {
    var rule = {
        selectors: selectors,

        declarations: [
            ['width', toPercentage(width, options.decimals)]
        ]
    };

    // Adds an additional `*width` declaration for IE < 8 if the width is < 100%
    // and the `includeOldIEWidths` option is truthy.
    if (options.includeOldIEWidths && width < 1) {
        // Updates the width value for the `*width` property to ensure IE < 8's
        // rounding issues don't break the grid.
        width += OLD_IE_WIDTH_DELTA;

        rule.declarations.push(['*width', toPercentage(width, options.decimals)]);
    }

    return rule;
}

// -- Stringify ----------------------------------------------------------------

// Formats `rules` the way the `css` package's stringify did for Rework: rules
// separated by a blank line, one selector and one declaration per line, and
// `@media` blocks indented one level.
function stringify(rules, indent) {
    return rules.map(function (rule) {
        if (rule.media) {
            return '@media ' + rule.media + ' {\n' +
                rule.rules.map(function (r) {
                    return stringifyRule(r, indent, 1);
                }).join('\n\n') +
                '\n}';
        }

        return stringifyRule(rule, indent, 0);
    }).join('\n\n');
}

function stringifyRule(rule, indent, depth) {
    var outer = indent.repeat(depth),
        inner = indent.repeat(depth + 1);

    return rule.selectors.map(function (s) { return outer + s; }).join(',\n') +
        ' {\n' +
        rule.declarations.map(function (d) {
            return inner + d[0] + ': ' + d[1] + ';';
        }).join('\n') +
        '\n' + outer + '}';
}

// -- Utilities ----------------------------------------------------------------

function compareSelectors(a, b) {
    var aFrac = getSelectorFraction(a),
        bFrac = getSelectorFraction(b);

    // Sort by denominator first.
    if (aFrac[1] < bFrac[1]) { return -1; }
    if (aFrac[1] > bFrac[1]) { return 1; }

    // When the denominators are the same, sort by the numerator.
    if (aFrac[0] < bFrac[0]) { return -1; }
    if (aFrac[0] > bFrac[0]) { return 1; }

    return 0;
}

function extend(obj) {
    Array.prototype.slice.call(arguments, 1).forEach(function (source) {
        if (!source) { return; }

        Object.keys(source).forEach(function (name) {
            obj[name] = source[name];
        });
    });

    return obj;
}

function getGCD(a, b) {
    return b ? getGCD(b, a % b) : a;
}

function getReducedFraction(numerator, denominator) {
    var gcd = getGCD(numerator, denominator);
    return [numerator / gcd, denominator / gcd];
}

function getSelector(prefix, numerator, denominator) {
    var selector = prefix + numerator;

    if (denominator) {
        selector += '-' + denominator;
    }

    return selector;
}

function getSelectorFraction(selector) {
    var captures = selector.match(/(\d+)(?:-(\d+))?$/);

    return [
        parseInt(captures[1], 10),
        parseInt(captures[2], 10) || 0
    ];
}

function toPercentage(num, decimals) {
    num *= 100;
    return num.toFixed(num % 1 === 0 ? 0 : decimals) + '%';
}
