import React, { Component } from 'react';
import Layout from './../Layout/Layout';
import Slider from './Slider';
import AboutAuthor from './../../components/SideBar/AboutAuthor';
import Search from './../../components/SideBar/Search';
import CategoryList from './../../components/SideBar/CategoryList';
import HomePageContainer from '../../containers/HomePageContainer/HomePageContainer';
import LastestPostsContainer from './../../containers/SidebarContainer/LastestPostsContainer';
import './css/styles.css';
import './css/responsive.css';

class HomePage extends Component {
    render() {
        return (
            <Layout>
                <Slider />
                <section className="section blog-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-12">
                                <HomePageContainer />
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="sidebar-area">
                                    <AboutAuthor />
                                    <Search />
                                    <CategoryList />
                                    <LastestPostsContainer />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        );
    }
}

export default HomePage;