import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyCourses } from "../../../firebase/firestore/firestore";
import { setCourses, setMyCourses } from "../../../redux/courses/courses.action";
import { Loading } from "../../loading/loading.component";
import MyCourses from "./my-courses/my-courses.component";
import { NavigationTop } from "./navigation-top/navigation-top.component";
import './navigation.styles.scss';

export const Navigation = () => {
    const dispatch = useDispatch()
    const courses = useSelector(state => state.profileInfo.profileInfo);
    const courses_list = useSelector(state => state.courses.courses)
    useEffect(() => {
        courses.users_courses.courses_id.map(item => getMyCourses(item).then(res => dispatch(setMyCourses(res))))

        return () => {
            dispatch(setCourses([]))
        }
    }, [])
    
   return ( 
       <div className="profile">
            <NavigationTop />
            <div className="my-courses">
                <div className="my-courses-header">My Courses</div>
                    <div className="my-courses-list">
                        {
                            courses_list.length > 0 ? 
                                courses_list.map((item,index) => {return <MyCourses author={item.data.publicinfo.author} description={item.data.publicinfo.description} image={item.data.publicinfo.imageUrl} name={item.data.publicinfo.name} key={index} id={item.id}/>}) 
                            :
                            <Loading/>
                        }
                    </div>
                </div>
            </div>
   )
}