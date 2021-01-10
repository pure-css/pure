const crypto = require('crypto');
const fs = require('fs');
const gzip = require('gzip-size');
const path = require('path');
const { version } = require('../../package.json');

const pureDir = path.resolve(__dirname, '..', 'static', 'css', 'pure');
const pureMin = fs.readFileSync(path.resolve(pureDir, 'pure-min.css'), 'utf8');

// use pure-min.css to determine site integrity hash
const sriHash = crypto.createHash('sha384').update(pureMin, 'utf8').digest('base64');

// copy/pastable code snippet for users
module.exports.PURE_DOWNLOAD_SNIPPET = `<link rel="stylesheet" href="https://unpkg.com/purecss@${version}/build/pure-min.css" integrity="sha384-${sriHash}" crossorigin="anonymous">`;

// calculate each pure module size
module.exports.moduleSizes = function moduleSizes() {
    const files = fs.readdirSync(pureDir);

    // collect all minified module files
    const modules = files.filter(file => (/-min\.css$/).test(file))
        .map(file => file.replace(/-min\.css$/, ''));

    // get sizes across all modules
    const moduleSizes = modules.map(module => {
        const filePath = path.join(pureDir, module + '-min.css');
        const contents = fs.readFileSync(filePath, { encoding: 'utf-8' });
        return gzip.sync(contents);
    });

    // return final list of sizes
    return moduleSizes.reduce((map, size, i) => {
        map[modules[i]] = size;
        return map;
    }, {});
};
