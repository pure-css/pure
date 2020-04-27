/**
 * Calculates filesize for a given module
 */
export function fileSize({ module, decimals = 1, filesizes }) {
    const filesize = (filesizes[module] / 1024);
    return filesize.toFixed(decimals) + 'KB';
}

/**
 * Calculates the module percentage size against all modules
 */
export function filePercent({ modules, module, filesizes }) {
    const total = modules.reduce((size, m) => {
        return size + filesizes[m];
    }, 0);
    return (filesizes[module] / total * 100).toFixed(4) + '%';
}

/**
 * Generic click handler for pages
 */
export function handleClick(e) {
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
}
