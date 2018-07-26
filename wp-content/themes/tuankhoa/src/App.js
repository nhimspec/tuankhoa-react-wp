import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import routes from './routes';

class App extends Component {
    showContentMenu = (routes) => (
        routes.map((route, index) => (
            <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.main}
            />
        ))
    )
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    {this.showContentMenu(routes)}
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;