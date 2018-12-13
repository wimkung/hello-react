import React from 'react';
import { Field, reduxForm } from "redux-form";

let UserForm = props => {
    const { handleSubmit } = props
    return (
        <form onSubmit={ handleSubmit }>
            <div>
                <label htmlFor="firstName">First Name</label>
                <Field name="firstName" component="input" type="text" />
            </div>
            <div>
                <label htmlFor="lastName">Last Name</label>
                <Field name="lastName" component="input" type="text" />
            </div>
            <div>
                <label htmlFor="email">Username</label>
                <Field name="username" component="input" type="text" />
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

UserForm = reduxForm({
    // a unique name for the form
    form: 'user'
})(UserForm);

export default UserForm;