import {React} from "react";
import './dropdown-item.styles.scss';

const DropdownItem = ({title, isSelected, onClick}) => {
    
    return (<div onClick={()=>{if(isSelected !== true)/*This condition prevent problem in redux-controller */{return onClick()}}} style={isSelected ? {backgroundColor: `orange`} : {}} className="controller-item">{title}</div>)
}

export default DropdownItem;