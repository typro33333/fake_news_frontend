import React from "react";
import {Route,Switch,Redirect} from 'react-router-dom';
import Introduction from '../page/introduction/intro';
import Primary from '../page/primary/primary';

export default function Routes(){

    return(
        <Switch>
            <Redirect path='/' to='/introduction' exact/>
            <Route path = '/introduction' component={Introduction} exact/>
            <Route exact path = '/primary' component ={Primary} />
        </Switch>
    )
}
