const mongoose = require("mongoose");
require('dotenv/config');
const connectionString = process.env.DB_CONNECT;
mongoose.connect(connectionString, { 
    useUnifiedTopology  : true, 
    useCreateIndex      : true, 
    useNewUrlParser     : true 
}).then(result => {
    console.log("db oline");
}).catch((err)=>{
    console.log(err);
});

mongoose.Promise = global.Promise;

module.exports = {
    Booking: require('../models/booking.model')
}
