/**
 * Created by zhaofeng on 7/11/16.
 */
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from '../reducers';

export function createRedux(initialState) {
    const middleware = [thunk, logger];

    let finalCreateStore = applyMiddleware(...middleware)(createStore);

    let store = finalCreateStore(reducer, initialState);

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            store.replaceReducer(reducer);
        });
    }
    return store;
}