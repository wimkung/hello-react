import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ListUser, DetailUser, CreateUser } from '../User'
import CounterLink from '../../containers/Counter'
import ScatterLink from '../Eos/containers/Scatter'

const Index = () => <h2>Home</h2>
const About = () => <h2>About</h2>

function Routes() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/about/" exact component={About} />
        <Route path="/user/" exact component={ListUser} />
        <Route path="/user/create" exact component={CreateUser} />
        <Route path="/user/:id" exact component={DetailUser} />
        <Route path="/counter/" exact component={CounterLink} />
        <Route path="/scatter" exact component={ScatterLink} />
      </Switch>
    </div>
  )
}

export default Routes
