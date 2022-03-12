import {React} from "react";
import './dropdown-item.styles.scss';

const DropdownItem = ({title, isSelected, onClick}) => {
    
    return (<div onClick={()=>{if(isSelected !== true)/*This condition prevent problem in redux-controller */{return onClick()}}} style={isSelected ? {backgroundColor: `#0336df`} : {}} className="controller-item">{title}</div>)
}

export default DropdownItem;