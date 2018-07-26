import React, { Component, Fragment } from 'react';
import Slider from './Slider';
import AboutAuthor from './../../components/HomePage/SideBar/AboutAuthor';
import Search from './../../components/HomePage/SideBar/Search';
import CategoryList from './../../components/HomePage/SideBar/CategoryList';
import LastestPosts from './../../components/HomePage/SideBar/LastestPosts';
import BlogContainer from '../../containers/BlogContainer/BlogContainer';

class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <Slider />
                <section className="section blog-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-12">
                                <BlogContainer />
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="sidebar-area">
                                    <AboutAuthor />
                                    <Search />
                                    <CategoryList />
                                    <LastestPosts />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default HomePage;