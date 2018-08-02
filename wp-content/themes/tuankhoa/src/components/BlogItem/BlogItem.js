import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getPostThumbnail } from './../../utils/helper';

class BlogItem extends Component {
    render() {
        const { post, postContent,isShowReadMore } = this.props;
        let postThumbnail = getPostThumbnail(post, 'w1000x600');
        return (
            <div className="single-post">
                {
                    postThumbnail ?
                        <div className="image-wrapper">
                            <img src={postThumbnail} alt={post.title.rendered} />
                        </div> : ''
                }

                <div className="icons">
                    <div className="left-area">
                        <a className="btn caegory-btn" href="#"><b>TRAVEL</b></a>
                    </div>
                    <ul className="right-area social-icons">
                        <li><a href="#"><i className="ion-android-share-alt"></i>Share</a></li>
                        <li><a href="#"><i className="ion-android-favorite-outline"></i>03</a></li>
                        <li><a href="#"><i className="ion-android-textsms"></i>06</a></li>
                    </ul>
                </div>
                <p className="date"><em>Monday, October 13, 2017</em></p>
                <h3 className="title">
                    <Link
                        to={`/post/${post.slug}`}
                    >
                        <b className="light-color">
                            {post.title.rendered}
                        </b>
                    </Link>
                </h3>
                <div dangerouslySetInnerHTML={{ __html: postContent }} />
                {
                    isShowReadMore ? 
                        <Link 
                            className="btn read-more-btn"
                            to={`/post/${post.slug}`}
                        >
                            <b>READ MORE</b>
                        </Link> : ''
                }
            </div>
        );
    }
}

export default BlogItem;