import React from 'react'
import styled from 'styled-components'

import Box from '@core/Box'
import Container from '@core/Container'
import Nav from '@mods/common/Nav'

import Breakpoints from '@breakpoints'

import ThemeToggle from './ThemeToggle'

import { ReactComponent as Logo } from './icons/logo.svg'
import { ReactComponent as TwitterLogo } from './icons/twitter.svg'

const Ghosh = styled(Logo)`
  fill: var(--accent-1)
`

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
  margin-right: 12px;

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
    <Container>
      <Wrap>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Dynamic>
            <Ghosh />
            <Nav />
          </Dynamic>
          <Box display="flex">
            <TwitterWrapper href="https://twitter.com/_ighosh">
              <TwitterLogo width="18" fill="#00a3f9" />
              <Twitter>@_ighosh</Twitter>
            </TwitterWrapper>
            <ThemeToggle />
          </Box>
        </Box>
      </Wrap>
    </Container>
  )
}

export default Header
