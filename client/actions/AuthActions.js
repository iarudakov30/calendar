import AuthConstants from '../constants/AuthConstants';

function action(type, payload = {}) {
    return {type, ...payload}
}

export const register = {
    request: data => action(AuthConstants.REGISTRY_REQUEST, {data}),
    success: data => action(AuthConstants.REGISTRY_SUCCESS, {data}),
    failure: data => action(AuthConstants.REGISTRY_FAILURE, {data})
};

export const login = {
    request: data => action(AuthConstants.LOGIN_REQUEST, {data}),
    success: data => action(AuthConstants.LOGIN_SUCCESS, {data}),
    failure: data => action(AuthConstants.LOGIN_FAILURE, {data})
};

export const logout = {
    request: () => action(AuthConstants.LOG_OUT, {})
};