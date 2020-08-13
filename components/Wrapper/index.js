import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const BaseWrapper = styled.div`
  margin: auto;
  max-width: 960px;
`

/**
 * Renders a <Wrapper /> component
 * @param {object} props
 */
const Wrapper = ({ children }) => {
  return <BaseWrapper>{children}</BaseWrapper>
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired
}

export default Wrapper
