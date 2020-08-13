import React from 'react'
import styled from 'styled-components'

import Box from '@stylekit/ui/Box'
import Flex from '@stylekit/ui/Flex'

import Wrapper from 'components/Wrapper'

import Nav from './Nav'
import Logo from './svg/logo.svg'

/** @TODO: Add twiter logo */
const Twitter = styled.a`
  color: #3A73B5;
  text-decoration: none;
`

const Header = () => {
  return (
    <Wrapper>
      <Box height="140px" width="100%" vCentered>
        <Flex justifyContent="between">
          <Flex>
            <Logo width="65" />
            <Nav />
          </Flex>

          <Flex justifyContent="end" alignItems="center">
            <Twitter>@_ighosh</Twitter>
          </Flex>
        </Flex>
      </Box>
    </Wrapper>
  )
}

export default Header
