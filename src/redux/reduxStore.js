import { combineReducers, createStore } from 'redux';
import itemsDataReducer from './newsData-reducer';

const reducers = combineReducers({
    newsData: itemsDataReducer,
});

const store = createStore(reducers);

export default store;