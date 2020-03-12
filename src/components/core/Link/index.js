import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Text from '@core/Text'

const BaseLink = styled(Text)`
  text-decoration: none;
  color: var(--accent-1);

  &:hover {
    text-decoration: underline;
  }
`

const Link = ({ children, ...rest }) => {
  return (
    <BaseLink as="a" {...rest}>
      {children}
    </BaseLink>
  )
}

Link.propTypes = {
  children: PropTypes.node.isRequired
}

export default Link
