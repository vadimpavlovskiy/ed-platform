import { toggleColor } from "./controller.functions";

const INITIAL_STATE ={
    toggleController : false,
    list: [
        {
            id: 1,
            title: 'Home', 
            isSelected: true
        },
        {
            id: 2,
            title: 'Courses', 
            isSelected: false
        },
        {
            id: 3,
            title: 'Schools', 
            isSelected: false
        },
        {
            id: 4,
            title: 'Messages', 
            isSelected: false,
            unreadMessages: '10'
        },
    ]
}

export const controllerReducer = (state = INITIAL_STATE, action) => {
   switch(action.type){
       case 'TOGGLE_COLOR':
           return {...state, list: toggleColor(state.list, action.payload)}
        case 'TOGGLE_MENU':
            return {...state, toggleController: !state.toggleController}
       default:
           return state;
   }
}