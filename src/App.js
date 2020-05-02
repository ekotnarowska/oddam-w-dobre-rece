import React from 'react';
import {HashRouter, Switch, Route} from "react-router-dom";

import Home from "./components/Home";
import Registration from "./components/Registration";
import "./scss/main.scss"
import Login from "./components/Login"

const App = () => {
    return (
        <HashRouter>
            <>

                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/login" components={Login}/>
                    <Route path ="/register" components={Registration}/>
                    <Route component={NotFound}/>
                </Switch>
            </>
        </HashRouter>
    );
}
const NotFound = () => {
    return <h1>:( nie znaleziono</h1>
}
export default App;
