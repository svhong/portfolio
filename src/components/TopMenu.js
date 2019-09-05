import React, { Component } from "react";
import { Link } from "react-router-dom";

import myLogo from "../images/SHb.png";

class TopMenu extends Component {

    render() {
        return (
            <div className="ui menu top-menu">
                <Link to="/" className="logo-container header item"><img src={myLogo} alt="SH" /></Link>
                <Link to="/projects" className="item">Projects</Link>
            </div>
        )
    }
}

export default TopMenu; 