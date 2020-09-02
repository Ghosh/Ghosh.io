import React from 'react'
import PropTypes from 'prop-types'

import Text from '@stylekit/ui/Text'

const Para = ({ children }) => {
  return (
    <Text
      fontSize={['h500', 'h600']}
      lineHeight="1.6"
      color="var(--text-2-color)"
      m="0"
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
