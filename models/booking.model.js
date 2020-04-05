const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    vorname         : { type: String, required  : true},
    nachname        : { type: String, required  : true},
    geburtsdatum    : { type: String, required  : true},
    firma           : { type: String, required  : false},
    straße          : { type: String, required  : true},
    plz             : { type: String, required  : true },
    ort             : { type: String, required  : true },
    land            : { type: String, required  : false, default : "Deutschland" },
    telefon         : { type: String, required  : true },
    fax             : { type: String, required  : false },
    email           : { type: String, required  : true },
    startDate       : { type: Date, required    : true },
    endDate         : { type: Date, required    : true }
});

bookingSchema.set('toJSON', { virtuals : true})

module.exports = mongoose.model('Booking', bookingSchema);
