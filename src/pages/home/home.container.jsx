import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
  handleSubredditsLoad,
} from '../../actions/subreddits';

import Home from './home'

const mapStateToProps = ({ subreddits }) => ({
  subreddits
});

const mapDispatchToProps = dispatch => ({
  loadSubreddits: () => dispatch(handleSubredditsLoad()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
