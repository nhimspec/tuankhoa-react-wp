import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actGetLastestPostRequest } from './../../actions';
import LastestPost from '../../components/SideBar/LastestPost';

class LastestPostsContainer extends Component {
    componentDidMount() {
        this.props.getLastestPosts(4);
    }

    showLastestPostItem = (lastestPosts) => (
        lastestPosts.map((post, key) => (
            <LastestPost
                key={key}
                post={post}
            />
        ))
    )

    render() {
        const { lastestPosts } = this.props;
        return (
            <div className="sidebar-section latest-post-area">
                <h4 className="title"><b className="light-color">Bài viết mới nhất</b></h4>
                {this.showLastestPostItem(lastestPosts)}
            </div>
        );
    }
}


const mapStateToProps = state => ({
    lastestPosts: state.lastestPosts
});

const mapDispatchToProps = (dispatch, props) => ({
    getLastestPosts: (limit) => {
        dispatch(actGetLastestPostRequest(limit));
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(LastestPostsContainer);