// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const path = require("path");
const loginroute = require('./routes/login');
const employeeRoutes = require('./routes/employeeRoutes');
const { Server } = require('http');

// Instantiations
const app = express();

//Configurations
app.set('view engine', 'pug');
app.set('views', './views');

//middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

//custom middleware
app.use((req, res, next) => {
    console.log("A new request received at " + Date.now());
    next();
});

// middleware for serving static files(css,js,images)
app.use(express.static('public'));

// Routes
app.use('/login', loginroute);
app.use('/employee', employeeRoutes);

// cater for undefined routes
app.get('*', (req, res) => {
    res.send('The route specified doesnt exist');
});

//Server 
app.listen(3000, () => console.log('listening on port 3000'));