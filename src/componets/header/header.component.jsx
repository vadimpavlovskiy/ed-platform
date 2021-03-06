import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";

import logo from '../../assets/logo.jpg';
import hamburder from '../../assets/hamburger.svg';
import Button from "../button/button.component";
import { Input } from "../input/input.component";

import './header.styles.scss';
import { signIn } from "../../firebase/firebase_google";
import { useNavigate } from "react-router";
import { setCurrentUser } from "../../redux/user/user.action";

const Header = () => {
    
    // Hooks
    const [user, setUser] = useState({});
    
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768) // For mobile menu toggler
    const [toggledHamburger, setToggledHamburger] = useState(false)
    const navigate = useNavigate()

    const dispatch = useDispatch()
    const hidden = useSelector(state => state.signin.showSignIn) // For sign in form

    const showContent = () => {
        setIsDesktop(window.innerWidth > 768) // Reducer for menu toggler
    }

    // Listener method 
    const handleChange = (event) => {
        const {value, name} = event.target;
        setUser({...user, [name]: value })
    }
    const toggleHamburger = () => {
        setToggledHamburger(!toggledHamburger)
    }
    // Signin method
    const handleSubmit = async (event) => {
        event.preventDefault();

        const {email, password} = user;

        try {
            await signIn(email, password);
            await navigate(`/main`);
        }
        catch{
            alert('Email or password is incorrect!')
        }
        
    }

    useEffect(() => {
      window.addEventListener("resize", showContent);
      if(isDesktop) {
          setToggledHamburger(true)
      }
      return () => {
        window.removeEventListener("resize", showContent)
      }
    })
    
    return (
        <div className="header">
                <div className="nav-title">EDTECH</div>
                    {
                    isDesktop ? '' // Dont show, if rez bigger then isDesktop
                    : 
                    <div onClick={toggleHamburger} className="nav-hamburger">
                        <img className="" src={hamburder} alt="" />
                    </div> 
                    }
                    <div className="nav">
                    {
                        toggledHamburger ? 
                            
                            <div className="nav-items">
                                <div className="nav-item">
                                    WHO WE ARE
                                </div>
                                <div className="nav-item">
                                    ABOUT US
                                </div>
                                <div className="nav-item-sign" onClick={() => dispatch({type: 'TOGGLE_SHOW_IN'})}><Button>SIGN IN</Button></div>
                            </div> : ''
                        
                    }
                    {hidden ? 
                        <div >
                            <form action="" className="sign-in-menu" onSubmit={handleSubmit}>
                                <Input name="email" handleChange={handleChange} type="email" placeholder="Email"/>
                                <Input name="password" handleChange={handleChange} type="password" placeholder="Password"/>
                                <div className="check">
                                    <input type="checkbox" />
                                    <span>Remember me</span>
                                </div>
                                <Button><span onClick={()=>navigate(`/main`)}> Sign In</span></Button>
                            </form>
                    </div>
                    : ''}   
                    </div>
                                    
                </div>
 )   
}

export default Header;