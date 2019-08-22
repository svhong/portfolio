import React, { Component } from "react";
import { Link } from "react-router-dom";

class TopMenu extends Component {

    render() {
        return (
            <div className="ui menu">
                <div className="header item">hello</div>
                <Link to="/" className="item">Landing</Link>
                <Link to="/projects" className="item">Projects</Link>
                <Link to="/about" className="item">About</Link>
            </div>
        )
    }
}

export default TopMenu; 