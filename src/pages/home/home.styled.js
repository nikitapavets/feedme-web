import styled from 'styled-components';
import { Link } from 'react-router-dom';

import theme from '../../lib/theme';

import wrapBg from '../../assets/images/main-bg.jpeg';
export const Wrap = styled.div`
  width: 100%;
  height: 100vh;

  background-image: url(${wrapBg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const Header = styled.header`
  position: fixed;
  left: 0;
  top: 0;

  width: 100%;

  padding: 5px 8px;

  background-color: rgba(0, 0, 0, 0.5);
`;

export const Title = styled.div`
  color: ${theme.white};

  font-size: 1.3rem;
  text-align: center;
`;

export const Content = styled.section`
  display: flex;

  height: 100%;

  padding: 15px;
`;

export const SearchWrap = styled.div`
  width: 100%;

  padding: 30px 10px;
  margin: auto;

  background-color: rgba(0, 0, 0, 0.5);
`;

export const SearchField = styled.input`
  width: 100%;

  padding: 15px 8px;
  border: 0;

  background-color: rgba(255, 255, 255, 0.75);
`;

export const SearchResults = styled.div``;

export const SearchResult = styled(Link)``;
