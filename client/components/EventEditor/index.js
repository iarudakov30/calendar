import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { TimePicker } from 'antd'
import './antd.css';
import './index.less';

export default class EventEditor extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: ''
        }
    }

    handleTimeFrom() {
        return document.querySelector('.picker-from .ant-time-picker-input').value;
    }

    handleTimeTo() {
        return document.querySelector('.picker-to .ant-time-picker-input').value;
    }

    handleTitleChange(event) {
        this.setState({ title: event.target.value });
    }

    handleSubmit() {
        const newEvent = {
            title: this.state.title,
            from: this.handleTimeFrom(),
            to: this.handleTimeTo()
        };
        this.props.handleFormSubmit(newEvent);
    }

    render() {

        const disabledHours = () => {
            return [0, 1, 2, 3, 4, 5, 6, 7, 17, 18, 19, 20, 21, 22, 23, 24];
        };

        return (
            <div className='event-editor'>
                <div className='form-group'>

                    <input
                        name='title'
                        type='text'
                        placeholder='Set event title'
                        className='form-control'
                        value={this.state.title}
                        onChange={::this.handleTitleChange}
                    />
                </div>

                <div className='form-group row'>
                    <div className='col-sm-6 picker-from'>

                        <TimePicker
                            placeholder='Set time from'
                            format='HH:mm'
                            disabledHours={disabledHours}
                            //onChange={::this.handleTimeFrom}
                            className='time-picker'
                            hideDisabledOptions
                        />

                    </div>

                    <div className='col-sm-6 picker-to'>
                        <TimePicker
                            placeholder='Set time to'
                            format='HH:mm'
                            disabledHours={disabledHours}
                            //onChange={::this.handleTimeTo}
                            className='time-picker'
                            hideDisabledOptions
                        />
                    </div>
                </div>

                <div className='event-button'>
                    <button
                        type='submit'
                        className='btn btn-primary block full-width m-b'
                        onClick={::this.handleSubmit}
                    >
                        Add
                    </button>
                </div>
            </div>
        );
    }
}

EventEditor.propTypes = {
    handleFormSubmit: PropTypes.func
};