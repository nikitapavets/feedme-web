import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
  handleSubredditLoad,
  handlePostLoad,
} from '../../actions/subreddits';

import Post from './post'

const mapStateToProps = ({ subreddits }, props) => {
  const subreddit = subreddits.list.find(_ => _.name === props.match.params.subredditName);
  const isLoadedSubreddit = !!(subreddit && !subreddit.isInitialLoading);
  let post = null;
  let isLoadedPost = false;
  if(isLoadedSubreddit) {
    post = isLoadedSubreddit ? subreddit.posts.find(_ => _.name === props.match.params.postName) : null;
    isLoadedPost = !post.isInitialLoading;
  }

  return {
    subredditName: props.match.params.subredditName,
    postName: props.match.params.postName,
    isLoadedSubreddit,
    isLoadedPost,
    post,
  }
};

const mapDispatchToProps = dispatch => ({
  subredditLoad: (name) => dispatch(handleSubredditLoad(name)),
  postLoad: (subredditName, postName) => dispatch(handlePostLoad(subredditName, postName)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Post));
