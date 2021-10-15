import React from "react";
import { Switch, Redirect} from "react-router-dom";

import RouteWithLayout from "./route_layout";
import Layout from "../layout/layout";

import Home from "@page/home/home";
import Search from "../page/search/search";

export default function Routes(){
    return(
    <Switch>
        <Redirect from="/" to="/home" exact/>
        <RouteWithLayout path="/home" layout={Layout} component={Home} exact/>
        <RouteWithLayout path="/search" layout={Layout} component={Search} exact/>
    </Switch>
    );
}