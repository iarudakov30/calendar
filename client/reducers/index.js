import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

import auth from './auth'
import calendar from './calendar'
import notification from './notification'

export default combineReducers({
    auth,
    calendar,
    notification,
    form: formReducer,
    routing: routerReducer
})