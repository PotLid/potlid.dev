import {combineReducers} from "redux";
import app from './AppReducer'

// Combine all reducers together
const combinedReducer = combineReducers({
    app,
})

export default combinedReducer
