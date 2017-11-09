import CalendarConstants from '../constants/CalendarConstants';

const initialState = {
    events: [],
    fetching: true
};

export default function calendar(state = initialState, action) {

    switch (action.type) {
        case CalendarConstants.LOAD_EVENTS_REQUEST:
            return { ...state,
                fetching: true
            };

        case CalendarConstants.LOAD_EVENTS_SUCCESS:
            return { ...state,
                fetching: false,
                events: action.data
            };

        case CalendarConstants.LOAD_EVENTS_FAILURE:
            return { ...state,
                fetching: false,
                error: action.error
            };

        case CalendarConstants.DELETE_EVENT_REQUEST:
            return { ...state,
                fetching: true
            };

        case CalendarConstants.DELETE_EVENT_SUCCESS:
            return { ...state,
                fetching: false
            };

        case CalendarConstants.DELETE_EVENT_FAILURE:
            return { ...state,
                fetching: false,
                error: action.error
            };

        case CalendarConstants.CREATE_EVENT_REQUEST:
            return { ...state,
                fetching: true
            };

        case CalendarConstants.CREATE_EVENT_SUCCESS:
            return { ...state,
                fetching: false
            };

        case CalendarConstants.CREATE_EVENT_FAILURE:
            return { ...state,
                fetching: false,
                error: action.error
            };    

        default:
            return state;
    }
}