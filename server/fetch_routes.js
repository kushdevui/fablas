
//  Dependencies
import express from 'express';
const path = require('path');




const fetch_router = express.Router();

app.use(express.static(path.join(__dirname, '../dist')));

// Home Page Route
fetch_router.get( '*' , ( req , res , next ) => {
    console.log('Hello Fetch');
    //res.send('Hello');
    res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});
// // Product Endpoint
// fetch_router.use('/products',productController);
// // Users Endpoint
// fetch_router.use( '/users' , usersController);



// Exporting the Module
export default fetch_router;