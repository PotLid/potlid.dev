import React, {useEffect, useCallback} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {BrowserRouter, Switch, Redirect} from "react-router-dom";

import {action_app_loaded, action_app_loading} from "./Redux/actions/AppActions";

// Style
import styles from './App.module.scss';

// UI Elements
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main/Main";

// Pages

const App = () => {
    const stableDispatch = useCallback(useDispatch(), []);
    const appObj = useSelector(state => state.app);

    const {isAppLoaded, isAppLoading, isHeaderActive} = appObj;

    useEffect(() => {
        stableDispatch(action_app_loaded())
    }, []);

    return (
        <div className="App">
            <Header/>
            <Main />
            <Footer/>
        </div>
    );
}

export default App;
