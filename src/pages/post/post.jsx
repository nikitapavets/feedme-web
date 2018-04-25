import React from 'react';
import PropTypes from 'prop-types';

import lang from '../../lang/en'

import {
  Wrap,

  SubredditTitle,

  PostCard,
  PostTitle,
  PostTitleLink,
  PostDescription,
  PostDescriptionAuthor,
  PostDescriptionDate,
  PostDescriptionComments,

  LoadMore,
  LoadMoreButton,
} from './post.styled';

class Post extends React.Component {
  componentDidMount() {
    const { subreddits, loadSubreddit, subredditName, isLoadedSubreddit } = this.props;
    !isLoadedSubreddit && loadSubreddit(subredditName);
  }


  render() {
    const { subreddits, name } = this.props;
    const subreddit = subreddits.list.find(_ => _.name === name)
    console.log(subreddits.list);

    return (
      subreddit ? (
        <Wrap>
          <SubredditTitle>{subreddit.title}</SubredditTitle>
          {/* <Comments comments={subreddit.posts}/> */}
          <LoadMore>
            <LoadMoreButton>{lang.general.loadMore}</LoadMoreButton>
          </LoadMore>
        </Wrap>
      ) : (
          <div>Loading...</div>
        )
    );
  }
}

const Comments = ({ subreddit, posts }) =>
  posts.map(post =>
    <PostCard key={post.id}>
      <PostTitle>
        <PostTitleLink to={post.url} target='_blank'>{post.title}</PostTitleLink>
      </PostTitle>
        <PostDescription>
          <PostDescriptionComments to={`/subreddits/${subreddit.name}/posts/${post.name}`}>0 {lang.subreddit.comments}</PostDescriptionComments>
          <PostDescriptionAuthor>, {post.author}, </PostDescriptionAuthor>
          <PostDescriptionDate>{post.created_at}</PostDescriptionDate>
        </PostDescription>
    </PostCard>
  );

  Post.propTypes = {};

export default Post;
