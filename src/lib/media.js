import { css } from 'styled-components';

import config from '../config';

// iterate through the sizes and create a media template
export default Object.keys(config.screens).reduce((accumulator, label) => {
  const newAccumulator = accumulator;

  newAccumulator[label] = (...args) => css`
    @media (min-width: ${config.screens[label]}px) {
      ${css(...args)};
    }
  `;
  return newAccumulator;
}, {});
