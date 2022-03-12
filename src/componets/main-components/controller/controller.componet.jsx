import {React} from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setStatus } from "../../../redux/controller/controller.action";
import './controller.styles.scss';
import DropdownItem from "./dropdown-item/dropdown-item.component";

const ControllerMenu = () => {

    const items = useSelector(state => state.dropdownList.list);


    const dispatch = useDispatch();

    return (
        <div className="controller-menu">
            <h1 className="controller-header">LOSED PETS</h1>
            <div className="controller-items">{items.map((item, index)=> {return <div><DropdownItem onClick={()=>dispatch(setStatus(item))} id={item.id} isSelected={item.isSelected} key={index} title={item.title} /> </div>})}</div>
        </div>
    )
}

export default ControllerMenu;