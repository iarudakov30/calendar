import AuthConstants from '../constants/AuthConstants';

const initialState = {
    user: JSON.parse(localStorage.getItem('user')) || {},
    error: null,
    fetching: false
};

export default function app(state = initialState, action) {
    switch (action.type) {

        case AuthConstants.LOGIN_REQUEST:
            return { ...state,
                fetching: true
            };

        case AuthConstants.LOGIN_SUCCESS:
            if (action.data !== null) {
                localStorage.setItem('user', JSON.stringify(action.data));
            }

            return { ...state,
                fetching: false,
                error: null,
                user: action.data
            };

        case AuthConstants.LOGIN_FAILURE:
            return { ...state,
                fetching: false,
                error: action.data
            };

        case AuthConstants.LOG_OUT:
            state = undefined;
            localStorage.removeItem('user');
            return { state
            };

        case AuthConstants.REGISTRY_REQUEST:
            return { ...state,
                fetching: true
            };

        case AuthConstants.REGISTRY_SUCCESS:
            if (action.data !== null) {
                localStorage.setItem('user', JSON.stringify(action.data));
            }

            return { ...state,
                fetching: false,
                error: null,
                user: action.data
            };

        case AuthConstants.REGISTRY_FAILURE:
            return { ...state,
                fetching: false,
                error: action.data
            };


        default:
            return state;
    }
}