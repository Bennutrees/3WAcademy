import { combineReducers } from 'redux';

import authorReducer from './authorReducer';
import bookReducer from './bookReducer';

export default combineReducers({
    authorReducer: authorReducer,
    bookReducer: bookReducer
})