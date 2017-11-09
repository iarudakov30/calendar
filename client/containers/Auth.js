import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Auth from '../components/Auth';

function mapStateToProps(state) {
    return {
        user: state.auth.user,
        notification: state.notification
    }
}

function mapDispatchToProps(dispatch) {

    return {

        checkAuthentication() {
            if (!localStorage.getItem('user')) {
                dispatch(push('/login'));
            }
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)