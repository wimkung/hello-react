import React from 'react'
import './index.css'

function Rating({rate}) {
    return (
        <div className="rating">
            <span className='span'>{rate}</span>/10
        </div>
    )
}

export default Rating