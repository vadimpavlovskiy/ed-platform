import React from "react";
import { Course } from "../../componets/course/course.component";
import { NavigationTop } from "../../componets/main-components/navigation/navigation-top/navigation-top.component";
import './course.scss';

export const CoursePage = () => {
    
    return (
        <div>
            <NavigationTop/>
            <Course />
        </div>
        
    )
}