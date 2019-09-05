import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";

import Clock from "./Clock";

export default class LandingContent extends Component {
    render() {
        return (
            <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                config={{
                    delay: 100,
                    duration: 500
                }}>
                {props => (
                    <div style={props} className="page-content">
                        <h1>Hello World</h1>
                        <p>I'm almost done</p>
                        <Clock />
                    </div>
                )}

            </Spring>
        )
    }
}