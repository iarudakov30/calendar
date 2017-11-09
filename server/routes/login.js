const User = require('../models/user').User;
const log = require('../lib/log')(module);

exports.post = (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let result = {};
    User.authorize(email, password)
        .then(data => {

            if (data) {
                result.status = 'ok';
                result.data = data;
            } else {
                result.status = 'error';
                result.error = 'Invalid credentials';
            }

            res.json(result);
        }).catch(err => {
            log.error(err);
            result.status = 'error';
            result.error = 'Server error';

            res.json(result);
    });
};