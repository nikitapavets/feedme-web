import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
  handleModalNewSubredditClose,
} from '../../actions/modals';


import App from './app'

const mapStateToProps = ({ modals }) => ({
  modals,
});

const mapDispatchToProps = dispatch => ({
  modalClose: () => dispatch(handleModalNewSubredditClose()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
