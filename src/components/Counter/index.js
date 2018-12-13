import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
    constructor(prop) {
        super(prop);
    }

    render() {
        const { values, onIncrement, onDecrement } = this.props;
        console.log('values: ', values);
        return (
            <Fragment>
                <h1>Counter</h1>
                <p>
                    Clicked: {values.number} times
                    <br />
                    <br />
                    Text: {values.text} <br />
                    <br />
                    <button onClick={() => {onIncrement()}}>+</button>{' '}
                    <button onClick={() => {onDecrement()}}>-</button>{' '}
                </p>
            </Fragment>

        );
    }
}

Counter.propTypes = {
    values: PropTypes.object.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
};

export default Counter;