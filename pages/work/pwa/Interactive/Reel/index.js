import React from 'react'
import PropTypes from 'prop-types'
import Box from '@stylekit/ui/Box'

import Overlay from '../Overlay'

const Reel = ({ children }) => {
  return (
    <Box p="40px" borderRadius={4} bg="transparent">
      <Box width={['100%', '375px']} position="relative">
        <Overlay />
        {children}
      </Box>
    </Box>
  )
}

Reel.propTypes = {
  children: PropTypes.node
}

export default Reel
