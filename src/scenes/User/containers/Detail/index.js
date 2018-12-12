import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ReactModal from 'react-modal';
import DetailUser from '../../components/Detail';
import axios from 'axios';

class DetailUserContainer extends Component {
    state = {
        data: [],
        longens: [],
        isOpenDialog: false,
    }

    onBackPressed = () => {
        this.props.history.goBack();
    }

    onShowDialog = () => {
        this.setState({
            isOpenDialog: true,
        });
    }

    onDismissDialog = () => {
        console.log('onDismissDialog');
        this.setState({
            isOpenDialog: false,
        })
    }

    async componentDidMount() {
        let userId = this.props.match.params.id;

        const res = await axios.get(`http://localhost:8000/user/${userId}`);

        if (res.status === 200) {
            this.setState({
                data: res.data,
                longens: res.data.longens,
            });
        }
    }

    render() {
        let state = this.state;

        return (
            <div>
                <DetailUser item={state.data} onBackPressed={this.onBackPressed} onShowDialog={this.onShowDialog}/>

                {
                    <ReactModal
                        className='modal-content'
                        overlayClassName='modal-overlay'
                        isOpen={state.isOpenDialog}
                        onRequestClose={this.onDismissDialog}>
                        { this.state.longens.map(item => {
                            return (
                                <div key={ item._id }>
                                    <p>Address : { item.address}</p>
                                    <p>Location : { `${item.lat},${item.long}` }</p>
                                    <p>Amount : { item.amount}</p>
                                    <p>Price : { item.price}</p>
                                    <p>Created at : { item.createdAt}</p>
                                </div>
                            )
                        })}
                    </ReactModal>
                }
            </div>
        )
    }
}

export default withRouter(DetailUserContainer);