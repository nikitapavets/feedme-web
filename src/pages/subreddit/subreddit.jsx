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
} from './subreddit.styled';

class Subreddit extends React.Component {
  componentDidMount() {
    const { loadSubreddit, subredditName, isLoaded } = this.props;
    !isLoaded && loadSubreddit(subredditName);
  }


  render() {
    const { subreddits, subredditName } = this.props;
    const subreddit = subreddits.list.find(_ => _.name === subredditName)

    return (
      subreddit ? (
        <Wrap>
          <SubredditTitle>{subreddit.title}</SubredditTitle>
          <Posts subreddit={subreddit} posts={subreddit.posts}/>
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

const Posts = ({ subreddit, posts }) =>
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

Subreddit.propTypes = {};

export default Subreddit;
