import React, { Component } from 'react';
import BlogList from '../../components/BlogList/BlogList';
import BlogItem from '../../components/BlogItem/BlogItem';
import { connect } from 'react-redux';
import { actGetAllPostRequest } from './../../actions';

class BlogContainer extends Component {

    componentDidMount() {
        this.props.getAllBlog();
    }

    showBlogItem = (posts) => (
        posts.map((post, key) => (
            <BlogItem
                key={key}
                post={post}
            />
        ))
    )

    render() {
        const { posts } = this.props;
        return (
            <BlogList>
                {this.showBlogItem(posts)}
            </BlogList>
        );
    }
}

const mapStateToProps = state => ({
    posts: state.posts
});

const mapDispatchToProps = (dispatch, props) => ({
    getAllBlog: () => {
        dispatch(actGetAllPostRequest());
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(BlogContainer);