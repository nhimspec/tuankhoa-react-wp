import React, { Component } from 'react';

class BlogItem extends Component {
    render() {
        const { post } = this.props;
        return (
            <div className="single-post">
                <div className="image-wrapper">
                    <img src="images/blog-1-1000x600.jpg" alt="Blog Image" />
                </div>

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
                    <a href="#">
                        <b className="light-color">
                            {post.title.rendered}
                        </b>
                    </a>
                </h3>
                <div dangerouslySetInnerHTML={{__html: post.excerpt.rendered}} />
                <a className="btn read-more-btn" href="#"><b>READ MORE</b></a>
            </div>
        );
    }
}

export default BlogItem;