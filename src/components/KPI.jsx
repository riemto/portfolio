import React from 'react'
import "./KPI.css";

function KPI({ name, value, prefix, suffix }) {
    return (
        <div className="KPI">
            <div className="KPI-name">{name}</div>
            <div className="KPI-value">{prefix}{value}{suffix}</div>
        </div >
    )
}

export default KPI