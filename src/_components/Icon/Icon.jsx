import React from 'react';
import PropTypes from 'prop-types';

import Plus from './_svg/plus.svg';
import Close from './_svg/close.svg';

class Icon extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      plus: { default: <Plus /> },
      close: { default: <Close /> },
    }
  }

  render() {
    return this.state[this.props.type][this.props.variant];
  }
}

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  variant: PropTypes.string,
};

Icon.defaultProps = {
  variant: 'default',
};

export default Icon;