import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Breakpoints from '@breakpoints'

const XLWrapper = styled.div`


  ${ Breakpoints.greaterThan('desktop')`
    max-width: ${ props => props.theme.wrappedWidth };
    margin: auto;
    background-color: white;
    box-sizing: border-box;
    min-height: 100vh;
    border-radius: 8px;
    margin-top: 40px;
    padding: 40px;
  ` };
`

const Wrapper = ({ children }) => {
  return (
    <XLWrapper>
      {children}
    </XLWrapper>
  )
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired
}

export default Wrapper
