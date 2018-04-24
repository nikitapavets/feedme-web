import styled from 'styled-components';

import theme from '../../lib/theme';

export const Wrap = styled.div`
  position: fixed;
  left: 0;
  top: 0;

  display: flex;

  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.25);
`;

export const Body = styled.div`
  position: relative;

  margin: auto 15px;
  padding: 8px;

  background: ${theme.white};

  width: 100%;
`;

export const Title = styled.h2`
  margin: 0;

  border-bottom: 1px solid ${theme.text};
`;

export const Content = styled.div``;

export const Description = styled.p``;

export const Actions = styled.div`
  margin-top: 15px;

  text-align: right;
`;

export const SendBtn = styled.button`
  ${theme.btn};
`;

export const Close = styled.button`
  ${theme.emptyBtn};

  position: absolute;
  right: 8px;
  top: 18px;

  width: 14px;
  height: 14px;
`;
