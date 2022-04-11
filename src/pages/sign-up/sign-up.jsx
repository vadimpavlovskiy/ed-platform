import React from "react";
import SignUp from "../../componets/sign-up/sign-up.component";

import logo from '../../assets/student.jpg'

import './sign-up.styles.scss'

const SignUpPage = () => (
    <div className="sign-up-pg">
        <img className="logo_component" src={logo} alt="" />
        <SignUp />
    </div>
)

export default SignUpPage