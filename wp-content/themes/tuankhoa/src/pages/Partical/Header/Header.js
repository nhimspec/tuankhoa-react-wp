import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="top-menu">
                    <ul className="left-area welcome-area">
                        <li className="hello-blog">Hello nice people, welcome to my blog</li>
                        <li><a href="mailto:contact@juliblog.com">contact@juliblog.com</a></li>
                    </ul>

                    <div className="right-area">

                        <div className="src-area">
                            <form action="post">
                                <input className="src-input" type="text" placeholder="Search" />
                                <button className="src-btn" type="submit"><i className="ion-ios-search-strong"></i></button>
                            </form>
                        </div>			<ul className="social-icons">
                            <li><a href="#"><i className="ion-social-facebook-outline"></i></a></li>
                            <li><a href="#"><i className="ion-social-twitter-outline"></i></a></li>
                            <li><a href="#"><i className="ion-social-instagram-outline"></i></a></li>
                            <li><a href="#"><i className="ion-social-vimeo-outline"></i></a></li>
                            <li><a href="#"><i className="ion-social-pinterest-outline"></i></a></li>
                        </ul>

                    </div>

                </div>
                <div className="middle-menu center-text">
                    <Link
                        to={'/'}
                        className="logo"
                    >
                        <img src="images/logo.png" alt="Logo Image" />
                    </Link>
                </div>

                <div className="bottom-area">

                    <div className="menu-nav-icon" data-nav-menu="#main-menu"><i className="ion-navicon"></i></div>

                    <ul className="main-menu visible-on-click" id="main-menu">
                        <li className="drop-down"><a href="#!">HOME<i className="ion-ios-arrow-down"></i></a>

                            <ul className="drop-down-menu">
                                <li><a href="#">FEATURED</a></li>
                                <li><a href="#">ABOUT</a></li>
                                <li className="drop-down"><a href="#!">CATEGORIES<i className="ion-ios-arrow-right"></i></a>
                                    <ul className="drop-down-menu drop-down-inner">
                                        <li><a href="#">FEATURED</a></li>
                                        <li><a href="#">ABOUT</a></li>
                                        <li><a href="#">CATEGORIES</a></li>
                                    </ul>
                                </li>
                            </ul>

                        </li>
                        <li><a href="#">FEATURED</a></li>
                        <li><a href="#">ABOUT</a></li>
                        <li><a href="#">CATEGORIES</a></li>
                        <li><a href="#">CONTACT</a></li>
                    </ul>
                </div>
            </header>
        );
    }
}

export default Header;