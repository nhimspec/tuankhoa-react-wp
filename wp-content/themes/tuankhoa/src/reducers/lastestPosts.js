import * as Types from './../constants/ActionTypes';

var initialState = [];

const lastestPosts = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_LASTEST_POSTS:
            state = action.posts;
            
            return [...state];
        default:
            return [...state];
    }
};

export default lastestPosts;