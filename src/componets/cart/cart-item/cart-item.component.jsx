import React from "react";
import './cart.item.component.styles.scss';

export const CartItem = ({id, handleSubmit, useruid, name, image, description, author, price}) => {
    
    return (
        <div className="cart-content-item">
                    <div className="content-item-image"><img src={image} alt={name} /></div>
                    <div className="content-item-info">
                        <div className="content-item-title">{name}</div> 
                        <div className="content-item-desc">{description}</div> 
                        <div className="content-item-author"> by {author}</div> 
                    </div>
                    <div className="content-item-price">
                        <div className="content-item-text">Price: ${price} </div> 
                        <div onClick={()=>handleSubmit(id, price, 'users')} className="content-item-remove">Remove from list</div>
                    </div> 
        </div>
    )
}