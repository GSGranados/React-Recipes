import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from '../../App';
const Router = () =>{

    return(
        

            <BrowserRouter>
                <Switch>
                    <Route to="/" component={App} exact></Route>
                </Switch>
            </BrowserRouter>

    );



}

export default Router;