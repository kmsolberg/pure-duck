const SIGN_UP = 'SIGN_UP';

export function signUp(registeruser) {
    return {
        type: SIGN_UP,
        payload: registeruser
    };
}

const initialState = {
    registerUser: []
}

export function SignUpReducer(state = initialState, action) {
    switch (action.type) {
        case SIGN_UP:
            return { registeruser: action.payload };
        default:
            return state;
    }
}