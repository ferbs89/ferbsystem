import React from 'react';
import { BrowserRouter, Switch  } from 'react-router-dom';

import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';

import Login from './pages/Login';
import Register from './pages/Register';
import Wishlist from './pages/Wishlist';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <PublicRoute path="/" exact component={Login} />
                <PublicRoute path="/register" component={Register} />

                <PrivateRoute path="/wishlist" component={Wishlist} />
            </Switch>
        </BrowserRouter>
    );
}