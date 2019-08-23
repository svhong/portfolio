import React from "react";
import { Spring } from "react-spring/renderprops";

export default function ProjectContent() {
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
                    <h1>Projects</h1>
                    <p>Coming Soon</p>
                </div>
            )}
        </Spring>
    )
}