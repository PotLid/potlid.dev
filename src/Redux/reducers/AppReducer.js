import {APP_LOADED, APP_LOADING, PAGE_TRANSITION_START, PAGE_TRANSITION_END,
        HEADER_ACTIVE, HEADER_INACTIVE,
} from "../constants/ActionTypes";

const initialState = {
    isAppLoading: false,
    isAppLoaded: false,
    isPageTransitioning: false,
    isHeaderActive: false,
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
        case HEADER_ACTIVE:
            return {
                ...state,
                isHeaderActive: true,
            }
        case HEADER_INACTIVE:
            return {
                ...state,
                isHeaderActive: false,
            }
        default:
            return state
    }
}

export default app
