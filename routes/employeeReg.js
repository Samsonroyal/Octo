const express = require('express');
const router = express.Router();

router.get('/employeeReg', (req, res) => {
    res.render('employeeReg');
});

router.post('/', (req, res) => {
    console.log(req.body);
});

module.exports = router;