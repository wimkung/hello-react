import React from 'react'
import './index.css'
import Rating from '../Rating'
import Paper from '../Paper'

function Card(props) {
    let item = props.item
    return (
        <Paper type="card">
            <div className='card'>
                <p className='title'>{item.username}</p>
                <p className='subtitle'>{`${item.firstName} ${item.lastName}`}</p>
            </div>
        </Paper>
    )
}

export default Card