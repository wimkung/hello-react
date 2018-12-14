import React from 'react'
import './index.css'

function Paper({ children, type }) {
  return <div className={'paper paper-' + type}>{children}</div>
}

export default Paper
