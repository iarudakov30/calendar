const User = require('../models/user').User;
const log = require('../lib/log')(module);

exports.post = (req, res) => {

    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password;
    let result = {};

    User.add(username, email, password)
        .then(data => {

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
    });
};