import React from 'react';
import ReactLoading from 'react-loading';
import PropTypes from 'prop-types';

const Loading = ({ type, color }) => (
  <ReactLoading type={type} color={color} height="667" width="375" />
);

Loading.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
};

Loading.defaultProps = {
  type: 'bubbles',
  color: '#ffffff',
};

export default Loading;
