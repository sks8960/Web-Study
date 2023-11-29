const express = require('express');
const app = express();
const router = express.Router();

router.get('/:board', function (req, res) {
    res.send('Get boards ' + req.params.board);
});

module.exports = router;