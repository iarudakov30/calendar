import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './style.less'

export default class Header extends Component {
    render() {
        return (
            <div className='row border-bottom'>
                <nav className='navbar navbar-static-top' role='navigation'>

                    <div className='navbar-header'>
                        <a className='navbar-minimalize minimalize-styl-2 btn btn-primary' href='#'>
                            <i className='fa fa-bars'/>
                        </a>
                        <p className='minimalize-styl-2'>IR Organizer</p>
                    </div>

                    <ul className='nav navbar-top-links navbar-right'>

                        <li>
                            <Link to='logout'>
                                <i className='fa fa-sign-out'/>Logout
                            </Link>
                        </li>
                    </ul>

                </nav>
            </div>
        );

    }
}