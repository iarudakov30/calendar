const mongoose = require('./mongoose');
const express = require('express');
const MongoStore = require('connect-mongo')(express);

const sessionStore = new MongoStore({mongooseConnection: mongoose.connection});

module.exports = sessionStore;