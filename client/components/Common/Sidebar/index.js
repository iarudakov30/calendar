import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Sidebar extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <nav className='navbar-default navbar-static-side' role='navigation'>
                <div className='sidebar-collapse'>
                    <ul className='nav metismenu' id='side-menu'>
                        <li className='nav-header'>
                            <div className='dropdown profile-element'>
                                <a href='#'>
                                    <span className='clear'>
                                        <span className='block m-t-xs'>
                                            <strong className='font-bold'>
                                                {this.props.userdata.username}
                                            </strong>
                                        </span>
                                    </span>
                                </a>
                            </div>
                            <div className='logo-element'>
                                IR
                            </div>
                        </li>
                    </ul>

                </div>
            </nav>
        );

    }
}

Sidebar.propTypes = {
    userdata: PropTypes.object
};