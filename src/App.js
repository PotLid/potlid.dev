import React, {useEffect, useCallback} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {BrowserRouter as Router, Switch, Redirect, Route} from "react-router-dom";

import {action_app_loaded, action_app_loading} from "./Redux/actions/AppActions";

// import styles from './App.module.scss';
import './App.module.scss';

import Header from "./Components/DD_Header/Header"
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main/Main";

const App = () => {
    const stableDispatch = useCallback(useDispatch(), []);
    const appObj = useSelector(state => state.app);

    const {isAppLoaded, isAppLoading, isHeaderActive} = appObj;

    useEffect(() => {
        stableDispatch(action_app_loaded())
    }, []);

    return (
        <Router>
            <div className="App">
                <Header headerHide={true}/>
                <Main/>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
