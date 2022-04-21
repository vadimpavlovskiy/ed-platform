import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCartList, getMyCourses } from "../../firebase/firestore/firestore";
import { calculateAmount, resetAmount, setCourses, setMyCourses } from "../../redux/courses/courses.action";
import Button from "../button/button.component";
import { CartItem } from "./cart-item/cart-item.component";
import './cart.styles.scss';

export const Cart = () => {

    const cart = useSelector(state => state.profileInfo.profileInfo.cart);
    const user_uid = useSelector(state => state.currentUser.currentUser.uid)
    const courses = useSelector(state => state.courses.courses);
    const total_amount = useSelector(state => state.courses.amount)

    const dispatch = useDispatch();

    const handleSubmit = async (id, price, collection) => {
                await dispatch(setCourses([]));
                await dispatch(resetAmount());
        await deleteFromCartList(id, price, collection , user_uid).then(res=> res.cart.map((item)=>(getMyCourses(item.id).then(res =>
            {
                dispatch(setMyCourses(res))
                dispatch(calculateAmount(res[0].data.publicinfo.price))
            }
        ))));
    }
    useEffect(() => {
            cart.map((item) => getMyCourses(item.id).then(res => 
                {dispatch(calculateAmount(res[0].data.publicinfo.price))
                dispatch(setMyCourses(res));}
        ))
        
    
      return () => {
        dispatch(resetAmount())
        dispatch(setCourses([]))
      }
    }, [])
    
    return (
        <div className="cart">
            <div className="cart-title">Shopping List</div> 
            {cart !== undefined && cart.length > 0 ?
            <div className="cart-content">
                <div className="cart-content-items">
                {cart !== undefined  ? courses.map((item, index) => <CartItem id={item.id} handleSubmit={handleSubmit} useruid={user_uid} author={item.data.publicinfo.author} price={item.data.publicinfo.price} description={item.data.publicinfo.description} image={item.data.publicinfo.imageUrl} name={item.data.publicinfo.name} key={index} />) : <div>Cart isn't exist!</div>}
                </div>
                <div className="cart-content-total-amount">
                    <div className="cart-content-total-text">
                       Total Price: 
                    </div>
                    <div className="cart-content-total-price">
                        ${total_amount}
                    </div>
                    <div className="cart-content-total-checkout">
                        <Button>Checkout</Button>
                    </div>
            </div>
            </div>
            : cart.length === 0 ? <div className="cart-content-empty">YOUR CARD IS EMPTY</div>  : <div className="cart-content-empty">Loading...</div>}
        </div>
    )
}