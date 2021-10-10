import React from "react";
import { Switch, Redirect} from "react-router-dom";

import Layout from "../layout/layout";

import Home from "@page/home/home";
import SecondPage from "@page/search/second";
import RouteWithLayout from "./route_layout";

export default function Routes(){
    return(
    <Switch>
        <Redirect from="/" to="/home" exact/>
        <RouteWithLayout path="/home" layout={Layout} component={Home} exact/>
        <RouteWithLayout path="/second" layout={Layout} component={SecondPage} exact/>
    </Switch>
    );
}