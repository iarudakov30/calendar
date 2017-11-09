import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import Checkbox from 'rc-checkbox';
import 'rc-checkbox/assets/index.css';

let RegForm = props => {

    const { handleSubmit, handleFormSubmit } = props;

    return (

        <form className='m-t' role='form' onSubmit={ handleSubmit(handleFormSubmit) }>
            <div className='form-group'>
                <Field
                    name='username'
                    component='input'
                    type='text'
                    placeholder='Name'
                    className='form-control'
                />
            </div>
            <div className='form-group'>
                <Field
                    name='email'
                    component='input'
                    type='email'
                    placeholder='Email'
                    className='form-control'
                />
            </div>
            <div className='form-group'>
                <Field
                    name='password'
                    component='input'
                    type='password'
                    placeholder='Password'
                    className='form-control'
                />
            </div>
            <div className='form-group'>
                <Field name='isAgree' component={Checkbox} type='checkbox'/>
                <i/> Agree the terms and policy
            </div>
            <button
                type='submit'
                className='btn btn-primary block full-width m-b'
            >
                Register
            </button>

            <p className='text-muted text-center'>
                <small>Already have an account?</small>
            </p>

            <Link
                to='/login'
                className='btn btn-sm btn-white btn-block'
            >
                Login
            </Link>

        </form>
    )
};

RegForm = reduxForm({
    form: 'registry'
})(RegForm);

export default RegForm;