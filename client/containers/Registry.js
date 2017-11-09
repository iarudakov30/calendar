import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Registry from '../components/Registry';

import * as AuthActions from '../actions/AuthActions';

function mapStateToProps(state) {
    return {
        fetching: state.auth.fetching,
        notification: state.notification
    }
}

function mapDispatchToProps(dispatch) {
    return {
        handleFormSubmit(formProps) {
            dispatch(AuthActions.register.request(formProps));
        },
        checkAuthentication() {
            if (localStorage.getItem('user')) {
                dispatch(push('/'));
            }
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Registry)