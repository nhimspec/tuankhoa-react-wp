import React, { Component } from 'react';

class CategoryList extends Component {
    render() {
        return (
            <div className="sidebar-section category-area">
                <h4 className="title"><b className="light-color">Categories</b></h4>
                <a className="category" href="#">
                    <img src="images/category-1-400x150.jpg" alt="Category Image" />
                    <h6 className="name">TRAVEL</h6>
                </a>

                <a className="category" href="#">
                    <img src="images/category-2-400x150.jpg" alt="Category Image" />
                    <h6 className="name">FASHION</h6>
                </a>

                <a className="category" href="#">
                    <img src="images/category-3-400x150.jpg" alt="Category Image" />
                    <h6 className="name">LIFESTYLE</h6>
                </a>
                <a className="category" href="#">
                    <img src="images/category-4-400x150.jpg" alt="Category Image" />
                    <h6 className="name">DESIGN</h6>
                </a>
            </div>
        );
    }
}

export default CategoryList;