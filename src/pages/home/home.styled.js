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
  position: relative;

  margin: 8px 0;
  padding-right: 35px;
`;

export const SearchAdd = styled.button`
  position: absolute;
  top: 0;
  right: 0;

  width: 28px;
  height: 28px;

  padding: 0;
  border: 0;

  background: none;
  cursor: pointer;
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
