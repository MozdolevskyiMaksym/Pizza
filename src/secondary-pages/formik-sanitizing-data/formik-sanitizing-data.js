import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import useFormikSanitizingData from './use-formik-sanitizing-data';
import './formik-sanitizing-data.scss';

const FormikSanitizingData = () => {
  const { initialValues, validationSchema, onSubmit, sanitizeInput } =
    useFormikSanitizingData();

  return (
    <div className="formik-container">
      <h2>Contact Us</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form className="formik">
            <div className="formik-group">
              <label htmlFor="name">Name</label>
              <Field
                type="text"
                name="name"
                id="name"
                className="formik-control"
                placeholder="Enter your name"
                onChange={(e) => {
                  const sanitizedValue = sanitizeInput(e.target.value);
                  formik.setFieldValue('name', sanitizedValue);
                }}
              />
              <ErrorMessage
                name="name"
                component="div"
                className="error-message"
              />
            </div>
            <div className="formik-group">
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                name="email"
                id="email"
                className="formik-control"
                placeholder="Enter your email"
                onChange={(e) => {
                  const sanitizedValue = sanitizeInput(e.target.value);
                  formik.setFieldValue('email', sanitizedValue);
                }}
              />
              <ErrorMessage
                name="email"
                component="div"
                className="error-message"
              />
            </div>
            <div className="formik-group">
              <label htmlFor="message">Message</label>
              <Field
                as="textarea"
                name="message"
                id="message"
                className="formik-control"
                placeholder="Enter your message"
                onChange={(e) => {
                  const sanitizedValue = sanitizeInput(e.target.value);
                  formik.setFieldValue('message', sanitizedValue);
                }}
              />
              <ErrorMessage
                name="message"
                component="div"
                className="error-message"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={!formik.isValid || formik.isSubmitting}
            >
              {formik.isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikSanitizingData;
