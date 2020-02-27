import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space } from 'styled-system'

import Breakpoints from '@breakpoints'

const BaseButton = styled.button`
  ${ space };
  height: 32px;
  border-radius: 4px;
  display: block;
  border: none;
  font-size: 12px;
  padding: 0 12px;
  font-weight: 500;
  color: var(--text-button);
  background-color: var(--accent-1);
  cursor: pointer;

  ${ Breakpoints.greaterThan('mobileL')`
      height: 40px;
      font-size: 14px;
      padding: 0 16px;
  ` };

  &:hover {
    opacity: 90%;
  }

  &:active {
    opacity: 95%;
  }
`

const Button = ({ children, ...rest }) => {
  return (
    <BaseButton {...rest} >
      {children}
    </BaseButton>
  )
}

Button.propTypes = {
  children: PropTypes.node
}

export default Button
