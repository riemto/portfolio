import React from 'react'
import "./KPI.css";

function KPI({ name, value, prefix, suffix, size = 250 }) {
    return (
        <div className="KPI" key={name} style={{
            // width: size,
            // height: size
        }}>
            <div className="KPI-name">{name}</div>
            <div className="KPI-value">{prefix}{value}{suffix}</div>
        </div>
    )
}

export default KPI