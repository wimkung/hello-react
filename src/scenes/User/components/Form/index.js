import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback
} from 'reactstrap'

const validate = values => {
  const errors = {}
  if (!values.username) {
    errors.username = 'Required'
  } else if (values.username.length > 10) {
    errors.username = 'Must be 10 characters or less'
  }

  if (!values.firstName) {
    errors.firstName = 'Required'
  } else if (values.firstName.length > 10) {
    errors.firstName = 'Must be 10 characters or less'
  }

  if (!values.lastName) {
    errors.lastName = 'Required'
  } else if (values.lastName.length > 10) {
    errors.lastName = 'Must be 10 characters or less'
  }

  return errors
}

const warn = values => {
  const warnings = {}
  return warnings
}

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <FormGroup row>
    <Label for={input.name} sm={4}>
      {label}
    </Label>
    <Col sm={8}>
      <Input {...input} placeholder={label} type={type} invalid={touched} />
      {touched &&
        ((error && <FormFeedback>{error}</FormFeedback>) ||
          (warning && <FormFeedback>{warning}</FormFeedback>))}
    </Col>
  </FormGroup>
)

let UserForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <Row>
      <Col md={{ size: 6, offset: 3 }}>
        <Form onSubmit={handleSubmit}>
          <Field
            name="firstName"
            type="text"
            component={renderField}
            label="First Name"
          />
          <Field
            name="lastName"
            type="text"
            component={renderField}
            label="Last Name"
          />
          <Field
            name="username"
            type="text"
            component={renderField}
            label="Username"
          />
          <Button type="submit" disabled={submitting}>
            Submit
          </Button>
          <Button
            type="button"
            disabled={pristine || submitting}
            onClick={reset}
          >
            Clear Values
          </Button>
        </Form>
      </Col>
    </Row>
  )
}

UserForm = reduxForm({
  form: 'user',
  validate,
  warn
})(UserForm)

export default UserForm
