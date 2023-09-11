//require express
const express = require('express');
//initiallize app
const app = express();
// creating port
const PORT = 8000;

//server listen port
app.listen(PORT, (err) => {
    if(err){
        console.log(`Error in starting the server: ${err}`);
    }
    else{
        console.log(`Starting the server with PORT: ${PORT}`);
    }
})