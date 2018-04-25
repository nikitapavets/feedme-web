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

  LoadMore,
  LoadMoreButton,
} from './subreddit.styled';

class Subreddit extends React.Component {
  componentDidMount() {
    const { subreddits, loadSubreddit, name, isLoaded } = this.props;
    !isLoaded && loadSubreddit(name);
  }


  render() {
    const { subreddits, name } = this.props;
    const subreddit = subreddits.list.find(_ => _.name === name)

    return (
      subreddit ? (
        <Wrap>
          <SubredditTitle>{subreddit.title}</SubredditTitle>
          <Posts posts={subreddit.posts}/>
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

const Posts = ({ posts }) =>
  posts.map(post =>
    <PostCard key={post.id}>
      <PostTitle>
        <PostTitleLink to={post.url} target='_blank'>{post.title}</PostTitleLink>
      </PostTitle>
        <PostDescription>
          <PostDescriptionAuthor>{post.author}, </PostDescriptionAuthor>
          <PostDescriptionDate>{post.created_at}</PostDescriptionDate>
        </PostDescription>
    </PostCard>
  );

Subreddit.propTypes = {};

export default Subreddit;
