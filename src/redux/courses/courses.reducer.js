const INITIAL_STATE = {
    courses: null
}

export const coursesReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case "SET_COURSES":
            return {
                ...state,
                courses: action.payload
            }
            default:
                return state;
    }
}