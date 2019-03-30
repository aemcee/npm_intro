const path = require('path');
console.log('./ from testPath/index.js: ',path.resolve('.'));
console.log('__dirname from testPath/index.js: ',path.resolve(__dirname));
console.log('__filename from testPath/index.js: ',path.resolve(__filename));
__dirname,__filename