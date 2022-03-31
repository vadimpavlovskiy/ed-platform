import React from "react";
import './profile.styles.scss';

import profileIcon from "../../assets/profile-icon.svg";
import Button from "../button/button.component";
import { Input } from "../input/input.component";
import { useSelector } from "react-redux";
import { useState } from "react";
import { setUserData } from "../../firebase/firestore/firestore";
import { setAvatar } from "../../firebase/firebase-storage/firebase-storage";

export const Profile = () => {
    const uid = useSelector(state => state.currentUser.currentUser.uid);

    const profileInfo = useSelector(state => state.profileInfo.profileInfo);

    const [inputInfoToDatabase, setInputInfoToDatabase] = useState({})

    const handleChange = (event) => {
        const {name, value} = event.target;
        setInputInfoToDatabase({...inputInfoToDatabase,[name]: value})
    }
    const handleSubmit = async() => {
        setUserData(inputInfoToDatabase, 'users', uid);
    }

    const onImageChange = async (e) => {
        const file = e.target.files[0];
        await setAvatar(`users`, `avatars`, file, uid);

    }
    return (
    <div  className="profile-info">
        <div className="profile-info-left">
            <div className="profile-info-heading">Avatar</div>
            <div className="profile-info-avatar">
                <img src={profileInfo.avatarUrl ? profileInfo.avatarUrl : profileIcon} alt="" />
                <div className="profile-change-avatar">
                    <label for ="avatar-change" className="profile-avatar-upload">
                        Change avatar: 
                    </label> 
                    <input onChange={onImageChange} id='avatar-change' type="file"/>
                </div>
            </div>
            
        </div>
        <div className="profile-info-right">
            <div className="profile-info-detailed">
                <div className="profile-info-displayname"><div>Display Name:</div> <Input  handleChange={handleChange} defaultValue={profileInfo.displayName} name='displayName' placeholder={`Display Name`} /></div> 
                <div className="profile-info-email"><div>Email:</div> <Input handleChange={handleChange}  defaultValue={profileInfo.email} name='email' placeholder={`Email`} /></div> 
                <div className="profile-info-headline"><div>Headline:</div> <Input handleChange={handleChange}  defaultValue={profileInfo.headline}  name='headline' placeholder={`Headline`} /></div>
                <div className="profile-info-buttons">
                    <Button handleSubmit={handleSubmit}>Save</Button>
                    <Button>Sign Out</Button>
                </div>
            </div>
        </div>
    </div>
    )
}