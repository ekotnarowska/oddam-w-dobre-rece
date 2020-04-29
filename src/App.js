import React from 'react';
import {HashRouter, Switch, BrowserRouter, NavLink, Link, Route} from "react-router-dom";
import Home from "./components/Home/Home"
import HomeFourSteps from "./components/Home/Home4Steps/HomeFourSteps";
import HomeAboutUs from "./components/Home/HomeAboutUs/HomeAboutUs";
import HomeWhoWeHelp from "./components/Home/HomeWhoWeHelp/HomeWhoWeHelp";
import HomeContactUs from "./components/Home/HomeContactUs/HomeContactUs";

const App = () => {
    return (
        <HashRouter>
            <>
                <ul>
                    <li><Link to="/">Start</Link></li>
                    <li><Link to="/four/steps">O co chodzi</Link></li>
                    <li><Link to="/about/us">O nas</Link></li>
                    <li><Link to="/foundation/and/organization">Fundacje i Organizacje</Link></li>
                    <li><Link to="/contact/us">Kontakt</Link></li>
                </ul>


                <Switch>
                    <Route exact path="/" component={Home}/>
                    {/*<Route path="/four/steps" component={HomeFourSteps}/>*/}
                    {/*<Route path="/about/us" component={HomeAboutUs}/>*/}
                    {/*<Route path="/foundation/and/organization" component={HomeWhoWeHelp}/>*/}
                    {/*<Route path="/contact/us" component={HomeContactUs}/>*/}

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
