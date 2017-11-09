const express = require('express');
const path = require('path');
const http = require('http');
const config = require('./server/config');
const log = require('./server/lib/log')(module);
const cors = require('cors');

//init my application
const app = express(path.join(__dirname, 'public'));

app.use(express.favicon()); //favicon.ico
app.use(express.bodyParser()); // req.body......
app.use(express.cookieParser()); // req.headers, req. cookies

app.use(cors({origin: '*'}));//use for diff client and server ports

/*const sessionStore = require('./server/lib/sessionStore');

app.use(express.session({
    secret: config.get('session:secret'),
    key: config.get('session:key'),
    cookie: config.get('session:cookie'),
    store: sessionStore
}));*/

//Middleware
//app.use(require('./server/middleware/sendHttpError'));

//need to be after bodyParser
app.use(app.router);
require('./server/routes')(app);

app.use(express.static(path.join(__dirname, 'public')));

//Logger
if (app.get('env') == 'development') {
    app.use(express.logger('dev'));
} else {
    app.use(express.logger('default'));
}

//init server, listen on current port
const server = http.createServer(app);

server.listen(config.get('port'), () => {
    log.info('Express server listening on port ' + config.get('port'));
});