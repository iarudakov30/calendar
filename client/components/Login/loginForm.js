import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'

let LoginForm = props => {

    const { handleSubmit, handleFormSubmit } = props;

    return (

        <form className='m-t' role='form' onSubmit={ handleSubmit(handleFormSubmit) }>
            <div className='form-group'>
                <Field name='email' component='input' type='email' placeholder='Email' className='form-control'/>
            </div>
            <div className='form-group'>
                <Field name='password' component='input' type='password' placeholder='Password' className='form-control'/>
            </div>
            <button type='submit' className='btn btn-primary block full-width m-b'>Login</button>

            <Link
                to='/registration'
                className='btn btn-sm btn-white btn-block'
            >
                Create an account
            </Link>
        </form>
    )
};

LoginForm = reduxForm({
    // a unique name for the form
    form: 'login'
})(LoginForm);

export default LoginForm;