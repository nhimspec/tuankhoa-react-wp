import React, { Component } from 'react';

class FooterExtension extends Component {
    render() {
        return (
            <section className="footer-instagram-area">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h5 className="title"><b className="light-color">Follow me © instagram</b></h5>
                        </div>
                    </div>
                </div>

                <ul className="instagram">
                    <li><a href="#"><img src="images/instragram-1-300x400.jpg" alt="Instagram Image" /></a></li>
                    <li><a href="#"><img src="images/instragram-2-300x400.jpg" alt="Instagram Image" /></a></li>
                    <li><a href="#"><img src="images/instragram-3-300x400.jpg" alt="Instagram Image" /></a></li>
                    <li><a href="#"><img src="images/instragram-4-300x400.jpg" alt="Instagram Image" /></a></li>
                    <li><a href="#"><img src="images/instragram-5-300x400.jpg" alt="Instagram Image" /></a></li>
                    <li><a href="#"><img src="images/instragram-6-300x400.jpg" alt="Instagram Image" /></a></li>
                    <li><a href="#"><img src="images/instragram-7-300x400.jpg" alt="Instagram Image" /></a></li>
                </ul>
            </section>
        );
    }
}

export default FooterExtension;