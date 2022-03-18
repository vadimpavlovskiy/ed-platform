import React from "react";
import ControllerMenu from "../../componets/main-components/controller/controller.componet";
import './main.styles.scss';
import { Profile } from "../../componets/main-components/profile/profile.component";

const Main = () => {
    return (
        <div className="main">
            <ControllerMenu />
            <Profile />
        </div>
    )
}

export default Main;