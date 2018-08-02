import React, { Component, Fragment } from 'react';
import Header from './../Partical/Header/Header';
import Footer from './../Partical/Footer/Footer';

class Layout extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                {this.props.children}
                <Footer />
            </Fragment>
        );
    }
}

export default Layout;