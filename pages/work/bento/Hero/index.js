import React from 'react'

import Text from '@stylekit/ui/Text'
import Box from '@stylekit/ui/Box'

import Wrapper from 'components/Wrapper'
import Header from 'components/Header'

const Hero = () => {
  return (
    <Box
      height="640px"
      bg="var(--bg-2)"
      style={{ borderBottom: 'solid 1px var(--border-1)' }}
    >
      <Wrapper>
        <Header />
        <Text
          as="h1"
          fontSize={['h500', 'h700', 'h900']}
          lineHeight={['2.9rem', '3.4rem', '4.8rem']}
          fontWeight="500"
          width={['100%', '90%', '75%', '50%']}
          mt={['6']}
          mb={['3']}
          color="var(--text-1-color)"
        >
          Establishing a design system for Cleartrip
        </Text>
        <Text
          as="h2"
          fontSize={['h600', 'h700', '2.5rem']}
          lineHeight={['2.9rem', '3.4rem', '4rem']}
          fontWeight="300"
          width={['100%', '90%', '75%', '50%']}
          m="0"
          color="var(--text-2-color)"
        >
          I spent two years at Cleartrip setting up the design systems team
        </Text>
      </Wrapper>
    </Box>
  )
}

export default Hero
