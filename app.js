// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const path = require("path");
const loginroute = require('./routes/login');
const employeeRoutes = require('./routes/employeeRoutes');
const { Server } = require('http');


// Instantiations 
const app = express();


// Configurations
app.set('view engine', 'pug');
app.set('views', './views');

// Middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/login', loginroute);
app.use('/employee', employeeRoutes);

// cater for undefined routes
app.get('*', (req, res) => {
    res.send('The route specified doesnt exist');
});

// Server
app.listen(3000, () => {
    console.log('Listening at port 3000');
});