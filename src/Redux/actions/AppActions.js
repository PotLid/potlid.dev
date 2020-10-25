import {APP_LOADING ,APP_LOADED, PAGE_TRANSITION_START, PAGE_TRANSITION_END} from "../constants/ActionTypes";

export const action_app_loading = () => {
    return {
        type: APP_LOADING,
    }
}

export const action_app_loaded = () => {
    return {
        type: APP_LOADED,
    }
}

export const action_page_transition_start = () => {
    return {
        type: PAGE_TRANSITION_START
    }
}

export const action_page_transition_end = () => {
    return {
        type: PAGE_TRANSITION_END
    }
}
