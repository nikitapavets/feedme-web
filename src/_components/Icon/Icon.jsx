import React from 'react';
import PropTypes from 'prop-types';

import theme from '../../lib/theme';

import Plus from './_svg/plus.svg';

class Icon extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      plus: { default: <Plus /> },
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