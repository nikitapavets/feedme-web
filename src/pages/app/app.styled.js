import styled, { injectGlobal } from 'styled-components';
import { normalize } from 'polished';

import theme from '../../lib/theme';

import wrapBg from '../../assets/images/main-bg.png';

injectGlobal`
  ${normalize()}

  * {
    box-sizing: border-box;

    -webkit-overflow-scrolling: touch;
  }
  
  html {
    font-size: 100%;
  }

  body {
    margin: 0;
    padding: 0;

    font-family: 'Poor Story', 'sans-serif';
    color: ${theme.text};
    font-size: 1rem;
    line-height: 1.5;
    word-break: break-word;

    background: ${theme.white};
  }

  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px ${theme.grey_light} inset;
  }

  a, 
  a:visited,
  a:active {
    color: ${theme.brand};
    text-decoration: none;
  }

`;

export const Wrap = styled.div`
  width: 100%;

  padding: 47px 8px 8px;

  background-image: url(${wrapBg});
  background-repeat: repeat;
`;

export const Header = styled.header`
  position: fixed;
  left: 0;
  top: 0;

  width: 100%;

  padding: 5px 8px;

  background-color: ${theme.brand};
`;

export const Title = styled.div`
  color: ${theme.white};

  font-size: 1.3rem;
  text-align: center;
`;

export const Content = styled.div`
  height: 100%;

  padding: 8px;

  background-color: rgba(255, 255, 255, 0.75);
`;
