import { connect } from 'react-redux';
import CounterComponent from '../../components/Counter';
import { increment, decrement } from '../../actions/Counter';

const mapStateToProps = state => {
    return { values: state.counters };
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrement: value => { dispatch(increment(value)) },
        onDecrement: value => { dispatch(decrement(value)) }
    }
}

const CounterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterComponent);

export default CounterLink;