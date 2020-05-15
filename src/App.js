import React from 'react';
import {HashRouter, Switch, Route} from "react-router-dom";
import "./scss/main.scss";
import Home from "./components/Home";
import Registration from "./components/Registration";
import Login from "./components/Login"
import Logout from "./components/Login/Logout";

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
                    <Route path ="/logout" component={Logout}/>
                    <Route component={NotFound}/>
                </Switch>
            </>
        </HashRouter>
    );
}
export default App;
