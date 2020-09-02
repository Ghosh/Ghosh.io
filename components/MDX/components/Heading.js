import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { ThemeContext } from 'styled-components'

import Text from '@stylekit/ui/Text'

const Heading = ({ children }) => {
  return <h1>children</h1>
}

const H2 = ({ children }) => {
  const theme = useContext(ThemeContext)

  return (
    <Text
      as="h2"
      fontSize={['h500', 'h700', 'h800']}
      lineHeight={['2.9rem', '3.4rem', '4.8rem']}
      fontWeight="500"
      maxWidth={theme.layout.textWidth}
      margin="auto"
      mt={['5']}
      mb={['4']}
      color="var(--text-1-color)"
    >
      {children}
    </Text>
  )
}

Heading.propTypes = {
  children: PropTypes.node.isRequired
}
H2.propTypes = {
  children: PropTypes.node.isRequired
}

Heading.H2 = H2

export default Heading
