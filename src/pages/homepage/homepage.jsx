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
                <h1 className="wrapper-title">FIND YOUR PET WITH US</h1>
                <div className="wrapper-desc">Social network for lost & shared pets. <br/>Let's find your friend together.</div>
                <Link to="/signup"><Button>SIGN UP</Button></Link>
            </div>
        </div>
    </div>
    )
}

export default Homepage;