import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Notification from '../Common/Notification';

import './index.less';

import RegForm from './regForm'

export default class Registry extends Component {

    constructor(props){
        super(props);
    }

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
                            <p>Create account to see it in action.</p>

                            <RegForm handleFormSubmit={this.props.handleFormSubmit} />

                            <p className='m-t'> <small>IRO+ built on NodeJS, ReactJS, Redux and MongoDB &copy; 2017</small> </p>

                        </div>
                    </div>

                </div>

        );

    }
}

Registry.propTypes = {
    notification: PropTypes.object,
    handleFormSubmit: PropTypes.func
};