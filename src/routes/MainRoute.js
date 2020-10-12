import React from "react";
import { Switch, Route } from "react-router-dom";
import { IntroPage, HomePage, ErrorPage } from "../pages";

function MainRoute() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={IntroPage} />
                <Route exact path="/plots" component={HomePage} />
                <Route exact path="/max_error" component={ErrorPage} />
            </Switch>
        </div>
    );
}

export default MainRoute;
