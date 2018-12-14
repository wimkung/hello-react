import React from 'react'
import './index.css'
import '../../../../components/Card'
import Paper from '../../../../components/Paper'
import Button from '../../../../components/Button'
import ItemDtail from '../../../../components/ItemDetail'

function Detail(props) {
  let item = props.item
  return (
    <div className="user-detail-container">
      <Paper type="detail">
        <div className="user-detail">
          <div className="header-header">
            <h1>{`${item.firstName} ${item.lastName}`}</h1>
          </div>
          <div className="detail-container">
            <ItemDtail label="Username" value={item.username} />
          </div>
          <div className="button-container">
            <span>
              <Button text="View Detail" primary onClick={props.onShowDialog} />
            </span>
            <Button text="Back" onClick={props.onBackPressed} />
          </div>
        </div>
      </Paper>
    </div>
  )
}

export default Detail
