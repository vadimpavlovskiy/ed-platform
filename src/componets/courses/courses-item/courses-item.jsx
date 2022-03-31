import React from "react";
import Button from "../../button/button.component";
import './courses-item.scss';

export const CoursesItem = ({id, name, imageUrl, description, rate, author, price}) => (
    <div className="courses-item">
        <div className="courses-item-image"><img src={imageUrl} alt="" /></div>
        <div className="courses-item-title">{name}</div>
        <div className="courses-item-desc">{description}</div>
        <div className="courses-item-author">{author}</div>
        {/* <div className="courses-item-rate">Rating: {rate}</div> */}
        <div className="courses-item-numb">
            <div className="courses-item-price">{price}$</div>
            <div className="courses-item-btn"><Button>Add To Card</Button></div> 
        </div>
        
    </div>
)