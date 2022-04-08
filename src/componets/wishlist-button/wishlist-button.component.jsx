import React from "react";
import './wishlist.styles.scss';
import wishlistEmpty from '../../assets/heart.svg';
import wishlistFilled from '../../assets/heart_filled.svg';
import { setWishlist } from "../../firebase/firestore/firestore";

export const WishlistButton = ({courseid, wishlist, userid}) => {

    

    // Function to work with wishlist
    const handleSubmit = () => {
        setWishlist(courseid, 'users', userid)
    }
    return (
    <div className="wishlist-add">
        <button onClick={handleSubmit} className="wishlist-add-btn"><img src={wishlist ?wishlistFilled  : wishlistEmpty} alt="" /></button>
    </div>
    )
}