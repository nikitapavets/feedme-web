import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import config from '../../config';

import {
  handleSubredditsLoad,
  handleSubredditNew,
  handleSubredditFilter,
} from '../../actions/subreddits';

import {
  handleModalNewSubredditOpen,
} from '../../actions/modals';

import Home from './home'

const mapStateToProps = ({ subreddits }) => ({
  subreddits,
  isVisibleSearchField: subreddits.list.length > config.client.searchFieldLimit
});

const mapDispatchToProps = dispatch => ({
  loadSubreddits: () => dispatch(handleSubredditsLoad()),
  filterSubreddits: (event, newValue) => dispatch(handleSubredditFilter(newValue)),
  modalOpen: (title, description, content) => dispatch(handleModalNewSubredditOpen(title, description, content)),
  modalSend: (event, name) => {
    event.preventDefault();
    dispatch(handleSubredditNew(name))
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
