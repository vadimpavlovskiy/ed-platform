import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";

import logo from '../../assets/logo.jpg'
import Button from "../button/button.component";
import { Input } from "../input/input.component";

import './header.styles.scss';
import { signIn } from "../../firebase/firebase_google";
import { useNavigate } from "react-router";
import { setCurrentUser } from "../../redux/user/user.action";

const Header = () => {
    
    // Hooks
    const [user, setUser] = useState({});
    const navigate = useNavigate()

    const dispatch = useDispatch()
    const hidden = useSelector(state => state.signin.showSignIn)



    const handleChange = (event) => {
        const {value, name} = event.target;
        setUser({...user, [name]: value })
    }

    // Here I should later add an verification before setCurrentUser! It's very important 28.02
    const handleSubmit = async (event) => {
        event.preventDefault();

        const {email, password} = user;

        try {
            await signIn(email, password);
            await dispatch(setCurrentUser(email));
            await navigate(`/main`);
        }
        catch{
            alert('Email or password is incorrect!')
        }
        
        // handleSubmit is working, but add uid when write to firebase
    }

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