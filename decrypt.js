var crypto = require('crypto');

const password = '1234567890123456';
const key = crypto.scryptSync(password, 'GfG', 24);
const iv = Buffer.alloc(16, 0); // Initialization vector.


var mykey = crypto.createCipheriv('aes-192-cbc', key, iv);
var mystr = mykey.update('Hola', 'utf8', 'hex')
mystr += mykey.final('hex');

console.log(mystr);

mykey = crypto.createDecipheriv('aes-192-cbc', key, iv);
mystr = mykey.update('82525ef0721fd7e685fd89b568dec1bb', 'hex', 'utf8')
mystr += mykey.final('utf8');

console.log(mystr); 