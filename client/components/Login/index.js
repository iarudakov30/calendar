import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Notification from '../Common/Notification';

import './index.less';

import LoginForm from './loginForm'

export default class Login extends Component {

    componentWillMount() {
        this.props.checkAuthentication();
    }

    componentWillUpdate() {
        this.props.checkAuthentication();
    }

    render() {

        return (
                <div className='gray-bg'>
                    <Notification data={this.props.notification}/>
                    <div className='middle-box text-center loginscreen animated fadeInDown'>
                        <div>
                            <div>
                                <h1 className='logo-name'>IR</h1>
                            </div>

                            <h3>Igor Rudakov Organizer</h3>
                            <p>Maybe the best organizer in the world.</p>
                            <p>Login in. To see it in action.</p>

                            <LoginForm handleFormSubmit={this.props.handleFormSubmit} />

                            <p className='m-t'> <small>IRO+ built on NodeJS, ReactJS, Redux and MongoDB &copy; 2017</small> </p>

                        </div>
                    </div>

                </div>

        );

    }
}

Login.propTypes = {
    fetching: PropTypes.bool,
    handleFormSubmit: PropTypes.func,
    notification: PropTypes.object
};