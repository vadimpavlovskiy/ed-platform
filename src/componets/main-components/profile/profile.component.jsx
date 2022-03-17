import React from "react";
import { useSelector } from "react-redux";
import './profile.styles.scss'
import settingIcon from "../../../assets/settings.svg"
import profileIcon from "../../../assets/profile-icon.svg"
import notificactionIcon from '../../../assets/Bell.svg'
import { useDispatch } from "react-redux";
import { signOutFromApp } from "../../../firebase/firebase_google";

export const Profile = () => {
    const userdata = useSelector(state => state.currentUser.currentUser);
    const hidden = useSelector(state=> state.signin.showSignIn);
    const dispatch = useDispatch()

   return ( 
   <div className="profile-top">
        <h1 className="profile-greeting"> Hello, User Name </h1>
        <div className="profile-settings">
            <div className="profile-setting-notification"><img src={notificactionIcon} style={{height: "24px", width: "24px"}} alt="" /><div className="profile-setting-notification-number">1</div></div>
            <div className="profile-setting-icon"><img src={settingIcon} style={{height: "24px", width: "24px"}} alt="" /></div>
            <div onClick={()=>dispatch({type: 'TOGGLE_SHOW_IN'})} className="profile-setting-user"><img src={profileIcon} style={{height: "24px"}} alt="" /></div>
            {hidden ? 
            <div className="profile-setting-toggled">
                <div>Profile</div>
                <div onClick={signOutFromApp}>Sign Out</div>
            </div> 
            : ''}
        </div>
    </div>
   )
}