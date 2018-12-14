import React, { Component } from 'react'
import './App.css'
import Route from './scenes/Route'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import { Container } from 'reactstrap'

const store = createStore(rootReducer)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container>
          <div className="App">
            <Route />
          </div>
        </Container>
      </Provider>
    )
  }
}

export default App
