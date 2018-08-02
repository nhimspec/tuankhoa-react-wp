import { combineReducers } from 'redux';
import posts from './posts';
import post from './post';
import lastestPosts from './lastestPosts';

const myReducer = combineReducers({
    posts,
    post,
    lastestPosts
});

export default myReducer;