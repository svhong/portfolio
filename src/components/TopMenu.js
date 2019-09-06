import React, { Component } from "react";
import { Link } from "react-router-dom";
import Clock from "./Clock";

import myLogo from "../images/shlogo300.png";

class TopMenu extends Component {

    render() {
        return (
            <div className="ui fixed menu top-menu">
                <Link to="/" className="logo-container header item"><img src={myLogo} alt="SH" /></Link>
                <Link to="/projects" className="item">Projects</Link>
                <div className="right menu">
                    <div className="ui right aligned clock-container">
                        <Clock />
                    </div>
                </div>
            </div>
        )
    }
}

export default TopMenu; 