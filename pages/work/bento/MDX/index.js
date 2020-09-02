import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  max-width: 600px;
  margin: auto;
`

const MDX = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

MDX.propTypes = {
  children: PropTypes.node.isRequired
}

export default MDX
