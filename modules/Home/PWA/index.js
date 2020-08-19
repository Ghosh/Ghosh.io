import React from 'react'

import Box from '@stylekit/ui/Box'
import Flex from '@stylekit/ui/Flex'
import Text from '@stylekit/ui/Text'
import Spacer from '@stylekit/ui/Spacer'

import Icon from 'components/Icon'

import Gallery from './Gallery'

import Cleartrip from './svg/cleartrip.svg'

const PWA = () => {
  return (
    <Box py={[4, 4, 5]}>
      <Spacer my={[1, 2, 4, 5]} />
      <Text
        as="h2"
        fontWight="400"
        fontSize={['h600', 'h700', 'h800']}
        lineHeight="1.4"
        m="0"
        color="var(--text-1-color)"
      >
        Cleartrip PWA — Designing for Speed
      </Text>

      <Spacer mt={[3, 4]} />
      <Gallery />
      <Spacer mb={[3, 4]} />

      <Flex justifyContent="space-between">
        <Box width={['100%', '100%', '65%']}>
          <Text
            fontSize={['h500', 'h600']}
            lineHeight="1.6"
            color="var(--text-2-color)"
            m="0"
          >
            Given that majority of India does not have decent data speeds on mobile networks, speed and performance become an integral part of  browsing experience
          </Text>
          <Spacer mb={[3]} />
          <Flex alignItems="center">
            <Text
              fontSize={['h400', 'h500']}
              color="cyan"
              m="0"
            >
              Read case study
            </Text>
            <Box mt="6px" ml="6px">
              <Icon
                label="right"
                width="20px"
                stroke="cyan"
              />
            </Box>
          </Flex>
        </Box>

        <Box display={['none', 'none', 'block']}>
          <Cleartrip width="100px" />
        </Box>
      </Flex>
    </Box>
  )
}

export default PWA
