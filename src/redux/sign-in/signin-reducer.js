const INITIAL_STATE = {
    showSignIn: false
}

const SignInReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'TOGGLE_SHOW_IN':
            return {
                ...state,
                showSignIn: !state.showSignIn
            };
        default: 
            return state
    }
}

export default SignInReducer