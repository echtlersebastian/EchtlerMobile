
module.exports = err => {
    if(!err || !err.details)
        return "";

    let errors = "";
    err.details.forEach(detail => errors += `${detail.message}\n`);
    return errors;
}