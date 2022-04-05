import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getData } from "../../firebase/firestore/firestore";
import { setCurrentCourse } from "../../redux/courses/courses.action";
import './course.scss';
import { Rating } from 'react-simple-star-rating'
import { Loading } from "../loading/loading.component";
import Button from "../button/button.component";
import { CourseContent } from "./course-content/course-content";

export const Course = () => {
    const param = useParams();
    const currentCourse = useSelector(state => state.courses.currentCourse);
    const dispatch = useDispatch();
    const getInfo = async () => {
        await getData('courses', param.itemid).then(res => {return dispatch(setCurrentCourse(res))})
        
        
    }
    
    useEffect(() => {
         getInfo();
         return () => {
             dispatch(setCurrentCourse(null))
         }
    }, [])

    return( 
        // Add whishlist to here!
        <div className="current-course-container">
            {currentCourse ? 
                <div className="current-course">
                    <div className="current-course-image"><img src={currentCourse.publicinfo.imageUrl} alt="" /></div>
                    <div className="current-course-info">
                        <div className="current-course-title">{currentCourse.publicinfo.name}</div>
                        <div className="current-course-author">Created by: <span className="current-course-author-span">{currentCourse.publicinfo.author}</span></div>
                        <div className="current-course-rate">{currentCourse.publicinfo.rate}: <Rating allowHover={false} initialValue={currentCourse.publicinfo.rate} /></div>
                        <div className="current-course-price">
                            Price: <span className="current-course-price-span">{currentCourse.publicinfo.price} $</span>
                            <div className="current-course-btn"><Button>Add to the card</Button></div>
                        </div>
                    </div>
                    <div className="current-course-desc">
                        <div className="current-course-desc-title">Description: </div>
                        <div className="current-course-desc-content">{currentCourse.publicinfo.description}</div> 
                    </div>
                    <div className="current-course-content">
                    <div className="current-course-content-title">Course content:</div>
                        {currentCourse.publicinfo.content.map((item,index) => {return <CourseContent key={index} title={item.title} name={item.name} />})}
                    </div>
                 </div> 
                : <Loading />}
           
        </div>
    )
}