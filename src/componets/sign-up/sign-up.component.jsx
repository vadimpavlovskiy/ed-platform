import React, { useState } from "react";
import Button from "../button/button.component";
import facebooklogo from '../../assets/facebook.png';
import googlelogo from '../../assets/google.png';

import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../firebase/firebase.config";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

import './sign-up.styles.scss'
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../redux/user/user.action";

import { addToFirestore } from "../../firebase/firestore/firestore";
import { createUser, signIn } from "../../firebase/firebase_google";
import { Navigate, useNavigate } from "react-router";


const SignUp = () => {
    // Hooks
    const [user, setUser] = useState({})
    const dispatch = useDispatch();
    const navigate = useNavigate();

// Sign up and sign in with google
    const signInUpWithGoogle = async() => { 
        initializeApp(firebaseConfig);
        await signInWithPopup(getAuth(), new GoogleAuthProvider()).then(async (result) => {
            await addToFirestore(result.user, result.user.displayName)
            await dispatch(setCurrentUser(result.user));
        })
    }

    const handleChange = event => {
        const {name, value} = event.target;

        setUser({...user, [name]: value})
    }

    const handleSubmit = async event => {
        event.preventDefault();

        const {displayName, email, password} = user

        if(user.password !== user.confirmpassword){
            alert("Password don't match!")
            return
        } else {
            await createUser(email,password, displayName);
            await signIn(email, password);
            navigate(`/main`)
        }
    }

    return (
    <div className="sign-up">
        <div className="title">
            <span className="title-heading">SIGN UP WITH</span>
            <div className="logos">
                <div className="logo-gl" onClick={signInUpWithGoogle}> <img src={googlelogo} className="logo" alt="" /></div>
            </div>
            <span className="title-or">OR</span>
        </div>
        <div className="create-account">
            <span className="title-heading" >Create an account:</span>
        <form action="" className="sign-up-from" onSubmit={handleSubmit}>
            <input type="text" className="input" name="displayName" placeholder="Full name" onChange={handleChange} required/>
            <input type="email" className="input" name="email" onChange={handleChange} placeholder="Email" required/>
            <input type="password" className="input" onChange={handleChange} name="password" placeholder="Password" required/>
            <input type="password" className="input" onChange={handleChange} name="confirmpassword"placeholder="Confirm Password" required/>
            <Button type="submit">SIGN UP</Button>
        </form>
        <span className="subtitle">Already have an account? <span onClick={()=> navigate(`/main`)}>Log In</span> </span>
        </div>
    </div>
)
}

export default SignUp