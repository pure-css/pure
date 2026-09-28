import t from 'tap';

import pure from '../index.js';

// api
t.ok(pure.getFile);
t.ok(pure.getFilePath);

// assertions
t.match(pure.getFile('pure-min.css'), /pure-button/, 'should load the file');
t.match(pure.getFilePath('pure-min.css'), /pure-min\.css/, 'should return file path');
t.throws(pure.getFile, new Error('undefined does not exist'));
