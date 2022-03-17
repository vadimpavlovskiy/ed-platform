import {React} from "react";
import './dropdown-item.styles.scss';

const DropdownItem = ({title, isSelected, onClick,unreadMesseges}) => {
    return (  
    <div 
    onClick={()=>
    {if(isSelected !== true)
        /*This condition prevent problem in redux-controller */
        {return onClick()}}} 
    style={isSelected ? {backgroundColor: `#0336df`} : {}} className="controller-item">      
        <div> 
            {title} 
        </div>
        {unreadMesseges ?
        <div className="controller-item-notification">
            {unreadMesseges}
        </div> : ''}
    </div>)
}

export default DropdownItem;