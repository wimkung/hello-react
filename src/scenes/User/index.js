import React from 'react'
import ListUserContainer from './containers/List'
import DetailUserContainer from './containers/Detail'
import CreateUserContainer from './containers/Create'

function ListUser() {
  return <ListUserContainer />
}

function DetailUser() {
  return <DetailUserContainer />
}

function CreateUser() {
  return <CreateUserContainer />
}

export { ListUser, DetailUser, CreateUser }
