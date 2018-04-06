import styled, { injectGlobal } from 'styled-components';
import { normalize } from 'polished';

import theme from '../../lib/theme';

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
`;

export const Wrap = styled.div``;
