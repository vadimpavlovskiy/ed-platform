import React from "react";
import { useNavigate } from "react-router";
import Button from "../../../button/button.component";
import './my-courses.styles.scss';

const MyCourses = ({id, author,description,image,name}) => {
    const navigate = useNavigate()
    return (

                <div className="my-courses-item">
                    <div onClick={() => navigate(`../courses/${id}`)} className="my-courses-name">{name}</div>
                    <div onClick={() => navigate(`../courses/${id}`)} className="my-courses-image"><img src={image} alt="" /></div>
                    <div onClick={() => navigate(`../courses/${id}`)} className="my-courses-desc">{description.substr(0,100)}...</div>
                    <div onClick={() => navigate(`../courses/${id}`)} className="my-courses-teacher">{author}</div>
                </div>
    )
}
export default MyCourses;