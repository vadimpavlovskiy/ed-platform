import React from "react";
import MyCourses from "./my-courses/my-courses.component";
import { ProfileTop } from "./profile-top/profile-top.component";
import './profile.styles.scss';

export const Profile = () => {
   return ( 
       <div className="profile">
            <ProfileTop />
            <MyCourses />
       </div>
       
    
   )
}