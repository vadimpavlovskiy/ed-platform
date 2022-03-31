import React from "react";
import './navigation-top.styles.scss';
import settingIcon from "../../../../assets/settings.svg";
import profileIcon from "../../../../assets/profile-icon.svg";
import notificactionIcon from '../../../../assets/Bell.svg';
import { signOutFromApp } from "../../../../firebase/firebase_google";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

export const NavigationTop = () => {
    const avatarUrl = useSelector(state => state.profileInfo.profileInfo.avatarUrl)
    const navigate = useNavigate();
   return ( 
   <div className="navigation-top">
       <div onClick={()=> navigate('../main')} className="navigation-greeting">EDTECH</div>
        <div className="navigation-settings">
            <div onClick={()=> navigate('../courses')} className="#">
                Courses
            </div>
            <div className="navigation-setting-notification"><img src={notificactionIcon} style={{height: "24px", width: "24px"}} alt="" />
                <div className="navigation-setting-notification-number">1</div>
            </div>
            <div onClick={signOutFromApp} className="navigation-setting-icon"><img src={settingIcon} style={{height: "24px", width: "24px"}} alt="" /></div>
            <div onClick={()=>navigate('../profile')}className="navigation-setting-user"><img src={avatarUrl} style={{height: "24px"}} alt="" /></div>
        </div>
    </div>
   )
}