import React from 'react'
import styled from 'styled-components'

import Breakpoints from '@breakpoints'

import Flex from '@comps/core/Flex'
import Nav from '@mods/common/Nav'

import { ReactComponent as Logo } from './icons/logo.svg'

const Wrap = styled.header`
  padding-top: 20px;

  ${ Breakpoints.greaterThan('laptop')`
    margin-top: 40px;
  ` };

  ${ Breakpoints.greaterThan('desktop')`
      margin-top: 0;
      padding-top: 0;
  ` };
`

const Twitter = styled.p`
  font-size: 1.5rem;
  color: #1da1f2;
  display: none;

    ${ Breakpoints.greaterThan('tabletL')`
      display: inline-block;
  ` };
`

const Header = () => {
  return (
    <Wrap>
      <Flex middle between>
        <Flex middle>
          <Logo fill="#3366cc"/>
          <Nav />
        </Flex>
        <Twitter>@_ighosh</Twitter>
      </Flex>
    </Wrap>
  )
}

export default Header
