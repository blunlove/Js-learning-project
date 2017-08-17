let express = require('express');
let router = express.Router();

router.post('/', (req, res, next) => {
    res.clearCookie("account",{path: '/'});
    res.send();
});

module.exports = router;