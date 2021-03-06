import styled from 'styled-components';
import { Link } from 'react-router-dom';

import theme from '../../lib/theme';
import media from '../../lib/media';

export const Wrap = styled.div``;

export const Header = styled.header`
  margin: 0 0 15px 0;

  ${media.tablet`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `};
`;

export const SubredditTitle = styled.h1`
  margin: 0;

  color: ${theme.brand};
`;

export const Filters = styled.div``;

export const Filter = styled.span`
  margin-right: 10px;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const PostCard = styled.div`
  margin-bottom: 16px;
  padding: 8px;

  background: ${theme.white};

  &:last-child {
    margin-bottom: 0;
  }
`;

export const PostTitle = styled.h3`
  font-weight: normal;

  margin: 0;
  border-bottom: 1px solid ${theme.brand};
`;

export const PostTitleLink = styled(Link)``;

export const PostDescription = styled.div`
  font-size: 0.8rem;
`;

export const PostDescriptionAuthor = styled.span``;

export const PostDescriptionDate = styled.span``;

export const PostDescriptionComments = styled(Link)``;

export const LoadMore = styled.div`
  text-align: center;
`;

export const LoadMoreButton = styled.button`
  padding: 5px 8px;
  border: 1px solid ${theme.brand};

  color: ${theme.brand};
  background: ${theme.white};

  &:hover {
    cursor: pointer;
  }
`;
