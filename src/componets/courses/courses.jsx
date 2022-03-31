import React from "react";
import './courses.styles.scss';
import { getCourses, getUserData } from "../../firebase/firestore/firestore";
import { useDispatch, useSelector } from "react-redux";
import { setCourses } from "../../redux/courses/courses.action";
import { useEffect } from "react";
import { CoursesItem } from "./courses-item/courses-item";

export const Courses = () => {

    const dispatch = useDispatch();
    
    const courses = useSelector(state => state.courses.courses)
    
    const getInfo = async () => {
        getCourses().then(res =>{dispatch(setCourses(res)) })
  }
    useEffect(() => {
        getInfo()
    }, [])
    
    
    return (
     <div className="courses">
         {courses ? courses.map((item,index) => <CoursesItem key={index} author={item.publicinfo.author} imageUrl={item.publicinfo.imageUrl} description={item.publicinfo.description} price={item.publicinfo.price} rate={item.publicinfo.rate} name={item.publicinfo.name}/>) : ''}
     </div>
    
 )   
}