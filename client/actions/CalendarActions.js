import CalendarConstants from '../constants/CalendarConstants';

function action(type, payload = {}) {
    return {type, ...payload}
}

export const load = {
    request: () => action(CalendarConstants.LOAD_EVENTS_REQUEST, {}),
    success: data => action(CalendarConstants.LOAD_EVENTS_SUCCESS, {data}),
    failure: data => action(CalendarConstants.LOAD_EVENTS_FAILURE, {data})
};

export const remove = {
    request: data => action(CalendarConstants.DELETE_EVENT_REQUEST, {data}),
    success: () => action(CalendarConstants.DELETE_EVENT_SUCCESS, {}),
    failure: (data) => action(CalendarConstants.DELETE_EVENT_FAILURE, {data})
};

export const create = {
    request: data => action(CalendarConstants.CREATE_EVENT_REQUEST, {data}),
    success: () => action(CalendarConstants.CREATE_EVENT_SUCCESS, {}),
    failure: data => action(CalendarConstants.CREATE_EVENT_FAILURE, {data})
};