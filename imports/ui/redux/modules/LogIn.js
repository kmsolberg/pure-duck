const LOG_IN = 'LOG_IN';

export function LogInAction(logInUser) {
    return {
        type: LOG_IN,
        payload: logInUser
    };
}

const initialState = {
    logInUser: []
}

export function LogInReducer(state = initialState, action) {
    switch (action.type) {
        case LOG_IN:
            return { logInUser: action.payload };
        default:
            return state;
    }
}