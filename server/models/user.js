const crypto = require('crypto');
const log = require('../lib/log')(module);

const mongoose = require('../lib/mongoose'),
    Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        unique: false,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    hashedPassword: {
        type: String,
        required: true
    },
    salt: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }
});

userSchema.methods.encryptPassword = function(password) {
    return crypto.createHmac('sha1', this.salt).update(password).digest('hex');
};

userSchema.virtual('password')
    .set(function(password) {
        this._plainPassword = password;
        this.salt = Math.random() + '';
        this.hashedPassword = this.encryptPassword(password);
    })
    .get(function() { return this._plainPassword; });


userSchema.methods.checkPassword = function(password) {
    return this.encryptPassword(password) === this.hashedPassword;
};

userSchema.statics.authorize = function(email, password) {
    const User = this;

    let findByEmailQuery = User.findOne({email: email});
    let promise = findByEmailQuery.exec();
    return promise.then((data) => {
        if (data && password) {
            password = data.encryptPassword(password);

            let checkPassQuery = User.findOne({email: email, hashedPassword: password}, (err) => {
                if (err) log.error(err);
            });

            return checkPassQuery.exec();
        } else {
            return null;
        }
    });
};

userSchema.statics.add = function(username, email, password) {

    const User = this;

    let findByEmailQuery = User.findOne({email: email});
    let promise = findByEmailQuery.exec();

    return promise.then((data) => {
        if (data) {
            return {
                'error': 'User with this email is already registered'
            };
        } else {
            let newUser = new User({
                username: username,
                email   : email,
                password: password
            });

            try{
                return newUser.save(function (err) {
                    if (err) log.error(err);
                });
            } catch (e){
                return e;
            }

        }
    });
};

userSchema.statics.findAll = () => {

    const User = this;
    User.find({});
};

exports.User = mongoose.model('User', userSchema);
