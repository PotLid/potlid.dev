import React, {useEffect, useCallback} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {BrowserRouter, Switch, Redirect} from "react-router-dom";


import styles from './App.module.scss';
import {action_app_loaded} from "./actions/AppActions";

const App = (props) => {
  const dispatch = useDispatch();
  const appObj = useSelector(state => state.app);

  const {isAppLoaded} = appObj;

  useEffect(() => {
    dispatch(action_app_loaded())
  }, []);

  if(!isAppLoaded) return <></>

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
