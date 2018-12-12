import React from 'react';
import './index.css';
import Paper from '../../../../components/Paper';
import Field from '../../../../components/Field';
import Button from '../../../../components/Button';

function CreateUser(props) {
    return (
        <div className="create">
            <Paper type="create">
                <h1>Login</h1>
                <div className="field-wrapper">
                    <Field value={props.username} onChange={props.onInputChange}/>
                </div>
                {!props.isValid && <p className="error">This field is required.</p>}
                <div className="field-wrapper">
                    <Field value={props.firstName} onChange={props.onInputChange}/>
                </div>
                {!props.isValid && <p className="error">This field is required.</p>}
                <div className="field-wrapper">
                    <Field value={props.lastName} onChange={props.onInputChange}/>
                </div>
                {!props.isValid && <p className="error">This field is required.</p>}
                <Button text="Submit" primary={props.isValid} onClick={props.onClick}/>
            </Paper>
        </div>
    )
}
export default CreateUser