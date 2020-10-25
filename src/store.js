import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import combinedReducer from "./reducers/Reducers";

const middleWare = [thunk];

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            serialize: true, trace: true
            // Specify extension's options like name, actionsBlackList, actionsCreators, serialize...
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(...middleWare),
);

export default createStore(
    combinedReducer, enhancer
);
