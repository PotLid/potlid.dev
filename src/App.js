import React, {useEffect, useCallback} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {BrowserRouter, Switch, Redirect} from "react-router-dom";

import styles from './App.module.scss';

import Footer from "./Components/Footer/Footer";

import {action_app_loaded, action_app_loading} from "./Redux/actions/AppActions";

const App = (props) => {
  const stableDispatch = useCallback(useDispatch(), []);
  const appObj = useSelector(state => state.app);

  const {isAppLoaded, isAppLoading} = appObj;

  useEffect(() => {
    stableDispatch(action_app_loaded())
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {isAppLoading ? <a>loading</a> : null}
          {isAppLoaded ? <a>loaded</a> : null}
        </p>
      </header>
      <Footer />
    </div>
  );
}

export default App;
