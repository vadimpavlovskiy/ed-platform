import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import logo from '../../assets/logo.jpg'
import Button from "../button/button.component";

import './header.styles.scss';

const Header = () => {
    
        const dispatch = useDispatch()
        const hidden = useSelector(state=> state.signin.showSignIn)

    return (
        <div className="header">
                <img src={logo} alt="" />
                <div className="nav">
                    <div className="nav-item">
                        WHO WE ARE
                    </div>
                    <div className="nav-item">
                        ABOUT US
                    </div>
                    <div className="nav-item-sign" onClick={() => dispatch({type: 'TOGGLE_SHOW_IN'})}><Button>SIGN IN</Button></div>
                    {hidden ? 
                        <div className="sign-in-menu">
                        <input type="text" />
                        <input type="text" />
                        <Button>Sign In</Button>
                    </div>
                    : ''}
                    
                </div>
        </div>
 )   
}

export default Header;