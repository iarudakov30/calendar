const log = require('../lib/log')(module);

const mongoose = require('../lib/mongoose'),
    Schema = mongoose.Schema;

const EventSchema = new Schema({
    title: {type: String, required: true},
    start: {type: Number, required: true},
    duration: {type: Number, min:0, required: true}
});

EventSchema.statics.listEvents = () => {

    const Event = mongoose.model('Event', EventSchema);
    return Event.find( err => {
        if (err) {
            log.error(err);
        }
    });
};

EventSchema.statics.createEvent = (data) => {

    const start = 480; //8.00 AM
    const fromStartArray = data.from.split(':');
    const fromStartMin = +fromStartArray[0]*60 + +fromStartArray[1] - start;

    const toEndArray = data.to.split(':');
    const toEndMin = +toEndArray[0]*60 + +toEndArray[1] - start;

    const duration = toEndMin - fromStartMin;

    const Event = mongoose.model('Event', EventSchema);
    const event = new Event({
        title: data.title,
        start: fromStartMin,
        duration: duration
    });

    return event.save( err => {
        if (err) {
           log.error(err);
        }
    });
};

EventSchema.statics.deleteEvent = (id) => {

    const Event = mongoose.model('Event', EventSchema);
    return Event.findByIdAndRemove(id, (err) => {
        if (err) {
            log.error(err);
        }
    });
};

exports.Event = mongoose.model('Event', EventSchema);