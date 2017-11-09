import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import router from './router';

import configureStore from './store'
import rootSaga from './sagas';

const store = configureStore();
store.runSaga(rootSaga);

ReactDOM.render (
    <Provider store={store}>
        {router}
    </Provider>,
    document.getElementById('app')
);