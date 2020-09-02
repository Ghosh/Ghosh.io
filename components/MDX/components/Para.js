import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { ThemeContext } from 'styled-components'

import Text from '@stylekit/ui/Text'

const Para = ({ children }) => {
  const theme = useContext(ThemeContext)

  return (
    <Text
      fontSize={['h500', 'h600']}
      lineHeight="1.6"
      color="var(--text-2-color)"
      maxWidth={theme.layout.textWidth}
      margin="auto"
      my="0"
      mb={[4]}
    >
      {children}
    </Text>
  )
}

Para.propTypes = {
  children: PropTypes.node.isRequired
}

export default Para
