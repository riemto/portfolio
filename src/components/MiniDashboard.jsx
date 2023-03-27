import React from 'react'
import KPI from "./KPI"
import "./MiniDashboard.css"

function MiniDashboard({ kpis, color }) {
    return (
        <div className="MiniDashboard"
            style={{
                color: color
            }}>
            {kpis.map(kpi => (
                <KPI name={kpi.name} value={kpi.value} prefix={kpi.prefix} suffix={kpi.suffix} />
            ))}
        </div>
    )
}

export default MiniDashboard