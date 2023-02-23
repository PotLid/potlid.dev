import React, {useEffect, useCallback} from 'react';
import {useDispatch} from "react-redux";
import {Route, Switch} from 'react-router';
import {HashRouter as Router, Redirect} from "react-router-dom";

import {action_app_loaded} from "./Redux/actions/AppActions";

import './App.module.scss';

import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main/Main";
import About from "./Components/About/About";
import Works from "./Components/Works/Works";
import Contact from "./Components/Contact/Contact";
import NotFound from "./Components/404Page/NotFound";

const App = () => {
    const stableDispatch = useCallback(useDispatch(), []);

    useEffect(() => {
        stableDispatch(action_app_loaded())
    }, []);

    let routes = (
        <Switch>
            <Route path={"/"} exact component={Main} />
            <Redirect to="/" />
            <Route path={"/about"} component={About}/>
            <Route path={"/works"} component={Works} />
            <Route path={"/contact"} component={Contact} />
            <Route path={"*"} component={NotFound} />
        </Switch>
    )

    return (
        <Router>
            <div className="App">
                <Header headerHide={true}/>
                {routes}
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
