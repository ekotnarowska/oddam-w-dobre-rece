import React from 'react';
import {HashRouter, Switch, Route} from "react-router-dom";

import Home from "./components/Home";
import Registration from "./components/Registration";
import Login from "./components/Login"

const NotFound = () => {
    return <h1>:( nie znaleziono</h1>
}

const App = () => {
    return (
        <HashRouter>
            <>

                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/login" component={Login}/>
                    <Route path ="/register" component={Registration}/>
                    <Route component={NotFound}/>
                </Switch>
            </>
        </HashRouter>
    );
}
export default App;
