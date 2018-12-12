import React from 'react'
import './index.css'

function Button(props) {
    const {primary} = props
    return <button className={primary ? "btn Red":"btn Gray"} {...props}> {props.text}</button>
}

export default Button