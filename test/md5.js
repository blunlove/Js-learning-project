let crypto = require('crypto');
const md5 = text => {
    return crypto.createHash('md5').update(text).digest('hex');
}
console.log(md5('5'));