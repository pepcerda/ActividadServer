require('dotenv').config(); 

const createError = require("http-errors"); 
const express = require('express'); 
const morgan = require('morgan'); 
const app= express(); 

//Configs
require('./config/db.config'); 

// Middlewares
app.use(morgan("dev")); 
app.use(express.json()); 

//Routes
const routes = require('./config/routes.config'); 
app.use('/', routes);

// Error handling
const port = process.env.PORT || 8000; 

app.listen(port, () => {
    console.info(`Application running on port ${port}`);
}); 
