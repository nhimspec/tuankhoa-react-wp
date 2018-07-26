import * as Types from './../constants/ActionTypes';

var initialState = [];

const products = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_ALL_POST:
            state = action.posts;
            
            return [...state];
        default:
            return [...state];
    }
};

export default products;