import React, { Component } from 'react';
import PropTypes from 'prop-types'

import './style.less';

export default class Content extends Component {
    render() {
        return (
            <div className='wrapper wrapper-content'>
                { this.props.children }
            </div>
        )
    }
}

Content.propTypes = {
    children: PropTypes.element.isRequired
};
