import React from 'react';
import PropTypes from 'prop-types';
import renderHTML from 'react-render-html';

import lang from '../../lang/en'

import {
  Wrap,

  PostTitle,
  PostDescription,

  CommentCard,
  CommentMessage,
  CommentDescription,
  CommentAuthor,
  CommentDate,

  CommentsTitle,
  CommentsContent,
} from './post.styled';

class Post extends React.Component {
  componentDidMount() {
    const { subredditLoad, postLoad, subredditName, postName, isLoadedSubreddit, isLoadedPost } = this.props;
    !isLoadedSubreddit && subredditLoad(subredditName).then(_ => postLoad(subredditName, postName));
    isLoadedSubreddit && !isLoadedPost && postLoad(subredditName, postName);
  }

  printCommentsGrid(gridRootNodes, level = 1) {
    let comments = [];

    gridRootNodes.forEach(rootNode => {
      comments = [
        ...comments,
        <Comment key={rootNode.id} comment={rootNode} level={level}/>
      ]
      if(rootNode.children.length) {
        comments = [
          ...comments,
          ...this.printCommentsGrid(rootNode.children, level + 1)
        ];
      } 
    });

    return comments;
  }

  printComments(gridRootNodes, level = 1) {
    const comments = this.printCommentsGrid(gridRootNodes, level);
    return comments.length ? comments : lang.post.noComments;
  }

  render() {
    const { post, isLoadedPost } = this.props;

    return (
      post ? (
        <Wrap>
          <PostTitle>{post.title}</PostTitle>
          {post.description && <PostDescription>{renderHTML(renderHTML(post.description))}</PostDescription>}
          <CommentsTitle>{lang.post.comments}</CommentsTitle>
          <CommentsContent>
            {isLoadedPost ? this.printComments(post.comments_grid) : <div>Loading...</div>}
          </CommentsContent>
        </Wrap> 
      ) : <div>Loading...</div>
    );
  }
}

const Comment = ({ comment, level }) =>
  <CommentCard level={level}>
    <CommentMessage>{renderHTML(comment.message)}</CommentMessage>
    <CommentDescription>
      <CommentAuthor>{comment.author}, </CommentAuthor>
      <CommentDate>{comment.created_at}</CommentDate>
    </CommentDescription>
  </CommentCard>


Post.propTypes = {};

export default Post;
