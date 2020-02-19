import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Breakpoints from '@src/styles/breakpoints'

const MaxWidth = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: auto;
  padding: 0 16px;

  ${Breakpoints.greaterThan("laptop")`
    padding: 0 32px;
  `};
`

const Container = ({ children }) => {
  return (
    <MaxWidth>{children}</MaxWidth>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired
}


export default Container;