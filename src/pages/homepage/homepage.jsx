import React from "react";
import { Link } from "react-router-dom";
import Button from "../../componets/button/button.component";
import Header from "../../componets/header/header.component";

import './homepage.styles.scss'

const Homepage = () => {
    return (<div className="main">
        <Header/>
        <div className="wrapper">
            <div className="wrapper-heading">
                <h1 className="wrapper-title">EdTech platform for everyone</h1>
                <div className="wrapper-desc">Platform for everyone. <br />Let's educate with us!</div>
                <Link to="/signup"><Button>SIGN UP</Button></Link>
            </div>
        </div>
    </div>
    )
}

export default Homepage;