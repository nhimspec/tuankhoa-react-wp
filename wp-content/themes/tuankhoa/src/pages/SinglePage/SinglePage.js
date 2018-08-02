import React, { Component } from 'react';
import Layout from './../Layout/Layout';
import AboutAuthor from './../../components/SideBar/AboutAuthor';
import Search from './../../components/SideBar/Search';
import CategoryList from './../../components/SideBar/CategoryList';
import PostContainer from '../../containers/PostContainer/PostContainer';
import LastestPostsContainer from './../../containers/SidebarContainer/LastestPostsContainer';
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
                                <PostContainer
                                    match={this.props.match}
                                />
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

export default SinglePage;