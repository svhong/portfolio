import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";
import Glitch from "./Glitch";

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
                    <div style={props} className="landing-content">
                        <Glitch />
                    </div>
                )}
            </Spring>
        )
    }
}

