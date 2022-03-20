import React from "react";
import MyCourses from "./my-courses/my-courses.component";
import { NavigationTop } from "./navigation-top/navigation-top.component";
import './navigation.styles.scss';

export const Navigation = () => {
   return ( 
       <div className="profile">
            <NavigationTop />
            <MyCourses />
       </div>
       
    
   )
}