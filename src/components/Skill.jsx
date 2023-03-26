import React from 'react'

function Skill({ children }) {
    return (
        <div style={{
            display: "inline-block",
            borderRadius: "0.5rem",
            backgroundColor: "#303849",
            color: "#fff",
            padding: "0.5rem",
            marginRight: "0.5rem",
            marginTop: "0.5rem"
        }}> {children}</div >
    )
}

export default Skill