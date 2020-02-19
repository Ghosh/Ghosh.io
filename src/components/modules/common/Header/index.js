import React from 'react'
import styled from 'styled-components'

import Breakpoints from '@breakpoints'

import Flex from '@comps/core/Flex'
import Nav from '@mods/common/Nav'

import { ReactComponent as Logo } from './icons/logo.svg'

const Wrap = styled.header`
  padding-top: 20px;

  ${ Breakpoints.greaterThan('tabletP')`
      padding-top: 24px;
  ` };

  ${ Breakpoints.greaterThan('laptop')`
      padding-top: 30px;
  ` };

  ${ Breakpoints.greaterThan('desktop')`
      padding-top: 40px;
  ` };
`

const Twitter = styled.p`
  font-size: 1.5rem;
  color: #00a3f9;
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
