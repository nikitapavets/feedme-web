import styled from 'styled-components';
import { Link } from 'react-router-dom';

import theme from '../../lib/theme';

export const Wrap = styled.div``;

export const PostTitle = styled.h1`
  margin: 0 0 15px 0;

  color: ${theme.brand};
`;

export const PostDescription = styled.div`
  margin-bottom: 16px;
  padding: 8px;

  background: ${theme.brandBg};
`;

export const CommentCard = styled.div`
  margin-bottom: 16px;
  margin-left: ${props => (props.level - 1) * 10}px;
  padding: 8px;

  background: ${theme.white};

  &:last-child {
    margin-bottom: 0;
  }
`;

CommentCard.defaultProps = {
  level: 1
};

export const CommentMessage = styled.div`
  border-bottom: 1px solid ${theme.brand};
`;

export const CommentDescription = styled.div`
  font-size: 0.8rem;
`;

export const CommentAuthor = styled.span``;

export const CommentDate = styled.span``;

export const CommentsTitle = styled.h2``;

export const CommentsContent = styled.div``;
