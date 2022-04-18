import React, { useEffect } from "react";
import './navigation-top.styles.scss';
import logout from "../../../../assets/logout.svg";
import profileIcon from "../../../../assets/profile-icon.svg";
import coursesIcon from "../../../../assets/folder.svg"
import shoppingIcon from '../../../../assets/shopping.svg';
import whishlistIcon from '../../../../assets/heart.svg'
import { signOutFromApp } from "../../../../firebase/firebase_google";
import { useNavigate } from "react-router";
import { setController } from "../../../../redux/controller/controller.action";
import { useDispatch, useSelector } from "react-redux";

export const NavigationTop = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const selector = useSelector(state => state.dropdownList.toggleController);
    const profileinfo = useSelector(state => state.profileInfo.profileInfo)

    const handleNavigate = (url) => {
        navigate(url)
    }
    

    useEffect(() => {
        if(selector){
            dispatch(setController())
        }
    }, [])
    
   return ( 
   <div className="navigation-top">
       <div onClick={()=>handleNavigate(`../main`)} className="navigation-greeting">EDTECH</div>
        <div className="navigation-settings">
            <div onClick={()=>handleNavigate('../profile/cart')} className="navigation-setting-shopping"><img src={shoppingIcon} style={{height: "24px", width: "24px"}} alt="" />
                <div className="navigation-setting-notification-number">{profileinfo.cart !== undefined ? profileinfo.cart.length  : 0 }</div>
            </div>
            <div onClick={()=>signOutFromApp()} className="navigation-setting-icon"><img src={logout} style={{height: "24px", width: "24px"}} alt="" /></div>
            <div onClick={()=>dispatch(setController())} className="navigation-setting-user"><img src={profileinfo.avatarUrl} style={{height: "24px"}} alt="" /></div>
            {selector ?
                <div className="navigation-setting-toggled">
                        <div onClick={()=>handleNavigate('../profile')} className="navigation-setting-toggled-item" >
                            <img src={profileIcon} alt="Profile"/>
                            <span>Profile</span>
                        </div>
                        <div onClick={()=> handleNavigate('../courses')} className="navigation-setting-toggled-item">
                            <img src={coursesIcon} alt="My courses"/>
                            <span>Courses</span>
                        </div>
                        <div onClick={()=> handleNavigate('../profile/wishlist')} className="navigation-setting-toggled-item">
                            <img src={whishlistIcon} alt="Whishlist"/>
                            <span>Whishlist</span>
                        </div>
                        
                </div>
            : ''}
        </div>
    </div>
   )
}