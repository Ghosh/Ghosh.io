import React from 'react'

import Box from '@stylekit/ui/Box'
import Text from '@stylekit/ui/Text'
import Flex from '@stylekit/ui/Flex'
import Spacer from '@stylekit/ui/Spacer'

import Icon from 'components/Icon'

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
        Passion projects
      </Text>

      <Spacer mt={[3, 4]} />
      <Gallery />
      <Spacer mb={[3, 4]} />

      <Box width={['100%', '100%', '65%']}>
        <Text
          fontSize={['h500', 'h600']}
          lineHeight="1.6"
          color="var(--text-2-color)"
          m="0"
        >
          I love passion projects. It gives me a chance to flex creatively outside the confines of my daily work. Here are some of my favourites:-
        </Text>
        <Spacer mb={[3]} />
        <Flex alignItems="center">
          <Text fontSize={['h500', 'h600']} color="var(--accent-1)" m="0">
            See all projects
          </Text>
          <Box mt="6px" ml="6px">
            <Icon label="right" width="20px" stroke="var(--accent-1)" />
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}

export default Past
