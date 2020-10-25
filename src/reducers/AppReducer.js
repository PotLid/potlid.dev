import {APP_LOADED} from "../constants/ActionTypes";

const initialState = {
    isAppLoaded: false
}

const app = (state = initialState, action) => {
    switch (action.type) {
        case APP_LOADED:
            return {
                ...state,
                isAppLoaded: true,
            }
        default:
            return state
    }
}

export default app
