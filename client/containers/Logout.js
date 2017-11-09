import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Logout from '../components/Logout';

import * as AuthActions from '../actions/AuthActions';
function mapStateToProps(state) {

    return {
        fetching: state.auth.fetching
    }
}

function mapDispatchToProps(dispatch) {
    return {
        handleLogout() {
            dispatch(AuthActions.logout.request());
        },

        checkAuthentication() {
            if (!localStorage.getItem('user')) {
                dispatch(push('/login'));
            }
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout)