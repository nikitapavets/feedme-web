import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
  handleSubredditsLoad,
  handleSubredditFilter,
} from '../../actions/subreddits';

import {
  handleModalNewSubredditOpen,
  handleModalNewSubredditClose,
} from '../../actions/modals';

import Home from './home'

const mapStateToProps = ({ subreddits }) => ({
  subreddits,
});

const mapDispatchToProps = dispatch => ({
  loadSubreddits: () => dispatch(handleSubredditsLoad()),
  filterSubreddits: (event, newValue) => dispatch(handleSubredditFilter(newValue)),
  modalOpen: (title) => dispatch(handleModalNewSubredditOpen(title)),
  modalClose: () => dispatch(handleModalNewSubredditClose()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
