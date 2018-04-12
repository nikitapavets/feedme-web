import styled from 'styled-components';
import { Link } from 'react-router-dom';

import theme from '../../lib/theme';

export const Wrap = styled.section`
  display: flex;

  height: 100%;

  padding: 15px;
`;

export const SearchWrap = styled.div`
  width: 100%;

  padding: 15px;
  margin: auto;
`;

export const SearchField = styled.input`
  width: 100%;

  padding: 15px 8px;
  border: 0;

  background-color: rgba(255, 255, 255, 0.75);
`;

export const SearchResults = styled.div``;

export const SearchTitle = styled.h1`
  margin: 0;

  color: ${theme.white};
`;

export const SearchResult = styled(Link)`
  color: ${theme.white};

  margin-right: 15px;

  &:last-child {
    margin-right: 0;
  }
`;
