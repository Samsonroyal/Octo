const express = require('express');
const router = express.Router();

router.get('/dashboard', (req, res) => {
    res.render('dashboard');
});

router.post('/dashboard', (req, res) => {
    console.log(req.body);
});

module.exports = router;