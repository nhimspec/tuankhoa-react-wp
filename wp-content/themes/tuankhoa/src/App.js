import React, { Component, Fragment } from 'react';
import Header from './pages/Header/Header';
import Footer from './pages/Footer/Footer';
import FooterExtension from './pages/FooterExtension/FooterExtension';
import HomePage from './pages/HomePage/HomePage';

class App extends Component {
    render() {
        return (
            <Fragment>
                <Header/>
                <HomePage/>
                <FooterExtension/>
                <Footer/>
            </Fragment>
        );
    }
}

export default App;