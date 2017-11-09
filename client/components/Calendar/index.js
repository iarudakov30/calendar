import React, { Component } from 'react'
import PropTypes from 'prop-types'

import EventEditor from '../EventEditor';
import EventsGrid from '../EventsGrid';
import EventsDownload from '../EventsDownload';

export default class Calendar extends Component {

    constructor(props){
        super(props);
    }

    componentWillMount() {
        this.props.loadEvents();
    }

    render() {
        return (
            <div className='row border-bottom white-bg'>
                <div className='col-sm-12'>

                    <EventEditor
                        data={this.props.event}
                        handleFormSubmit={this.props.createEvent}
                    />

                    <EventsDownload
                        events={this.props.events}
                    />

                    <EventsGrid
                        loading={this.props.isFetching}
                        events={this.props.events}
                        loadEvents={this.props.loadEvents}
                        onEventDelete={this.props.deleteEvent}
                    />

                </div>
            </div>
        );
    }
}

Calendar.propTypes = {
    isFetching: PropTypes.bool,
    user: PropTypes.object,
    event: PropTypes.object,
    events: PropTypes.array,
    loadEvents: PropTypes.func,
    deleteEvent: PropTypes.func,
    createEvent: PropTypes.func
};