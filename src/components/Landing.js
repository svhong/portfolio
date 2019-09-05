import React from "react";
import LandingContent from "./LandingContent";
export default function Landing() {
    return (

        <div style={c1Style} className="page-container">
            <LandingContent />
        </div>
    );
}

const c1Style = {
    padding: "1.5rem"
}