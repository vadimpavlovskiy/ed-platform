import React from "react";
import './profile.styles.scss';

import profileIcon from "../../assets/profile-icon.svg";
import Button from "../button/button.component";
import { Input } from "../input/input.component";
import { useSelector } from "react-redux";
import { useState } from "react";
import { getUserData } from "../../firebase/firestore/firestore";
import { setUserData } from "../../firebase/firestore/firestore";
import { signOutFromApp } from "../../firebase/firebase_google";
import { useEffect } from "react";

export const Profile = () => {
    const [userinfo, setUserInfo] = useState({})
    const uid = useSelector(state => state.currentUser.currentUser.uid);
    const [newUserInfo, setNewUserInfo] = useState({...userinfo})

    useEffect(() => {
        getUserData(uid).then(result=> {setUserInfo(result)});
    }, [userinfo])
    
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setNewUserInfo({...newUserInfo, [name]: value})
    }
    const handleSubmit = async () => {
        await setUserData(newUserInfo, userinfo.createAt, uid);
    }

    return (
    <div className="profile-info">
        <div className="profile-info-left">
            <div className="profile-info-heading">Avatar</div>
            <div className="profile-info-avatar"><img src={profileIcon} alt="" /></div>
        </div>
        <div className="profile-info-right">
            <div className="profile-info-detailed">
                <div className="profile-info-displayname"><div>Display Name:</div> <Input handleChange={handleChange} defaultValue={userinfo.displayName} name='displayName' placeholder={`Display Name`} /></div> 
                <div className="profile-info-email"><div>Email:</div> <Input handleChange={handleChange} defaultValue={userinfo.email} name='email' placeholder={`Email`} /></div> 
                <div className="profile-info-headline"><div>Headline:</div> <Input handleChange={handleChange} defaultValue={userinfo.headline} name='headline' placeholder={`Headline`} /></div>
                <div className="profile-info-buttons">
                    <Button onClick={handleSubmit}>Save</Button>
                    <Button>Sign Out</Button>
                </div>
            </div>
            
        </div>
    </div>
    )
}