import React, { Component, Fragment } from 'react';
import Header from './../Partical/Header/Header';
import Footer from './../Partical/Footer/Footer';
import FooterExtension from './../Partical/FooterExtension/FooterExtension';

class Layout extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                    {this.props.children}
                <FooterExtension />
                <Footer />
            </Fragment>
        );
    }
}

export default Layout;