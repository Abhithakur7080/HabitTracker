const mongoose = require('mongoose');
// connecting to mongoose
mongoose.connect('mongodb+srv://abhijeetthakur7080:abhi@cluster0.25udaev.mongodb.net/');
// mongoose database connection
const db = mongoose.connection;
db.on('error',console.error.bind(console,"Error connecting to MongoDb"));

db.once('open',function(){
    console.log('Connected to Database :: MondoDB');
});

module.exports=db;