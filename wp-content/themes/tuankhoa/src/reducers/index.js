import { combineReducers } from 'redux';
import posts from './posts';

const myReducer = combineReducers({
    posts
});

export default myReducer;