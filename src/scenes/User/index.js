import React from 'react';
import ListUserContainer from './containers/List';
import DetailUserContainer from  './containers/Detail';

function ListUser() {
    return <ListUserContainer/>
}

function DetailUser() {
    return <DetailUserContainer/>
}

export { ListUser, DetailUser };