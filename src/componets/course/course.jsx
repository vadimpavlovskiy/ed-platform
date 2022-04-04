import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getData } from "../../firebase/firestore/firestore";
import { setCurrentCourse } from "../../redux/courses/courses.action";
import './course.scss';
import { Rating } from 'react-simple-star-rating'
import { Loading } from "../loading/loading.component";

export const Course = () => {
    const param = useParams();
    const currentCourse = useSelector(state => state.courses.currentCourse)
    const dispatch = useDispatch();
    const getInfo = async () => {
        await getData('courses', param.itemid).then(res => {return dispatch(setCurrentCourse(res)) })
    }
    
    useEffect(() => {
         getInfo();
         return () => {
             dispatch(setCurrentCourse(null))
         }
    }, [])
    return( 
        
        <div className="current-course-container">
            {currentCourse ? 
                <div className="current-course">
                    <div className="current-course-image"><img src={currentCourse.publicinfo.imageUrl} alt="" /></div>
                    <div className="current-course-info">
                        <div className="current-course-title">{currentCourse.publicinfo.name}</div>
                        <div className="current-course-author">Created by: <span className="current-course-author-span">{currentCourse.publicinfo.author}</span></div>
                        <div className="current-course-price">{currentCourse.publicinfo.price}</div>
                        <div className="current-course-rate">{currentCourse.publicinfo.rate}</div>
                    </div>
                </div> : <Loading />}
           
        </div>
    )
}