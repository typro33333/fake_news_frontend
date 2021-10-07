import React from "react";
import { Switch, Redirect, Route} from "react-router-dom";
import Home from "@page/home";
import SecondPage from "@page/second";
export default function Routes(){
    return(
    <Switch>
        <Redirect from="/" to="/home" exact/>
        <Route path="/home" component={Home} exact/>
        <Route exact path="/second" component={SecondPage} />
    </Switch>
    );
}