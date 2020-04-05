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

function checkAvailability(_startDate, _endDate){
    let total = 0;
    const case1 = Booking.find({ 
        startDate: { 
            $lt: _startDate
        },
        endDate : {
            $gt: _endDate
        }
    }).exec((err, result)=>{
        err ?? console.log(err);
        total += result.length;
    });
    const case2 = Booking.find({
        startDate : {
            $lt: _startDate,
            $gt: _endDate
        }, 
        endDate : {
            $lt: _endDate,
            $gt: _startDate
        }
      }).exec((err, result)=>{
        err ?? console.log(err);
        total += result.length;
    });
    const case3 = Booking.find({
        startDate: {
            $gt: _startDate,
            $lt: _endDate
        },
        endDate : {
            $gt: _endDate,
            $gt: _startDate
        }
    }).exec((err, result)=>{
        err ?? console.log(err);
        total += result.length;
    });
    const case4 = Booking.find({
        startDate: {
            $gt: _startDate
        },
        endDate: {
            $lt: _endDate
        }
    }).exec((err, result)=>{
        err ?? console.log(err);
        total += result.length;
    });

    return total <= 1;
}

module.exports = {
    checkAvailability : checkAvailability
}