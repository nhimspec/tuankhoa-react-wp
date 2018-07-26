import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import SinglePage from './pages/SinglePage/SinglePage';


const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/post/:slug',
        exact: false,
        main: ({ match, history }) => <SinglePage match={match} history={history} />
    },
];

export default routes;