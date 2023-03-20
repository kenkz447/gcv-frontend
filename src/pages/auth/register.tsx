import { useFormik } from 'formik';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { NavLink } from 'react-bootstrap';
import * as Yup from 'yup';

import { HtmlHead } from '@/ui/admin';
import { LayoutFullpage } from '@/ui/admin/layout/LayoutFullpage';
import { CsLineIcons } from '@/ui/cs-line-icons';

const Register = () => {
  const title = 'Register';
  const description = 'Register Page';

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email().required('Email is required'),
    password: Yup.string()
      .min(6, 'Must be at least 6 chars!')
      .required('Password is required'),
    terms: Yup.bool().required().oneOf([true], 'Terms must be accepted'),
  });
  const initialValues = { name: '', email: '', password: '', terms: false };
  const onSubmit = (values) => console.log('submit form', values);

  const formik = useFormik({ initialValues, validationSchema, onSubmit });
  const { handleSubmit, handleChange, values, touched, errors } = formik;

  const leftSide = (
    <div className='min-h-100 d-flex align-items-center'>
      <div className='w-100 w-lg-75 w-xxl-50'>
        <div>
          <div className='mb-5'>
            <h1 className='display-3 text-white'>Multiple Niches</h1>
            <h1 className='display-3 text-white'>Ready for Your Project</h1>
          </div>
          <p className='h6 lh-1-5 mb-5 text-white'>
            Dynamically target high-payoff intellectual capital for customized
            technologies. Objectively integrate emerging core competencies
            before process-centric communities...
          </p>
          <div className='mb-5'>
            <Button size='lg' variant='outline-white' href='/'>
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );

  const rightSide = (
    <div className='sw-lg-70 min-h-100 bg-foreground d-flex justify-content-center align-items-center shadow-deep full-page-content-right-border py-5'>
      <div className='sw-lg-50 px-5'>
        <div className='sh-11'>
          <NavLink href='/'>
            <div className='logo-default' />
          </NavLink>
        </div>
        <div className='mb-5'>
          <h2 className='cta-1 text-primary mb-0'>Welcome,</h2>
          <h2 className='cta-1 text-primary'>let's get the ball rolling!</h2>
        </div>
        <div className='mb-5'>
          <p className='h6'>Please use the form to register.</p>
          <p className='h6'>
            If you are a member, please <NavLink href='/login'>login</NavLink>.
          </p>
        </div>
        <div>
          <form
            id='registerForm'
            className='tooltip-end-bottom'
            onSubmit={handleSubmit}
          >
            <div className='filled form-group tooltip-end-top mb-3'>
              <CsLineIcons icon='user' />
              <Form.Control
                type='text'
                name='name'
                placeholder='Name'
                value={values.name}
                onChange={handleChange}
              />
              {errors.name && touched.name && (
                <div className='d-block invalid-tooltip'>{errors.name}</div>
              )}
            </div>
            <div className='filled form-group tooltip-end-top mb-3'>
              <CsLineIcons icon='email' />
              <Form.Control
                type='text'
                name='email'
                placeholder='Email'
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && touched.email && (
                <div className='d-block invalid-tooltip'>{errors.email}</div>
              )}
            </div>
            <div className='filled form-group tooltip-end-top mb-3'>
              <CsLineIcons icon='lock-off' />
              <Form.Control
                type='password'
                name='password'
                onChange={handleChange}
                value={values.password}
                placeholder='Password'
              />
              {errors.password && touched.password && (
                <div className='d-block invalid-tooltip'>{errors.password}</div>
              )}
            </div>
            <div className='position-relative form-group mb-3'>
              <div className='form-check'>
                <input
                  type='checkbox'
                  className='form-check-input'
                  name='terms'
                  onChange={handleChange}
                  value={values.terms}
                />
                <label className='form-check-label'>
                  I have read and accept the{' '}
                  <NavLink href='/' target='_blank'>
                    terms and conditions.
                  </NavLink>
                </label>
                {errors.terms && touched.terms && (
                  <div className='d-block invalid-tooltip'>{errors.terms}</div>
                )}
              </div>
            </div>
            <Button size='lg' type='submit'>
              Sign Up
            </Button>
          </form>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <HtmlHead title={title} description={description} />
      <LayoutFullpage left={leftSide} right={rightSide} />
    </>
  );
};

export default Register;
