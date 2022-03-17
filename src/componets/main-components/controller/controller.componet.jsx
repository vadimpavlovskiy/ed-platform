import {React, useState} from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setStatus } from "../../../redux/controller/controller.action";
import './controller.styles.scss';
import DropdownItem from "./dropdown-item/dropdown-item.component";
import hamburger from '../../../assets/hamburger.svg';
import { setController } from "../../../redux/controller/controller.action";

const ControllerMenu = () => {

    const items = useSelector(state => state.dropdownList.list); // Using for showing contoller - menu list
    const toggleController = useSelector(state => state.dropdownList.toggleController);  // Using for hamburger menu
    const dispatch = useDispatch();

    return (
        // Line 18: toggleController because don't need to add extra css
        <div className={toggleController ? 'controller-menu' : 'controller-menu-toggle'}> 
        {
            toggleController ? 
            <div className={toggleController ? "" : 'controller-menu'}>
                <div className="controller-header">
                    <img onClick={()=>dispatch(setController())} src={hamburger} alt="" />
                    <h1>EDTECH</h1>
                </div>
                <div className="controller-items">
                    {items.map((item, index)=> {return <div><DropdownItem unreadMesseges={item.unreadMessages} onClick={()=>dispatch(setStatus(item))} id={item.id} isSelected={item.isSelected} key={index} title={item.title} /> </div>})}
                </div>
            </div>
            : <div><img onClick={()=>dispatch(setController())} src={hamburger} alt="" /></div>
        }
        </div>
    )
}

export default ControllerMenu;