import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { IntroPage, HomePage, ErrorPage } from '../pages';

function MainRoute() {
    return(
        <Switch>
            <Route exact path='/' component={IntroPage}/>
            <Route exact path='/home' component={HomePage}/>
            <Route exact path='/error' component={ErrorPage}/>
        </Switch>
    );
}

export default MainRoute;