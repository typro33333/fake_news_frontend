import React from "react";
import {Route,Switch,Redirect} from 'react-router-dom';
import Introduction from '../page/introduction/intro';
import Primary from '../page/primary/primary';

export default function Routes(){

    return(
        <Switch>
            <Redirect path='/' to='/introduction' />
            <Route exact path = '/introduction' component={Introduction}/>
            <Route exact path = '/primary' component ={Primary} />
        </Switch>
    )
}
