import { combineReducers, createStore } from 'redux';
import itemsDataReducer from './itemsData-reducer';
import itemInfoReducer from "./itemInfo-reducer";

const reducers = combineReducers({
    itemsData: itemsDataReducer,
    itemInfo: itemInfoReducer,
});

const store = createStore(reducers);
window.store = store;

export default store;