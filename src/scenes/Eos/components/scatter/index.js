import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

class Scatter extends Component {
  componentDidMount() {
    this.props.onConnect()
  }

  render() {
    const {
      values,
      onIncrement,
      onDecrement,
      onGetIdentify,
      onTransfer,
      onForgetIdentify
    } = this.props
    return (
      <Fragment>
        <h1>Scatter</h1>
        <p>
          Clicked: {values.number} times
          <br />
          <br />
          Text: {values.text} <br />
          <br />
          <button
            onClick={() => {
              onIncrement()
            }}
          >
            +
          </button>{' '}
          <button
            onClick={() => {
              onDecrement()
            }}
          >
            -
          </button>{' '}
          <button onClick={onGetIdentify} disabled={values.loggedIn}>Get Identify</button>{' '}
          <button
            onClick={() => {
              onTransfer({ to: 'pondpondpond', memo: 'eiei', amount: 1.0 })
            }}
            disabled={!values.loggedIn}
          >
            Transfer
          </button>{' '}
          <button onClick={onForgetIdentify} disabled={!values.loggedIn}>Forget Identify</button>{' '}
        </p>
      </Fragment>
    )
  }
}

Scatter.propTypes = {
  values: PropTypes.object.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onConnect: PropTypes.func.isRequired,
  onGetIdentify: PropTypes.func.isRequired,
  onTransfer: PropTypes.func.isRequired,
  onForgetIdentify: PropTypes.func.isRequired
}

export default Scatter
