import {APP_LOADED, APP_LOADING, PAGE_TRANSITION_START, PAGE_TRANSITION_END} from "../constants/ActionTypes";

const initialState = {
    isAppLoading: false,
    isAppLoaded: false,
    isPageTransitioning: false,
}

const app = (state = initialState, action) => {
    switch (action.type) {
        case APP_LOADING:
            return {
                ...state,
                isAppLoading: true,
                isAppLoaded: false,
            }
        case APP_LOADED:
            return {
                ...state,
                isAppLoading: false,
                isAppLoaded: true,
            }
        case PAGE_TRANSITION_START:
            return {
                ...state,
                isPageTransitioning: true,
            }
        case PAGE_TRANSITION_END:
            return {
                ...state,
                isPageTransitioning: false,
            }
        default:
            return state
    }
}

export default app
