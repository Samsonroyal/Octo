const express = require('express');
const router = express.Router();

router.get('/home', (req, res) => {
    res.render('home');
});

router.post('/', (req, res) => {
    console.log(req.body);
});

module.exports = router;