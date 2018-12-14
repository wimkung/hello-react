import React from 'react'
import './index.css'

function ItemDtail(props) {
  return (
    <div className="item-value">
      <p className="label">{props.label}</p>
      <p className="value">{props.value}</p>
    </div>
  )
}

export default ItemDtail
