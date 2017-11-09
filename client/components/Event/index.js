import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './index.less';

export default class Note extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const coef = 0.185; //100% / 540min

        const style = {
            width: this.props.width + '%',
            left: (this.props.offset * this.props.width) + '%',
            height: this.props.duration*coef + '%',
            top: this.props.start*coef + '%'
        };

        return (
            <div className='event' style={style}>
                <span className='del-icon' onClick={this.props.onDelete}> × </span>
                <span className='title'>{this.props.title}</span>
            </div>
        );
    }
}


Note.propTypes = {
    width: PropTypes.number,
    offset: PropTypes.number,
    duration: PropTypes.number,
    start: PropTypes.number,
    title: PropTypes.string,
    onDelete: PropTypes.func
};