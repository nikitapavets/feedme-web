import React from 'react';
import PropTypes from 'prop-types';

import {
  Wrap,
  InputText,
} from './Input.styled';

const Input = ({
  input,
  label,
  type,
  required,
}) => (
    <Wrap>
      <InputText
        type={type}
        {...input}

        required={required}
      />
    </Wrap>
  );

Input.defaultProps = {
  type: 'text',
  required: false,
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  required: PropTypes.bool,
  input: PropTypes.shape().isRequired,
};

export default Input;
