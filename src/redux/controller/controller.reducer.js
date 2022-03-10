import { toggleColor } from "./controller.functions";

const INITIAL_STATE ={
    list: [
        {
            id: 1,
            title: 'Home', 
            isSelected: true
        },
        {
            id: 2,
            title: 'Item 2', 
            isSelected: false
        },
        {
            id: 3,
            title: 'Item 3', 
            isSelected: false
        },
        {
            id: 4,
            title: 'Item 4', 
            isSelected: false
        },
        {
            id: 5,
            title: 'Item 5', 
            isSelected: false
        },
    ]
}

export const controllerReducer = (state = INITIAL_STATE, action) => {
   switch(action.type){
       case 'TOGGLE_COLOR':
           return {...state, list: toggleColor(state.list, action.payload)}
       default:
           return state;
   }
}