import React, { Component } from 'react'
import PropTypes from 'prop-types'

import cx from 'classnames';

import './index.less';

export default class Notification extends Component {

    constructor(props) {
        super(props);
    }


    componentWillReceiveProps() {
        this.render();
    }

    render() {

        const className = 'toast-' + this.props.data.type;
        return (
            this.props.data.isShow ? (
                <div
                    id='toast-container'
                    className='toast-top-right'
                    aria-live='polite'
                    role='alert'
                >
                    <div className={cx('toast', className )}>
                        <div className='toast-title'>{this.props.data.type}</div>
                        <div className='toast-message'>{this.props.data.text}</div>
                    </div>
                </div>
            ) : ''
        );
    }
}


Notification.propTypes = {
    data: PropTypes.object,
    isShow: PropTypes.bool
};