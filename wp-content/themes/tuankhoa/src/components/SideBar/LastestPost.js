import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getPostThumbnail } from './../../utils/helper';

class LastestPost extends Component {
    render() {
        const { post } = this.props;
        let postThumbnail = getPostThumbnail(post, 'w1000x600');
        return (
            <div className="latest-post">
                {
                    postThumbnail ? <div className="l-post-image">
                        <img src={postThumbnail} alt={post.title.rendered} />
                    </div> : ''
                }
                <div className="post-info">
                    <a className="btn category-btn" href="#">TRAVEL</a>
                    <h5>
                        <Link
                            to={`/post/${post.slug}`}
                        >
                            <b className="light-color">{post.title.rendered}</b>
                        </Link>
                    </h5>
                    <h6 className="date"><em>Monday, October 13, 2017</em></h6>
                </div>
            </div>
        );
    }
}

export default LastestPost;