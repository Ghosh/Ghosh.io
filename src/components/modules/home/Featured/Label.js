import React from 'react'
import PropTypes from 'prop-types'

import Box from '@core/Box'
import Text from '@core/Text'

const Label = ({ children }) => {
  return (
    <Box display="flex">
      <Text
        fontSize="1"
        css="color: var(--text-tertiary)"
      >
        {children}
      </Text>
    </Box>
  )
}

Label.propTypes = {
  children: PropTypes.node
}

export default Label
