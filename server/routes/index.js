// RESTFul api handlers

module.exports = (app) => {
    app.get('/events', require('./event').get);
    app.post('/events', require('./event').post);
    app.delete('/events/:id',  require('./event').delete);

    app.post('/login', require('./login').post);
    app.post('/logout', require('./login').post);

    app.post('/registry', require('./registry').post);
};