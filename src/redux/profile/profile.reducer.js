const INITIAL_STATE = {
    profileInfo: null
}

export const profileInfoReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case "SET_USER_INFO":
            return {
                ...state,
                profileInfo: action.payload,
            }
            default:
                return state
    }
}