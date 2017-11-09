import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import createSagaMiddleware, { END } from 'redux-saga'
import { routerMiddleware } from 'react-router-redux'

import rootReducer from '../reducers'
import history from '../services/history'

export default function configureStore(initialState) {

    const routerMw = routerMiddleware(history);
    const loggerMw = createLogger();
    const sagaMw = createSagaMiddleware();

    let store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(
            sagaMw,
            routerMw,
            loggerMw,
        )
    );

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers');
            store.replaceReducer(nextRootReducer.default);
        })
    }

    store.runSaga = sagaMw.run;
    store.close = () => store.dispatch(END);
    return store
}