import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actGetPostRequest } from './../../actions';
import BlogItem from './../../components/BlogItem/BlogItem';
import Author from './../../components/Author/Author';
class PostContainer extends Component {
    state = {
        isLoadingPost: true
    }
    componentDidMount() {
        this.props.getPost(this.props.match.params.slug);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.post !== this.props.post) {
            this.setState({
                isLoadingPost: false
            })
        }
    }

    render() {
        let { post } = this.props;
        let { isLoadingPost } = this.state;
        if (isLoadingPost) {
            return ('');
        } else {
            return (
                <div class="blog-posts">
                    <BlogItem
                        post={post}
                        postContent={post.content.rendered}
                        isShowReadMore={false}
                    />
                    <Author 
                        post={post}
                    />
                </div>
            );
        }
    }
}

const mapStateToProps = state => ({
    post: state.post
});

const mapDispatchToProps = (dispatch, props) => ({
    getPost: (postSlug) => {
        dispatch(actGetPostRequest(postSlug));
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);