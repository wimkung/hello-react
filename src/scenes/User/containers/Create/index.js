import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import UserForm from '../../components/Form'
import axios from 'axios'

class CreateUser extends Component {
  submit = async values => {
    const res = await axios.post('http://localhost:8000/user', values)

    if (res.status === 200) {
      alert('Create new user successfully.')
      this.props.history.replace('/user')
    }

    alert(res.data.msg)
  }

  render() {
    return (
      <Fragment>
        <h1>Create User</h1>
        <UserForm onSubmit={this.submit} />
      </Fragment>
    )
  }
}

export default withRouter(CreateUser)
