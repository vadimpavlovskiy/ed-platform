import React from "react";
import { Cart } from "../../componets/cart/cart.component";
import { NavigationTop } from "../../componets/main-components/navigation/navigation-top/navigation-top.component";
import './cart-page.styles.scss';

export const CartPage = () => {
    return (
    <div className="cart-container">
        <NavigationTop />
        <Cart />
    </div>
    )
}