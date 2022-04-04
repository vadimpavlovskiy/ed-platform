const INITIAL_STATE = {
    courses: null,
    currentCourse: null
}

export const coursesReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case "SET_COURSES":
            return {
                ...state,
                courses: action.payload
            }
        case "SET_CURRENT_COURSE":
            return {
                ...state,
                currentCourse: action.payload
            }
            default:
                return state;
    }
}