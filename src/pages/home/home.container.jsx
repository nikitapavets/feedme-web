import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
  handleSubredditsLoad,
  handleSubredditFilter,
} from '../../actions/subreddits';

import Home from './home'

const mapStateToProps = ({ subreddits, form }) => ({
  subreddits,
});

const mapDispatchToProps = dispatch => ({
  loadSubreddits: () => dispatch(handleSubredditsLoad()),
  filterSubreddits: (event, newValue) => dispatch(handleSubredditFilter(newValue)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
