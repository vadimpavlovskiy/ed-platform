import React, { useCallback } from "react";
import './courses.styles.scss';
import { getCourses, getUserData } from "../../firebase/firestore/firestore";
import { useDispatch, useSelector } from "react-redux";
import { setCourses } from "../../redux/courses/courses.action";
import { useEffect } from "react";
import { CoursesItem } from "./courses-item/courses-item.component";
import { useLocation } from "react-router";
import { Loading } from "../loading/loading.component";

export const Courses = () => {

    const dispatch = useDispatch();
    const courses = useSelector(state => state.courses.courses);
    
    useEffect(() => {
        const getInfo = async () => {
            await getCourses().then(res =>{dispatch(setCourses(res)) })
      }

        getInfo();

        return () => {
            dispatch(setCourses([]))
        }
    }, [])
    
    
    return (
     <div className="courses">
         {courses ? courses.map((item,index) => 
         <CoursesItem key={index} id={item.id} author={item.data.publicinfo.author} imageUrl={item.data.publicinfo.imageUrl} description={item.data.publicinfo.description} price={item.data.publicinfo.price} rate={item.data.publicinfo.rate} name={item.data.publicinfo.name}/>) 
         : <Loading/>}
     </div>
    
 )   
}