import React from 'react'
import styled from 'styled-components'

import Breakpoints from '@breakpoints'

import Flex from '@comps/core/Flex'
import Nav from '@mods/common/Nav'

import { ReactComponent as Logo } from './icons/logo.svg'
import { ReactComponent as TwitterLogo } from './icons/twitter.svg'

const Wrap = styled.header`
  padding-top: 20px;

  ${ Breakpoints.greaterThan('tabletP')`
      padding-top: 24px;
  ` };

  ${ Breakpoints.greaterThan('laptop')`
      padding-top: 30px;
  ` };

  ${ Breakpoints.greaterThan('desktop')`
      padding-top: 30px;
  ` };
`

const Dynamic = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;

  ${ Breakpoints.greaterThan('tabletL')`
    justify-content: start;
  ` };
`

const TwitterWrapper = styled.a`
  display: none;
  text-decoration: none;
  cursor: pointer;

    ${ Breakpoints.greaterThan('tabletL')`
      display: flex;
      align-items: center
  ` };
`

const Twitter = styled.span`
  margin-top: -2px;
  margin-left: 8px;
  font-size: 1.5rem;
  color: #00a3f9;
`

const Header = () => {
  return (
    <Wrap>
      <Flex middle between>
        <Dynamic>
          <Logo fill="#3366cc"/>
          <Nav />
        </Dynamic>
        <TwitterWrapper href="https://twitter.com/_ighosh">
          <TwitterLogo width="18" fill="#00a3f9" />
          <Twitter>@_ighosh</Twitter>
        </TwitterWrapper>
      </Flex>
    </Wrap>
  )
}

export default Header
