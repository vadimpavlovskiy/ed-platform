export const setCourses = (courses) => ({
    type: "SET_COURSES",
    payload: courses
})
export const setCurrentCourse = (currentCourse) => ({
    type: "SET_CURRENT_COURSE",
    payload: currentCourse
})
export const setMyCourses = (courses) => ({
    type: "SET_MY_COURSES",
    payload: courses
})
export const calculateAmount = (price) => ({
    type: "CALCULATE_AMOUNT",
    payload: price
})
export const resetAmount = () => ({
    type: "RESET_AMOUNT"
})