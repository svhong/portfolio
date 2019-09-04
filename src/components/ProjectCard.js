import React from "react";
import { Spring } from "react-spring/renderprops";

export default function () {
    return (
        <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            config={{
                delay: 100,
                duration: 500
            }}>
            {props => (
                <div style={props} className="project-card ui card">
                    <img src="https://image.shutterstock.com/image-vector/pixelated-game-tetris-vector-colorful-260nw-360924893.jpg" alt="tetris" />
                </div>
            )}
        </Spring>
    )
}
// takes project objects as props
