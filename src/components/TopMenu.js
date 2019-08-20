import React, { Component } from "react";

class TopMenu extends Component {

    render() {
        return (
            <div className="ui menu">
                <div className="header item">hello</div>
                <a href="/" className="item">Home</a>
                <a href="/" className="item">Projects</a>
                <a href="/" className="item">About</a>
            </div>
        )
    }
}

export default TopMenu; 