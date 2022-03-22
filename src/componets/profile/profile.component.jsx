import React from "react";
import './profile.styles.scss';

import profileIcon from "../../assets/profile-icon.svg";
import Button from "../button/button.component";
import { Input } from "../input/input.component";
import { useSelector } from "react-redux";
import { useState } from "react";
import { setUserData } from "../../firebase/firestore/firestore";

export const Profile = () => {
    const uid = useSelector(state => state.currentUser.currentUser.uid)
    const profileInfo = useSelector(state => state.profileInfo.profileInfo)
    const [inputInfoToDatabase, setInputInfoToDatabase] = useState({})

    const handleChange = (event) => {
        const {name, value} = event.target;
        setInputInfoToDatabase({...inputInfoToDatabase,[name]: value})
    }
    const handleSubmit = async() => {
        setUserData(inputInfoToDatabase, uid);
    }

    return (
    <div  className="profile-info">
        <div className="profile-info-left">
            <div onClick={handleSubmit} className="profile-info-heading">Avatar</div>
            <div className="profile-info-avatar"><img src={profileIcon} alt="" /></div>
        </div>
        <div className="profile-info-right">
            <div className="profile-info-detailed">
                <div className="profile-info-displayname"><div>Display Name:</div> <Input  handleChange={handleChange} defaultValue={profileInfo.displayName} name='displayName' placeholder={`Display Name`} /></div> 
                <div className="profile-info-email"><div>Email:</div> <Input handleChange={handleChange}  defaultValue={profileInfo.email} name='email' placeholder={`Email`} /></div> 
                <div className="profile-info-headline"><div>Headline:</div> <Input handleChange={handleChange}  defaultValue={profileInfo.headline}  name='headline' placeholder={`Headline`} /></div>
                <div className="profile-info-buttons">
                    <Button>Save</Button>
                    <Button>Sign Out</Button>
                </div>
            </div>
            
        </div>
    </div>
    )
}