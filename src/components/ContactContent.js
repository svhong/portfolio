import React from "react";
import { Spring } from "react-spring/renderprops";

export default function ContactContent() {
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
                    <h1>Contact</h1>
                    <p>Putting some stuff in here blah blah blah</p>

                </div>
            )}
        </Spring>
    );
}