import React, { Component } from 'react';

class AboutAuthor extends Component {
    render() {
        return (
            <div className="sidebar-section about-author center-text">
                <div className="author-image"><img src="images/author-1-200x200.jpg" alt="Autohr Image" /></div>

                <ul className="social-icons">
                    <li><a href="#"><i className="ion-social-facebook-outline"></i></a></li>
                    <li><a href="#"><i className="ion-social-twitter-outline"></i></a></li>
                    <li><a href="#"><i className="ion-social-instagram-outline"></i></a></li>
                    <li><a href="#"><i className="ion-social-vimeo-outline"></i></a></li>
                    <li><a href="#"><i className="ion-social-pinterest-outline"></i></a></li>
                </ul>

                <h4 className="author-name"><b className="light-color">Cristine Smith</b></h4>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
								dolore magnam aliquam quaerat voluptatem.</p>

                <div className="signature-image"><img src="images/signature-image.png" alt="Signature Image" /></div>
                <a className="read-more-link" href="#"><b>READ MORE</b></a>

            </div>
        );
    }
}

export default AboutAuthor;