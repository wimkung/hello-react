import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Route from './scenes/Route';
import {Provider} from 'react-redux';
import { createStore } from "redux";
import rootReducer from './reducers';
import { connect } from 'react-redux';

const store = createStore(rootReducer);

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <Route/>
                </div>
            </Provider>
        );
    }
}

const mapStateToProps = function (state) {
    return {
        message: 'This is message from mapStateToProps',
        counter: state.counters || 0
    }
}

const AppWithConnect = connect(mapStateToProps)(App);

export default AppWithConnect;