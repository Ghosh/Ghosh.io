import React from 'react'
import styled from 'styled-components'

import Text from '@stylekit/ui/Text'
import Box from '@stylekit/ui/Box'

import Breakpoints from '@/breakpoints'

import Wrapper from 'components/Wrapper'
import Header from 'components/Header'
import Image from 'components/Image'

const Media = styled.div`
  margin: auto;
  margin-top: 40px;

  ${ Breakpoints.greaterThan('tabletL')`
      margin-top: 0;
      position: absolute;
      width: 707px;
      right: -220px;
      top: 150px;
  ` };

  ${ Breakpoints.greaterThan('1150px')`
      right: -180px;
  ` };

  ${ Breakpoints.greaterThan('1300px')`
      right: -120px;
  ` };

  ${ Breakpoints.greaterThan('desktop')`
      right: -100px;
  ` };
`

const Hero = () => {
  return (
    <Box
      height={['450px', '640px']}
      bg="var(--bg-2)"
      borderBottom="solid 1px var(--border-1)"
      position="relative"
      overflow="hidden"
    >
      <Wrapper>
        <Header />
        <Text
          as="h1"
          fontSize={['h600', 'h700', 'h900']}
          lineHeight={['2.9rem', '3.4rem', '4.8rem']}
          fontWeight="500"
          width={['100%', '90%', '75%', '50%']}
          mt={['5', '5', '5', '6']}
          mb={['3']}
          color="var(--text-1-color)"
        >
          Designing for speed - Cleartrip PWA
        </Text>
        <Text
          as="h2"
          fontSize={['h500', 'h600', '2.5rem']}
          lineHeight={['2.9rem', '3.4rem', '4rem']}
          fontWeight="300"
          width={['100%', '90%', '75%', '50%']}
          m="0"
          color="var(--text-2-color)"
        >
          Speed is an important aspect of a Progressive Web App. This is a case study of a few design tactics, improved perceived speed
        </Text>

        <Media>
          <Image
            strat="eager"
            base="/images/cases/pwa/"
            name="pwa.png"
            alt="Bento documentation site"
            width="100%"
            height="auto"
          />
        </Media>

      </Wrapper>
    </Box>
  )
}

export default Hero
