const router = require('express').Router();
const Booking = require('../models/booking');
const bookingManager = require('../managers/booking');
const bookingValidations = require('../validations/booking');
const errorDetails = require('../utils/error-details');
const common = require('../utils/common');
const moment = require('moment');

router.post('/check', async (req, res) => {
    try {
        const errors = bookingValidations.check(req.body).error;
        if (errors)
            return res.status(400).send(errorDetails(errors));

        if (!common.compareDates(req.body.startDate, req.body.endDate))
            return res.status(400).send(`endDate cannot be earlier than startDate`);

        const busy = await bookingManager.busy(req.body.startDate, req.body.endDate);
        const busyRange = common.getBusyRange(busy);
        const isAvailable = common.isAvailable(req.body.startDate, req.body.endDate, busyRange);
        return res.status(200).send({ available: isAvailable });
    } catch (ex) {
        return res.status(500).send(ex.message);
    }
});

router.post('/busy', async (req, res) => {
    try {
        const errors = bookingValidations.busy(req.body).error;
        if (errors)
            return res.status(400).send(errorDetails(errors));

        if (!common.compareDates(req.body.startDate, req.body.endDate))
            return res.status(400).send(`endDate cannot be earlier than startDate`);

        const busy = await bookingManager.busy(req.body.startDate, req.body.endDate);
        const range = common.getBusyRange(busy);
        return res.status(200).send(range);
    } catch (ex) {
        return res.status(500).send(ex.message);
    }
});

router.post('/available', async (req, res) => {
    try {
        const errors = bookingValidations.available(req.body).error;
        if (errors)
            return res.status(400).send(errorDetails(errors));

        if (!common.compareDates(req.body.startDate, req.body.endDate))
            return res.status(400).send(`endDate cannot be earlier than startDate`);

        const busy = await bookingManager.busy(req.body.startDate, req.body.endDate);
        const busyRange = common.getBusyRange(busy);
        const availableRange = common.getAvailableRange(req.body.startDate, req.body.endDate, busyRange);
        return res.status(200).send(availableRange);
    } catch (ex) {
        return res.status(500).send(ex.message);
    }
});


router.post('/', async (req, res) => {
    try {
        const errors = bookingValidations.create(req.body).error;
        if (errors)
            return res.status(400).send(errorDetails(errors));

        if (!common.compareDates(req.body.startDate, req.body.endDate))
            return res.status(400).send(`endDate cannot be earlier than startDate`);


        const getNextFreeCamper = (busyCampers) => {

            //aktuell nur 1 und 2 möglich!
            const availableIds = [10,11];

            for(let id of availableIds) {
                if (!busyCampers.includes(id))
                return id;
            }
            
            return null;
        };

        const busyCamperIds = await bookingManager.busy(req.body.startDate, req.body.endDate);
        const freeCamperId = getNextFreeCamper(busyCamperIds);



        /*} const busy = await bookingManager.busy(req.body.startDate, req.body.endDate);
            const busyRange = common.getBusyRange(busy);
            //todo debug me
        const isAvailable = common.isAvailable(req.body.startDate, req.body.endDate, busyRange);*/

        if (freeCamperId === null)
            return res.status(400).send(`Date is already booked.`);


        const startDate = new Date(req.body.startDate);
        startDate.setHours(14,0,0,0);

        const endDate = new Date(req.body.endDate);
        endDate.setHours(12,0,0,0);

        const diffTime = Math.abs(endDate - startDate);
        const diffDays = diffTime / (1000 * 60 * 60 * 24); 

        if(diffDays < 0.9) // vorsichtig wegen start und ende
            return res.status(400).send(`Minimum one day.`);

        const booking = await bookingManager.add({
            wohnmobil: { id: freeCamperId, name: 'Wohmobil ' + freeCamperId },
            vorname: req.body.vorname,
            nachname: req.body.nachname,
            geburtsdatum: req.body.geburtsdatum,
            firma: req.body.firma,
            straße: req.body.straße,
            plz: req.body.plz,
            ort: req.body.ort,
            land: req.body.land,
            telefon: req.body.telefon,
            fax: req.body.fax,
            email: req.body.email,
            startDate: startDate,
            endDate: endDate,
        });

        return res.status(200).send(booking);
    } catch (ex) {
        return res.status(500).send(ex.message);
    }
});

module.exports = router;