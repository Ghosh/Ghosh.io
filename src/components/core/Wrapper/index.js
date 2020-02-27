import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Breakpoints from '@breakpoints'

const SiteWrapper = styled.div`

  ${ Breakpoints.greaterThan('desktop')`
    max-width: ${ props => props.theme.wrappedWidth };
    margin: auto;
    box-sizing: border-box;
    min-height: 100vh;
    padding: 40px 0;
    box-shadow: rgba(8, 11, 14, 0.06) 0px 0px 1px 0px, rgba(8, 11, 14, 0.1) 0px 16px 16px -1px;
    background-color: var(--bg-regular);
    /* border-radius: 8px; */
    /* margin-top: 40px; */
  ` };
`

const Wrapper = ({ children }) => {
  return (
    <SiteWrapper>
      {children}
    </SiteWrapper>
  )
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired
}

export default Wrapper
