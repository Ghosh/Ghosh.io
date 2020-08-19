import React from 'react'

import Box from '@stylekit/ui/Box'
import Text from '@stylekit/ui/Text'
import Spacer from '@stylekit/ui/Spacer'

import Gallery from './Gallery'

const Past = () => {
  return (
    <Box>
      <Text
        as="h2"
        fontWeight="500"
        fontSize={['h600', 'h700', 'h800']}
        lineHeight="1.4"
        m="0"
        color="var(--text-1-color)"
      >
        Past Work
      </Text>

      <Spacer mt={[3, 4]} />
      <Gallery />
    </Box>
  )
}

export default Past
