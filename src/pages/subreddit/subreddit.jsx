import React from 'react';

import lang from '../../lang/en'
import config from '../../config';

import {
  Wrap,
  Header,

  SubredditTitle,

  // Filters,
  // Filter,

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
  constructor(props) {
    super(props);

    this.state = {
      filters: [
        {
          name: lang.subreddit.filterNew,
          type: config.filter.FILTER_NEW,
        },
        {
          name: lang.subreddit.filterHot,
          type: config.filter.FILTER_HOT,
        },
        {
          name: lang.subreddit.filterControversial,
          type: config.filter.FILTER_CONTROVERSIAL,
        },
      ]
    };
  }

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
          <Header>
            <SubredditTitle>{subreddit.title}</SubredditTitle>
            {/* <Filters>
              {this.state.filters.map(filter => (
                <Filter key={filter.id}>{filter.name}</Filter>
              ))}
            </Filters> */}
          </Header>
          <Posts subreddit={subreddit} posts={subreddit.posts} />
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
        <PostDescriptionComments to={`/subreddits/${subreddit.name}/posts/${post.name}`}>
          {!post.isInitialLoading ?
            `${post.comments_count} ${lang.subreddit.comments}` :
            lang.subreddit.noLoadedComments}
        </PostDescriptionComments>
        <PostDescriptionAuthor>, {post.author}, </PostDescriptionAuthor>
        <PostDescriptionDate>{post.created_at}</PostDescriptionDate>
      </PostDescription>
    </PostCard>
  );

export default Subreddit;
