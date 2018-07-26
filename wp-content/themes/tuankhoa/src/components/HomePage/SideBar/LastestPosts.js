import React, { Component } from 'react';

class LastestPosts extends Component {
    render() {
        return (
            <div className="sidebar-section latest-post-area">
                <h4 className="title"><b className="light-color">Latest Posts</b></h4>

                <div className="latest-post" href="#">
                    <div className="l-post-image"><img src="images/recent-post-1-150x200.jpg" alt="Category Image" /></div>
                    <div className="post-info">
                        <a className="btn category-btn" href="#">TRAVEL</a>
                        <h5><a href="#"><b className="light-color">One more night in the clubs</b></a></h5>
                        <h6 className="date"><em>Monday, October 13, 2017</em></h6>
                    </div>
                </div>

                <div className="latest-post" href="#">
                    <div className="l-post-image"><img src="images/recent-post-2-150x200.jpg" alt="Category Image" /></div>
                    <div className="post-info">
                        <a className="btn category-btn" href="#">TRAVEL</a>
                        <h5><a href="#"><b className="light-color">Travel lights in winter</b></a></h5>
                        <h6 className="date"><em>Monday, October 13, 2017</em></h6>
                    </div>
                </div>
                <div className="latest-post" href="#">
                    <div className="l-post-image"><img src="images/recent-post-3-150x200.jpg" alt="Category Image" /></div>
                    <div className="post-info">
                        <a className="btn category-btn" href="#">TRAVEL</a>
                        <h5><a href="#"><b className="light-color">How to travel with no money</b></a></h5>
                        <h6 className="date"><em>Monday, October 13, 2017</em></h6>
                    </div>
                </div>

                <div className="latest-post" href="#">
                    <div className="l-post-image"><img src="images/recent-post-4-150x200.jpg" alt="Category Image" /></div>
                    <div className="post-info">
                        <a className="btn category-btn" href="#">TRAVEL</a>
                        <h5><a href="#"><b className="light-color">Smile 10 times a day</b></a></h5>
                        <h6 className="date"><em>Monday, October 13, 2017</em></h6>
                    </div>
                </div>

            </div>
        );
    }
}

export default LastestPosts;