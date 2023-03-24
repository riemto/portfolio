import React from 'react'

function Skill({ children }) {
    return (
        <span style={{
            borderRadius: "0.5rem",
            backgroundColor: "#303849",
            color: "#fff",
            padding: "0.3rem",
            marginRight: "0.5rem"
        }}> {children}</span >
    )
}

export default Skill