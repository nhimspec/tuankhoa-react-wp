import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row">

                        <div className="col-sm-6">
                            <div className="footer-section">
                                <p className="copyright">Juli &copy; 2018. All rights reserved. | This template is made with <i className="ion-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a></p>
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <div className="footer-section">
                                <ul className="social-icons">
                                    <li><a href="#"><i className="ion-social-facebook-outline"></i></a></li>
                                    <li><a href="#"><i className="ion-social-twitter-outline"></i></a></li>
                                    <li><a href="#"><i className="ion-social-instagram-outline"></i></a></li>
                                    <li><a href="#"><i className="ion-social-vimeo-outline"></i></a></li>
                                    <li><a href="#"><i className="ion-social-pinterest-outline"></i></a></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;