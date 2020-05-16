var tap = require('tap');
var pure = require('../index.js');

// api
tap.ok(pure.getFile);
tap.ok(pure.getFilePath);

// assertions
tap.match(pure.getFile('pure-min.css'), /pure-button/, 'should load the file');
tap.match(pure.getFilePath('pure-min.css'), /pure-min\.css/, 'should return file path');
tap.throws(pure.getFile, new Error('undefined does not exist'));
