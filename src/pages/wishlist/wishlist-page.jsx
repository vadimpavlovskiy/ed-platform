import React from "react";
import { NavigationTop } from "../../componets/main-components/navigation/navigation-top/navigation-top.component";
import { WishList } from "../../componets/wishlist/wishlist.component";
import './wishlist-page.styles.scss';

export const WishlistPage = () => {

    return (
        <div className="wishlist-container">
            <NavigationTop />
            <WishList />
        </div>
    )
}