import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const SiteContainer = styled.div`
  max-width: ${ (props) => props.theme.layout.outerWidth };
  margin: auto;
  box-sizing: border-box;
  min-height: 100vh;
  height: 100%;
  box-shadow: rgba(8, 11, 14, 0.06) 0px 0px 1px 0px,
    rgba(8, 11, 14, 0.1) 0px 16px 16px -1px;
  background-color: var(--wrapper-bg);
`

const Container = ({ children }) => {
  return (
    <SiteContainer>
      {children}
    </SiteContainer>
  )
}

Container.propTypes = {
  children: PropTypes.node.isRequired
}

export default Container
