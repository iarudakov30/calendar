import NotificationConstants from '../constants/NotificationConstants';

const initialState = {
    type: '',
    text: '',
    isShow: false
};

export default function notification(state = initialState, action) {
    switch (action.type) {
        case NotificationConstants.NOTIFICATION_SHOW:
            return { ...state,
                isShow: true,
                text: action.data.text,
                type: action.data.type
            };

        case NotificationConstants.NOTIFICATION_HIDE:
            return { ...state,
                isShow: false
            };

        default:
            return state;
    }
}