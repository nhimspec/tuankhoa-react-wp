import * as Types from './../constants/ActionTypes';

var initialState = {};

const post = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_POST:
            state = action.post;

            return state;
        default:
            return state;
    }
};

export default post;