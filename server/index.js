/**
 * EXPRESS SERVER FILE
 * Author: Rajat Kumar
 *
 */

// Dependencies
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';
const DEV_LOCALHOST_PORT = 7070;


// Express app
var app = express();


// Middlewares

// app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

// app.use(cors());

// API end points
// app.use( '*' , Routes);

app.use(express.static(path.join(__dirname, '../dist')));

// Home Page Route
app.use( '*' , ( req , res , next ) => {
    console.log('Hello Fetch');
    //res.send('Hello');
    res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});

// use JWT auth to secure the api
//app.use(jwt());

// global error handler
// app.use(errorHandler);


/**
 * Listening to port 8080
 * @todo Import from config file
 */
app.listen(DEV_LOCALHOST_PORT , ()=>{console.log(`Server listening on port ${DEV_LOCALHOST_PORT}!!`)});
