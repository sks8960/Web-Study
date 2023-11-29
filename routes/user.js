const express = require('express');
const app = express();
const router = express.Router();

router.get('/:id', function (req, res) {
    res.send('Get users id ' + req.params.id);
});

module.exports = router;