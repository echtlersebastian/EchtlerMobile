const Booking = require('../models/booking');
const moment = require('moment');
const common = require('../utils/common');

const Manager = {
    busy: async (startDate, endDate) => {
        startDate = moment(startDate);
        endDate = moment(endDate);
        const t = await Booking.find({"startDate": { "$lte": endDate}, "endDate": {"$gte": startDate} }).sort({startDate:1});;
        const t2 = common.groupBy(t,i => i.wohnmobil.id);

        // console.log("grouped bookings",t2);        
        let busyCampers = [];

        for(let key of t2.keys()){
            if(t2.get(key).length > 0)
                busyCampers.push(key);
        }

        // console.log("busyCampers",busyCampers);

        return busyCampers; // [0,1,1212]
    },
    busy2: async (startDate, endDate) => {
        startDate = moment(startDate);
        endDate = moment(endDate);
        const t = await Booking.find({"startDate": { "$lte": endDate}, "endDate": {"$gte": startDate} }).sort({startDate:1});;
        console.log(t);
        return t === null ? false : t;
    },
    add: async p => {
        const t = new Booking(p);
        const r = await t.save();
        return r === null ? false : r;
    }
};

module.exports = Manager;