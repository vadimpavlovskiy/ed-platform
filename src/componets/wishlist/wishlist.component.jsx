import React from "react";
import './wishlist.styles.scss';
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getMyCourses } from "../../firebase/firestore/firestore";
import { setCourses, setMyCourses } from "../../redux/courses/courses.action";
import MyCourses from "../main-components/navigation/my-courses/my-courses.component";
import { Loading } from "../loading/loading.component";

export const WishList = () => {
    const dispatch = useDispatch();

    const profileinfo = useSelector(state => state.profileInfo.profileInfo);

    const courses = useSelector(state=> state.courses.courses);

    console.log(courses);
    
    useEffect(() => {
      profileinfo.wishlist.map((item) => getMyCourses(item).then(res => dispatch(setMyCourses(res))))
    
      return () => {
        dispatch(setCourses([]))
      }

    }, [])
    

    return (
        <div className="wishlist">
            <div className="wishlist-title">My wishlist: </div>
            <div className="wishlist-courses">
                {
                    courses.length > 0 ? 
                    courses.map((item,index) => {return <MyCourses author={item.data.publicinfo.author} description={item.data.publicinfo.description} image={item.data.publicinfo.imageUrl} name={item.data.publicinfo.name} key={index} id={item.id}/>}) 
                :
                <Loading/>
                }
            </div>
        </div>
    )
}