import React from 'react'
import styled from 'styled-components'

import Flex from '@stylekit/ui/Flex'
import Burger from '@stylekit/ui/Burger'

import Wrapper from 'components/Wrapper'

import Nav from './Nav'
import Logo from './svg/logo.svg'

/** @TODO: Add twiter logo */
const Twitter = styled.a`
  color: #3A73B5;
  text-decoration: none;
  margin-right: 24px;
`

const Header = () => {
  return (
    <Wrapper>
      <Flex justifyContent="between" alignItems="center" height="140px">
        {/* Logo */}
        <Flex alignItems="center">
          <Logo width="65" />
          <Nav />
        </Flex>

        {/* Nav */}
        <Flex alignItems="center" justifyContent="end">
          <Twitter>@_ighosh</Twitter>
          <Burger />
        </Flex>
      </Flex>
    </Wrapper>
  )
}

export default Header
