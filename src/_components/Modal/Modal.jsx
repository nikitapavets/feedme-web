import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm, Form } from 'redux-form';

import Input from '../Input/Input';
import Icon from '../Icon/Icon';

import lang from '../../lang/en';

import {
  Wrap,
  Body,
  Title,
  Content,
  Description,
  Actions,
  SendBtn,
  Close,
} from './Modal.styled';

class Modal extends React.Component {

  render() {
    const {
      title,
      description,
      onClose,
      onSend,
      formModal,
    } = this.props;

    return (
      <Wrap>
        <Body>
          <Form onSubmit={event => { onSend(event, formModal.values ? formModal.values.data : ""); }}>
            <Title>{title}</Title>
            <Content>
              {description && <Description>{description}</Description>}
              <Field
                name="data"
                component={Input}
                type="text"
              />
            </Content>
            <Actions>
              <SendBtn>{lang.general.send}</SendBtn>
            </Actions>
            <Close onClick={onClose}>
              <Icon type='close' />
            </Close>
          </Form>
        </Body>
      </Wrap>
    );
  }
}

Modal.defaultProps = {
  title: 'Alert',
};

Modal.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  content: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  onSend: PropTypes.func.isRequired,
};

export default reduxForm({ form: 'modal' })(Modal);
