import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon/Icon';

import {
  Wrap,
  Body,
  Title,
  Content,
  Close,
} from './Modal.styled';

const Modal = ({
  title,
  content,
  onClose,
}) => (
    <Wrap>
      <Body>
      <Title>{title}</Title>
      <Content>{content}</Content>
      <Close onClick={onClose}>
        <Icon type='close' />
      </Close>
      </Body>
    </Wrap>
  );

Modal.defaultProps = {
  title: 'Alert',
};

Modal.propTypes = {
  title: PropTypes.string,
  content: PropTypes.shape().isRequired,
};

export default Modal;
