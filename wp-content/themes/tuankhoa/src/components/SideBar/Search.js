import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <div className="sidebar-section src-area">

                <form action="post">
                    <input className="src-input" type="text" placeholder="Search" />
                    <button className="src-btn" type="submit"><i className="ion-ios-search-strong"></i></button>
                </form>

            </div>
        );
    }
}

export default Search;