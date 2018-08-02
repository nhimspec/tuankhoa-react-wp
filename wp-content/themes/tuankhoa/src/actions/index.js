import * as Types from './../constants/ActionTypes';
import ApiCaller from './../utils/ApiCaller';

export const actGetAllPostRequest = () => (
    (dispatch) => (
        ApiCaller.getAllPosts().then(res => {
            dispatch(actGetAllPost(res));
        })
    )
);

export const actGetAllPost = (posts) => ({
    type: Types.GET_ALL_POST,
    posts
});

export const actGetLastestPostRequest = (limit) => (
    (dispatch) => (
        ApiCaller.getLastestPosts(limit).then(res => {
            dispatch(actGetLastestPost(res));
        })
    )
);

export const actGetLastestPost = (posts) => ({
    type: Types.GET_LASTEST_POSTS,
    posts
});

export const actGetPostRequest = (postSlug) => (
    (dispatch) => (
        ApiCaller.getPost(postSlug).then(res => {
            dispatch(actGetPost(res));
        })
    )
);

export const actGetPost = (post) => ({
    type: Types.GET_POST,
    post
});