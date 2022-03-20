import React from "react";
import ControllerMenu from "../../componets/main-components/controller/controller.componet";
import './main.styles.scss';
import { Navigation } from "../../componets/main-components/navigation/navigation.component";

const Main = () => {
    return (
        <div className="main">
            <Navigation />
        </div>
    )
}

export default Main;