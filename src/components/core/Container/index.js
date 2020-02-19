import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Breakpoints from '@breakpoints'

const MaxWidth = styled.div`
  max-width: ${ props => props.theme.maxWidth };
  margin: auto;
  padding: 0 16px;

  ${ Breakpoints.greaterThan('laptop')`
    padding: 0 32px;
  ` };

  ${ Breakpoints.greaterThan('desktop')`
    padding: 0;
  ` };
`

// TODO: Investgate if Wrapper and Container can be the same component
// TODO: Add Stylelint
const Container = ({ children }) => {
  return (
    <MaxWidth>{children}</MaxWidth>
  )
}

Container.propTypes = {
  children: PropTypes.node.isRequired
}

export default Container
