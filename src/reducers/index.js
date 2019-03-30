// ----
// Dependencies
import { combineReducers } from 'redux';
import randomReducer from './randomReducer';
import historyReducer from './historyReducer';
import primaryReducer from './primaryReducer';
import secondaryReducer from './secondaryReducer';
import tertiaryReducer from './tertiaryReducer';

export default combineReducers({
    random: randomReducer,
    history: historyReducer,
    primary: primaryReducer,
    secondary: secondaryReducer,
    tertiary: tertiaryReducer
});
