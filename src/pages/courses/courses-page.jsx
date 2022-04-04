import React from "react";
import { Outlet } from "react-router";
import { Courses } from "../../componets/courses/courses";
import { NavigationTop } from "../../componets/main-components/navigation/navigation-top/navigation-top.component";
import './courses-page.styles.scss';

export const CoursesPage = () => {
    return (
    <div>
        <NavigationTop/>
        <Courses />
    </div>
    )
}