const express = require('express');
const router = express.Router();

router.get('/serviceReq', (req, res) => {
    res.render('serviceReq');
});

router.post('/', (req, res) => {
    console.log(req.body);
});

module.exports = router;