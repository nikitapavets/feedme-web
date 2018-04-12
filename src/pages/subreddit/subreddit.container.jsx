import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
  handleSubredditLoad,
} from '../../actions/subreddits';

import Subreddit from './subreddit'

const mapStateToProps = ({ subreddits }, props) => {
  const subreddit = subreddits.list.find(_ => _.name === props.match.params.name);

  return {
    name: props.match.params.name,
    isLoaded: subreddit && !subreddit.isInitialLoading,
    subreddit,
    subreddits,
  }
};

const mapDispatchToProps = dispatch => ({
  loadSubreddit: (name) => dispatch(handleSubredditLoad(name)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Subreddit));
