import { connect } from 'react-redux';

import App from '../components/App';


const mapStateToProps = state => ({state});

function mapDispatchToProps(dispatch) {
    return {
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
