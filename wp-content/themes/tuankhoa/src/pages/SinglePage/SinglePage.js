import React, { Component } from 'react';
import Layout from './../Layout/Layout';
import AboutAuthor from './../../components/HomePage/SideBar/AboutAuthor';
import Search from './../../components/HomePage/SideBar/Search';
import CategoryList from './../../components/HomePage/SideBar/CategoryList';
import LastestPosts from './../../components/HomePage/SideBar/LastestPosts';
import PostContainer from '../../containers/PostContainer/PostContainer';
import './css/styles.css';
import './css/responsive.css';

class SinglePage extends Component {
    render() {
        return (
            <Layout>
                <section className="section blog-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-12">
                                <PostContainer/>
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
            </Layout>
        );
    }
}

export default SinglePage;