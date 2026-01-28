import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { employeeSchema } from './ValidationSchema';
import Button from '@mui/material/Button';

function EmployeeForm() {
  return (
    <>
      <h1>Signup</h1>

      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        validationSchema={employeeSchema}
        onSubmit={(values) => {
          console.log(values);
          alert("Form submitted");
        }}
      >
        <Form>
          <div style={{ marginBottom: '10px' }}>
            <label>Enter Name: </label>
            <Field name="name" />
            <div style={{ color: 'red' }}>
              <ErrorMessage name="name" />
            </div>
          </div>

          <div style={{ marginBottom: '10px' }}>
            <label>Enter Email: </label>
            <Field name="email" />
            <div style={{ color: 'red' }}>
              <ErrorMessage name="email" />
            </div>
          </div>

          <div style={{ marginBottom: '10px' }}>
            <label>Enter Password: </label>
            <Field name="password" type="password" />
            <div style={{ color: 'red' }}>
              <ErrorMessage name="password" />
            </div>
          </div>

          <Button type="submit" variant="contained" color="success">
            Sign Up
          </Button>
        </Form>
      </Formik>
    </>
  );
}

export default EmployeeForm;
