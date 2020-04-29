const Booking = require('../models/booking');
const moment = require('moment');

const Manager = {
    busy: async (startDate, endDate) => {
        startDate = moment(startDate);
        endDate = moment(endDate);
        const t = await Booking.find({"startDate": {"$gte": startDate, "$lte": endDate}}).sort({startDate:1});;
        return t === null ? false : t;
    },
    add: async p => {
        const t = new Booking(p);
        const r = await t.save();
        return r === null ? false : r;
    }
};

module.exports = Manager;