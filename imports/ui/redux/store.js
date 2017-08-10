import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import logger from 'redux-logger';

import reducers from './combine-reducers';

export default createStore(
    reducers,
    composeWithDevTools(applyMiddleware(
        logger,
    ))
);
