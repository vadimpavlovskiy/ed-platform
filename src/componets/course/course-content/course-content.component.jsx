import React from "react";
import './course-content.styles.scss';

export const CourseContent = ({title, name}) => {
    
       return (
        <div className="current-course-list">
            <div className="current-course-content-list-title">{name}</div>
            <ul>
                <div className="current-course-content-list-content">{title}</div>
            </ul>
        </div>
    )
    }