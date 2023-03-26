import React from 'react'
import Skill from './Skill'

function Skills({ skills }) {
    return (
        <div style={{
            margin: "1rem 0"
        }}>
            {skills.map(skill => (<Skill>{skill}</Skill>))}
        </div>
    )
}

export default Skills