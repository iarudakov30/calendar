import { connect } from 'react-redux';

import Calendar from '../components/Calendar';

import * as EventActions from '../actions/CalendarActions';

function mapStateToProps(state) {
    return {
        events: state.calendar.events,
        isFetching: state.calendar.fetching
    }
}

function mapDispatchToProps(dispatch) {
    return {
        createEvent(formProps) {
            dispatch(EventActions.create.request(formProps));
        },
        loadEvents() {
            dispatch(EventActions.load.request());
        },
        deleteEvent(data) {
            dispatch(EventActions.remove.request(data));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar)