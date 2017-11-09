import React, { Component } from 'react';
import PropTypes from 'prop-types'

import Notification from '../Common/Notification';
import Sidebar from '../Common/Sidebar';
import Header from '../Common/Header';
import Content from '../Common/Content';

export default class Auth extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.checkAuthentication();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.location !== this.props.location) {
            this.props.checkAuthentication();
        }
    }

    render() {
        return(
            <div>
                <Notification data={this.props.notification}/>
                <Sidebar userdata={this.props.user}/>

                <div id='page-wrapper' className='gray-bg'>
                    <Header/>
                    <h2>Calendar</h2>
                    <Content>
                        {this.props.children}
                    </Content>

                </div>
            </div>
        );
    }
}

Auth.propTypes = {
    children: PropTypes.element.isRequired,
    notification: PropTypes.object,
    user: PropTypes.object,
    checkAuthentication: PropTypes.func
};
