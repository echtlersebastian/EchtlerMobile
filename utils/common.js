
const moment = require('moment');

module.exports = {
    compareDates: (startDate, endDate) => startDate <= endDate,
    getBusyRange: arr => {
        const range = [];
        arr.forEach(x => {
            let startDate = moment(x.startDate);
            let endDate = moment(x.endDate);
            while (startDate <= endDate) {
                range.push(moment(startDate));
                startDate = moment(startDate).add(1, 'days');
            }
        });
        return range;
    },
    getAvailableRange: (startDate, endDate, busyRange) => {
        busyRange = busyRange.map(x => x.toString().toLowerCase());
        const range = [];
        startDate = moment(startDate);
        endDate = moment(endDate);
        while (startDate <= endDate) {
            if(busyRange.indexOf(startDate.toString().toLowerCase()) === -1) {
                range.push(moment(startDate));
            }

            startDate = moment(startDate).add(1, 'days');
        }
        return range;
    },
    isAvailable: (startDate, endDate, busyRange) => {
        busyRange = busyRange.map(x => x.toString().toLowerCase());
        startDate = moment(startDate).toString().toLowerCase();
        endDate = moment(endDate).toString().toLowerCase();
        return busyRange.indexOf(startDate) === -1 && busyRange.indexOf(endDate) === -1;
    }
}