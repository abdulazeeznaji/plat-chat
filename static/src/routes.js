import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Login from './components/LoginForm';
import App from './App';
import Feed from './components/Feed';
import requireAuthentication from './utils/requireAuthentication';


const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={requireAuthentication(App)}>
            <IndexRoute component={Feed}/>
        </Route>
        <Route path="login" component={Login}/>
    </Router>
);

export default routes;