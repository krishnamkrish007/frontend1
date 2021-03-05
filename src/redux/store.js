import RootReducer from '../redux/reducers/RootReducer';
import {applyMiddleware,createStore} from 'redux';
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from 'redux-thunk';

const initalState = {};

const store = createStore(RootReducer, initalState , composeWithDevTools(applyMiddleware(thunk)))

export default store;