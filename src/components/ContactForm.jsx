'use client'
import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import Button from './Button'

const ContactForm = () => {
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    message: ''
  }

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    phone: Yup.string().matches(/^[0-9]{10}$/, 'Phone number must be 10 digits').required('Phone number is required'),
    message: Yup.string().required('Message is required')
  })

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values)
    setSubmitting(false)
  }

  return (
    <div className="contact-form">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="form-group">
              <Field type="text" name="name" placeholder="Your Name" className="form-control" />
              <ErrorMessage name="name" component="div" className="error-message" />
            </div>

            <div className="form-group">
              <Field type="email" name="email" placeholder="Your Email" className="form-control" />
              <ErrorMessage name="email" component="div" className="error-message" />
            </div>

            <div className="form-group">
              <Field type="tel" name="phone" placeholder="Your Phone" className="form-control" />
              <ErrorMessage name="phone" component="div" className="error-message" />
            </div>

            <div className="form-group">
              <Field as="textarea" name="message" placeholder="Your Message" className="form-control" rows="2" />
              <ErrorMessage name="message" component="div" className="error-message" />
            </div>
            <br />
            <Button type={'btn'} text='Send Message' className='main-btn' />
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default ContactForm