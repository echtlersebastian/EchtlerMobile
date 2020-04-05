const db = require('./dbconnection');
const Booking = db.Booking;

function create(){

}

/*
        a -- b Buchungen im System
        x -- y sind neue Buchungen

       1. a -- x -- y -- b
       2. a  -- x -- b -- y
       3. x -- a -- y -- b
       4. x -- a -- b -- y 


*/

async function checkAvailability(_startDate, _endDate){
    let total = 0;

    const case1 = await Booking.find({ 
        startDate: { 
            $lt: _startDate
        },
        endDate : {
            $gt: _endDate
        }
    }).count((err, result)=>{
        err && console.log(err);
        total += result;
    });
    const case2 = await Booking.find({
        startDate : {
            $lt: _startDate,
            $gt: _endDate
        }, 
        endDate : {
            $lt: _endDate,
            $gt: _startDate
        }
      }).count((err, result)=>{
        err && console.log(err);
        total += result;
    });
    const case3 = await Booking.find({
        startDate: {
            $gt: _startDate,
            $lt: _endDate
        },
        endDate : {
            $gt: _endDate,
            $gt: _startDate
        }
    }).count((err, result)=>{
        err && console.log(err);
        total += result;
    });
    const case4 = await Booking.find({
        startDate: {
            $gt: _startDate
        },
        endDate: {
            $lt: _endDate
        }
    }).count((err, result)=>{
        err && console.log(err);
        total += result;
    });

    return case1 + case2 + case3 + case4 <= 1;
}

module.exports = {
    checkAvailability : checkAvailability
}