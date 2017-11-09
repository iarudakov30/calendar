const Event = require('../models/event').Event;
const log = require('../lib/log')(module);

exports.get = (req, res) => {
    let result = {};

    Event.listEvents()
        .then((data) => {

            if (data.error) {
                result.status = 'error';
                result.error = data.error;
            } else {
                result.status = 'ok';
                result.data = data;
            }

            res.json(result);
        }).catch(err => {

        log.error(err);
        result.status = 'error';
        result.error = err.toString();

        res.json(result);
    })
};

exports.post = (req, res) => {

    let result = {};
    let event = req.body;

    Event.createEvent(event)
        .then((data) => {

            if (data.error) {
                result.status = 'error';
                result.error = data.error;
            } else {
                result.status = 'ok';
                result.data = data;
            }

            res.json(result);
        }).catch(err => {

        log.error(err);
        result.status = 'error';
        result.error = err.toString();

        res.json(result);
    })
};

exports.delete = (req, res) => {

    let result = {};

    let id = req.params.id;

    Event.deleteEvent(id)
        .then((data) => {

            if ((data !== null) && (data.error)) {
                    result.status = 'error';
                    result.error = data.error;
            } else {
                result.status = 'ok';
                result.data = data;
            }

            res.json(result);

        }).catch(err => {

        log.error(err);
        result.status = 'error';
        result.error = err.toString();

        res.json(result);
    })
};