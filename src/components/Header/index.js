import React from 'react'
import './index.css'

function Header({name}) {
    return (
        <div className="header">
            <p>Top 10 IMDB movies</p>
            {name &&  <p>Hi, {name}</p>}
        </div>
    )
}

export default Header