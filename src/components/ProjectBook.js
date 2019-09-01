import React, { Component } from "react";
import { Link } from "react-router-dom";
import FlipPage from "react-flip-page";

import page1 from "../images/page1.gif";
import page2 from "../images/page2.gif";
import page3 from "../images/page3.gif";
import page4 from "../images/page4.gif";
import page5 from "../images/page5.gif";


export default class BookProject extends Component {


    render() {
        return (
            <FlipPage
                className="book"
                orientation="horizontal"
            >
                <img src={page1} alt="book" />
                <div>
                    <h1>somestuff in here</h1>
                    <p>some descriptions</p>
                    <Link to="/">Some link in here</Link>
                </div>
                <img src={page2} alt="book" />
                <img src={page3} alt="book" />
                <img src={page4} alt="book" />
                <img src={page5} alt="book" />
            </FlipPage>
        )
    }
}

