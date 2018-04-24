import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Modal from './Modal'

const mapStateToProps = ({ form }) => ({
  formModal: form.modal,
});

const mapDispatchToProps = () => ({});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Modal));
