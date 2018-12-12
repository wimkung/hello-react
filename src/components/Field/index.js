import React from 'react'
import './index.css'

function Field(props) {
    return (
        <div>
            <input className='field' {...props}></input>
        </div>
    )
}

export default Field