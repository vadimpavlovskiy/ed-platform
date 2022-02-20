import React from "react";
import Button from "../button/button.component";
import facebooklogo from '../../assets/facebook.png';
import googlelogo from '../../assets/google.png';

import './sign-up.styles.scss'

const SignUp = () => (
    <div className="sign-up">
        <div className="title">
            <span className="title-heading">SIGN UP WITH</span>
            <div className="logos">
                <div className="logo-fb"><img src={facebooklogo} className="logo" alt="" /></div> 
                <div className="logo-gl"> <img src={googlelogo} className="logo" alt="" /></div>
            </div>
            <span className="title-or">OR</span>
        </div>
        <div className="create-account">
            <span className="title-heading">Create an account:</span>
        <form action="" className="sign-up-from">
            <input type="text" className="input" placeholder="First name" required/>
            <input type="text" className="input" placeholder="Second name" required/>
            <input type="email" className="input" placeholder="Email" required/>
            <input type="password" className="input" placeholder="Password" required/>
            <input type="password" className="input" placeholder="Confirm Password" required/>
            <Button type="submit">SIGN UP</Button>
        </form>
        <span className="subtitle">Already have an account? Log In </span>
        </div>
    </div>
)

export default SignUp