import * as Types from './../constants/ActionTypes';
import ApiCaller from './../utils/ApiCaller';

export const actGetAllPostRequest = () => (
    (dispatch) => (
        ApiCaller.getPosts().then(res => {
            dispatch(actGetAllPost(res));
        })
    )
);

export const actGetAllPost = (posts) => ({
    type: Types.GET_ALL_POST,
    posts
});