import React from 'react'

import { ReactComponent as Logo } from './icons/logo.svg'

import Breakpoints from '@breakpoints'

import Flex from '@comps/core/Flex'
import styled from 'styled-components'

const Wrap = styled.header`
  margin-top: 20px;

  ${ Breakpoints.greaterThan('tabletL')`
    margin-top: 40px;
  ` };

  ${ Breakpoints.greaterThan('laptop')`
    margin-top: 80px;
  ` };
`

const Header = () => {
  return (
    <Wrap>
      <Flex middle between>
        <Flex middle>
          <Logo />
          <p>Nav here</p>
        </Flex>

        <p>Twitter</p>
      </Flex>
    </Wrap>
  )
}

export default Header
