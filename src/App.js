import React, {useEffect, useCallback} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {Route, Switch} from 'react-router';
import {BrowserRouter as Router, Redirect} from "react-router-dom";

import {action_app_loaded, action_app_loading} from "./Redux/actions/AppActions";

// import styles from './App.module.scss';
import './App.module.scss';

import Header from "./Components/DD_Header/Header"
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main/Main";
import About from "./Components/About/About";
import Works from "./Components/Works/Works";
import Contact from "./Components/Contact/Contact";
import NotFound from "./Components/404Page/NotFound";

const App = () => {
    const stableDispatch = useCallback(useDispatch(), []);
    const appObj = useSelector(state => state.app);

    const {isAppLoaded, isAppLoading, isHeaderActive} = appObj;

    useEffect(() => {
        stableDispatch(action_app_loaded())
    }, []);

    let routes = (
        <Switch>
            <Route exact path={"/"} render={()=> <Main/> }/>
            <Redirect to={"/"} />
            <Route exact path={"/about"} render={() => <About/>} />
            <Route exact path={"/works"} render={() => <Works/>} />
            <Route exact path={"/contact"} render={() => <Contact/>} />
            <Route path={"*"} render={() => <NotFound/>} />
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
