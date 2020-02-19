import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const MaxWidth = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: auto;
  padding: 0 16px;
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