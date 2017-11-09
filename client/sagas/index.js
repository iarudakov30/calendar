import { takeLatest, put, call } from 'redux-saga/effects';
import {delay} from 'redux-saga'

import AuthConstants from '../constants/AuthConstants';
import * as AuthActions from '../actions/AuthActions';

import CalendarConstants from '../constants/CalendarConstants';
import * as CalendarActions from '../actions/CalendarActions';

import NotificationConstants from '../constants/NotificationConstants';
import * as NotificationActions from '../actions/NotificationActions';

import apiHandler from '../services/api';

function* watchNotification() {
    yield call(delay, 4000);
    yield put(NotificationActions.showNotification.hide());
 }

function* watchLogin(action) {
    try {
        const response = yield call(
            apiHandler,
            '/login',
            'POST',
            action.data
        );

        if (response.status === 'ok') {
            yield put(AuthActions.login.success(response.data));
        } else if (response.status === 'error') {
            yield put(AuthActions.login.failure(response.error));

            const notifData = {
                type: 'warning',
                text: response.error
            };
            yield put(NotificationActions.showNotification.show(notifData));
        }

    } catch (error) {
        yield put(AuthActions.login.failure(error));
        yield put(NotificationActions.showNotification.show({
            type: 'error',
            text: 'Server-side problem. Try it later.'
        }));
    }
}

function* watchRegister(action) {
    try {
        const response = yield call(
            apiHandler,
            '/registry',
            'POST',
            action.data
        );

        if (response.status === 'ok') {
            yield put(AuthActions.register.success(response.data));
        } else if (response.status === 'error') {
            yield put(AuthActions.register.failure(response.error));

            const notifData = {
                type: 'warning',
                text: response.error
            };
            yield put(NotificationActions.showNotification.show(notifData));
        }

    } catch (error) {
        yield put(AuthActions.register.failure(error));
        yield put(NotificationActions.showNotification.show({
            type: 'error',
            text: 'Server-side problem. Try it later.'
        }));
    }
}

function* watchLoadEvents() {
    try {
        const response = yield call(
            apiHandler,
            '/events',
            'GET'
        );

        if (response.status === 'ok') {
            yield put(CalendarActions.load.success(response.data));
        } else if (response.status === 'error') {
            yield put(CalendarActions.load.failure(response.error));

            const notifData = {
                type: 'warning',
                text: response.error
            };
            yield put(NotificationActions.showNotification.show(notifData));
        }

    } catch (error) {
        yield put(CalendarActions.load.failure(error));
        yield put(NotificationActions.showNotification.show({
            type: 'error',
            text: 'Server-side problem. Try it later.'
        }));
    }
}

function* watchCreateEvent(action) {
    try {

        console.log(action.data);

        const response = yield call(
            apiHandler,
            '/events',
            'POST',
            action.data
        );

        if (response.status === 'ok') {
            yield put(CalendarActions.create.success());
            yield put(CalendarActions.load.request());
            yield put(NotificationActions.showNotification.show({
                type: 'success',
                text: 'New Event is added.'
            }));
        } else if (response.status === 'error') {
            yield put(CalendarActions.create.failure(response.error));

            const notifData = {
                type: 'warning',
                text: response.error
            };
            yield put(NotificationActions.showNotification.show(notifData));
        }

    } catch (error) {
        yield put(CalendarActions.create.failure(error));
        yield put(NotificationActions.showNotification.show({
            type: 'error',
            text: 'Server-side problem. Try it later.'
        }));
    }
}

function* watchDeleteEvent(action) {

    try {
        const response = yield call(
            apiHandler,
            `/events/${action.data._id}`,
            'DELETE'
        );
console.log(response);
        if (response.status === 'ok') {
            yield put(CalendarActions.remove.success());
            yield put(CalendarActions.load.request());
            yield put(NotificationActions.showNotification.show({
                type: 'success',
                text: 'The Event deleted.'
            }));
        } else if (response.status === 'error') {
            yield put(CalendarActions.remove.failure(response.error));

            const notifData = {
                type: 'warning',
                text: response.error
            };
            yield put(NotificationActions.showNotification.show(notifData));
        }

    } catch (error) {
        yield put(CalendarActions.remove.failure(error));
        yield put(NotificationActions.showNotification.show({
            type: 'error',
            text: 'Server-side problem. Try it later.'
        }));
    }
}

export default function* rootSaga() {
    yield takeLatest(NotificationConstants.NOTIFICATION_SHOW, watchNotification);
    yield takeLatest(AuthConstants.REGISTRY_REQUEST, watchRegister);
    yield takeLatest(AuthConstants.LOGIN_REQUEST, watchLogin);
    yield takeLatest(CalendarConstants.LOAD_EVENTS_REQUEST, watchLoadEvents);
    yield takeLatest(CalendarConstants.CREATE_EVENT_REQUEST, watchCreateEvent);
    yield takeLatest(CalendarConstants.DELETE_EVENT_REQUEST, watchDeleteEvent);
}