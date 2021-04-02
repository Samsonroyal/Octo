const express = require('express');
const router = express.Router();

router.get('/employeeRoutes', (req, res) => {
    res.render('employeeRoutes');
});

router.post('/', (req, res) => {
    console.log(req.body);
});

module.exports = router;