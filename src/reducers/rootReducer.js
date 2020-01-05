import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actions from '../actions';


const user = handleActions({
    [actions.registration](state, { payload }) {
        //тут будут асинхронные функции запроса к серверу
        //payload = инфа с форм
    },
    [actions.login](state, { payload }) {
        //тут будут асинхронные функции запроса к серверу
    },
}, {});

export default combineReducers({
    user,
});