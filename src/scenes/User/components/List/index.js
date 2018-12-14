import React from 'react'
import './index.css'
import '../../../../components/Card/index.css'
import Card from '../../../../components/Card'

function List(props) {
  return (
    <div className="user-list">
      {props.items.map(item => {
        return (
          <div
            className="user-list-item"
            key={item._id}
            onClick={() => props.onNavigateToDetail(item._id)}
          >
            <Card item={item} />
          </div>
        )
      })}
    </div>
  )
}

export default List
