import React from "react";
import { NavigationTop } from "../../componets/main-components/navigation/navigation-top/navigation-top.component";
import { Profile } from "../../componets/profile/profile.component";
import './profile.styles.scss';

export const ProfilePage = () => (
    <div className="profile-container">
        <NavigationTop />
        <Profile />
    </div>
    
)