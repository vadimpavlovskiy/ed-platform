const INITIAL_STATE = {
    courses: [],
    currentCourse: null,
    amount: null
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
        case "SET_MY_COURSES":
            return {
                ...state,
                courses: state.courses.concat(action.payload)
            }
        case "CALCULATE_AMOUNT":
            return{
                ...state,
                amount: state.amount + action.payload
            }
            default:
                return state;
    }
}