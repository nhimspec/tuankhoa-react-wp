import React, { Component } from 'react';
import BlogItem from '../BlogItem/BlogItem';

class BlogList extends Component {
    render() {
        return (
            <div className="blog-posts">

                {this.props.children}
                <a className="btn load-more-btn" target="_blank" href="#">LOAD OLDER POSTS</a>

            </div>
        );
    }
}

export default BlogList;