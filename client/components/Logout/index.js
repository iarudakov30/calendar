import  { Component } from 'react'
import PropTypes from 'prop-types'

export default class Logout extends Component {

    constructor(props){
        super(props);
    }

    componentWillMount() {
        this.props.handleLogout();
    }

    componentWillUpdate() {
        this.props.checkAuthentication();
    }

    render() {
        return null;
    }
}

Logout.propTypes = {
    fetching: PropTypes.bool,
    checkAuthentication: PropTypes.func,
    handleLogout: PropTypes.func

};