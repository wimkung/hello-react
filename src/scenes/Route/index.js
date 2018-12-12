import React from 'react';
import {Route} from 'react-router-dom';
import { ListUser, DetailUser } from "../User";

const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;

function Routes() {
    return (
        <div>
            <Route path="/" exact component={Index}/>
            <Route path="/about/" exact component={About}/>
            <Route path="/user/" exact component={ ListUser }/>
            <Route path="/user/:id" exact component={ DetailUser }/>
        </div>
    )
}

export default Routes;