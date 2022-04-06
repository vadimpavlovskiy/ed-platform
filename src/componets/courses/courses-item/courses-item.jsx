import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../button/button.component";
import { useNavigate } from "react-router";
import './courses-item.scss';

export const CoursesItem = ({id, name, imageUrl, description, rate, author, price}) => {

    const [desc_lenght, setDescLenght] = useState(100)
    const navigate = useNavigate();
    return (
    <div className="courses-item">
        <div onClick={() => navigate(`${id}`)} className="courses-item-image"><img src={imageUrl} alt="" /></div>
        <div onClick={() => navigate(`${id}`)} className="courses-item-title">{name}</div>
        <div className="courses-item-desc">
            {description.substr(0, desc_lenght)}
        </div>
        <div className="courses-item-author">{author}</div>
        <div className="courses-item-numb">
            <div className="courses-item-price">{price}$</div>
            <div className="courses-item-btn"><Button>Add To Card</Button></div> 
        </div>
    </div>
    )
}