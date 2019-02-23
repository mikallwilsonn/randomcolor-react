// ----
// Dependencies
import { combineReducers } from 'redux';
import randomReducer from './randomReducer';
import historyReducer from './historyReducer';
import primaryReducer from './primaryReducer';

export default combineReducers({
    random: randomReducer,
    history: historyReducer,
    primary: primaryReducer
});
