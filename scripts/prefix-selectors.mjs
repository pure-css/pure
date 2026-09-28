// Prefixes every selector in a stylesheet, as `rework-mutate-selectors` did.
// Used to build `base-context.css`.

import postcss from 'postcss';

/**
 * Returns `css` with each selector scoped under `prefix`. Selectors starting
 * with `html` or `body` have that element replaced by `prefix` instead.
 *
 * The output is formatted like the `css` package's stringify (which Rework
 * used), so `base-context.css` is unchanged.
 */
export function prefixSelectors(css, prefix, { indent = '    ' } = {}) {
    const root = postcss.parse(css);

    root.walkRules((rule) => {
        rule.selectors = rule.selectors.map((selector) =>
            /^(html|body)/.test(selector)
                ? selector.replace(/^(html|body)/, prefix)
                : `${prefix} ${selector}`,
        );
    });

    return root.nodes.map((node) => stringifyNode(node, indent)).join('\n\n');
}

function stringifyNode(node, indent) {
    switch (node.type) {
        case 'comment':
            return stringifyComment(node, '');

        case 'rule':
            return stringifyRule(node, indent);

        default:
            // Rework's output for other node types (e.g. `@media`) was never
            // part of Pure's build. Fail loudly rather than guess.
            throw new Error(`prefixSelectors: unsupported ${node.type} node: ${node.toString().slice(0, 40)}`);
    }
}

function stringifyRule(rule, indent) {
    const body = rule.nodes.map((node) => {
        switch (node.type) {
            case 'comment':
                return stringifyComment(node, indent);

            case 'decl':
                return `${indent}${node.prop}: ${stringifyValue(node)};`;

            default:
                throw new Error(`prefixSelectors: unsupported ${node.type} node in rule \`${rule.selector}\``);
        }
    });

    // Like the `css` package, empty rules are dropped, but the separator around
    // them is not. (A rule holding only comments is not empty.)
    if (!rule.nodes.length) {
        return '';
    }

    return `${rule.selectors.join(',\n')} {\n${body.join('\n')}\n}`;
}

function stringifyComment(comment, indent) {
    const { left = '', right = '' } = comment.raws;
    return `${indent}/*${left}${comment.text}${right}*/`;
}

// The `css` package's comment pattern.
const COMMENT_RE = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;

// Rebuilds the value as the `css` package parsed it: all source text after the
// `:` (PostCSS keeps leading comments in `raws.between`), including
// `!important`, trimmed, and then with comments removed.
function stringifyValue(decl) {
    const between = decl.raws.between ?? ':';
    const leading = between.slice(between.indexOf(':') + 1);
    const value = decl.raws.value?.raw ?? decl.value;
    const important = decl.important ? decl.raws.important ?? ' !important' : '';

    return (leading + value + important).trim().replace(COMMENT_RE, '');
}
