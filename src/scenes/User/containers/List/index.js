import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import ListUser from '../../components/List';
import axios from 'axios';

class ListUserContainer extends Component {

    state = {
        user: []
    }

    async componentDidMount() {
        const res = await axios.get('http://localhost:8000/user');

        if (res.status === 200) {
            this.setState({
                user : res.data
            });
        }

        console.log(res.status);

    }

    onNavigateToDetail = id => {
        let { history } = this.props
        history.push('/user/' + id)
    }

    render() {
        return (
            <ListUser items = { this.state.user } onNavigateToDetail={this.onNavigateToDetail}/>
        )
    }
}

export default withRouter(ListUserContainer);