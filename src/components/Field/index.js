import React from 'react'
import './index.css'

function Field(props) {
  return (
    <div>
      <input className="field" {...props} />
    </div>
  )
}

export default Field
