import NotificationConstants from '../constants/NotificationConstants';

function action(type, payload = {}) {
    return {type, ...payload}
}

export const showNotification = {
    show: data => action(NotificationConstants.NOTIFICATION_SHOW, {data}),
    hide: () => action(NotificationConstants.NOTIFICATION_HIDE, {})
};