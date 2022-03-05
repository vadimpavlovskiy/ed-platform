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


const SignUp = () => {
    const [user, setUser] = useState({})
    const dispatch = useDispatch();

// Sign up and sign in with google
    const signInUpWithGoogle = async() => { 
        initializeApp(firebaseConfig);
        await signInWithPopup(getAuth(), new GoogleAuthProvider()).then((result) => {
            dispatch(setCurrentUser(result.user))
            addToFirestore(result.user)
        })
    }

    const handleChange = event => {
        const {name, value} = event.target;

        setUser({...user, [name]: value})
    }

    const handleSubmit = async event => {
        event.preventDefault();

        const {displayName, email, password, confirmpassword} = user

        if(user.password !== user.confirmpassword){
            alert("Password don't match!")
            return
        } else {
            await createUser(email,password);
            await dispatch(setCurrentUser(displayName, email));
            addToFirestore(user)
        }
    }

    return (
    <div className="sign-up">
        <div className="title">
            <span className="title-heading">SIGN UP WITH</span>
            <div className="logos">
                <div className="logo-fb"><img src={facebooklogo} className="logo" alt="" /></div> 
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
        <span className="subtitle">Already have an account? Log In </span>
        </div>
    </div>
)
}

export default SignUp