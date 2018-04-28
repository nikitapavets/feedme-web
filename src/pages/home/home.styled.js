import styled from 'styled-components';
import { Link } from 'react-router-dom';

import theme from '../../lib/theme';

export const Wrap = styled.section`
  width: 100%;
`;

export const AboutBlock = styled.section`
  margin-bottom: 15px;
  padding: 8px;

  background: ${theme.brandBg};
`;

export const AboutTitle = styled.h2`
  margin: 0;
`;

export const AboutDescription = styled.div``;

export const SearchBlock = styled.div`
  width: 100%;
`;

export const SearchFieldWrap = styled.div`
  position: relative;

  height: 28px;

  margin: 8px 0;
  padding-right: 35px;
`;

export const SearchAdd = styled.button`
  position: absolute;
  top: 0;

  width: 28px;
  height: 28px;

  padding: 0;
  border: 0;

  background: none;
  cursor: pointer;

  ${props => (props.isVisibleSearchField ? 'right: 0;' : 'left: 0;')};
`;

export const SearchResults = styled.div``;

export const SearchTitle = styled.h2`
  margin: 0;

  color: ${theme.brand};
`;

export const SearchResult = styled(Link)`
  margin-right: 15px;

  &:last-child {
    margin-right: 0;
  }
`;
