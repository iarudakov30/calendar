import React, { Component } from 'react'
import PropTypes from 'prop-types'

import fileDownload from 'react-file-download';

export default class EventsDownload extends Component {

    constructor(props) {
        super(props);
    }

    downloadEvents() {

        let returnedData = [];
        for (let key in this.props.events) {
            returnedData.push({
               start:  this.props.events[key].start,
               duration:  this.props.events[key].duration,
               title:  this.props.events[key].title
            });
        }

        fileDownload(JSON.stringify(returnedData, undefined, 4),
            'calendar-events.json');
    }

    render() {

        return (
            <button
                style={{maxWidth: 400+'px', width: 100+'%'}}
                className='btn btn-info center-block'
                onClick={::this.downloadEvents}
            >
                Download events in JSON
            </button>
        );
    }
}

EventsDownload.propTypes = {
    events: PropTypes.array
};