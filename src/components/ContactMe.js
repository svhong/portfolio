import React from "react";
import ContactContent from "./ContactContent";

export default function AboutMe() {
    return (
        <div style={c1Style} className="page-container">
            <ContactContent />
        </div>
    );
}

const c1Style = {
    background: "lightsalmon",
    padding: "1.5rem"
}