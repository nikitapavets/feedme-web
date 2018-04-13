import styled from 'styled-components';
import { Link } from 'react-router-dom';

import theme from '../../lib/theme';

export const Wrap = styled.section`
  display: flex;

  width: 100%;
`;

export const SearchBlock = styled.div`
  width: 100%;
`;

export const SearchFieldWrap = styled.div`
  margin: 8px 0;
`;

export const SearchResults = styled.div``;

export const SearchTitle = styled.h1`
  margin: 0;

  color: ${theme.brand};
`;

export const SearchResult = styled(Link)`
  margin-right: 15px;

  &:last-child {
    margin-right: 0;
  }
`;
