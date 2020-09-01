import React from 'react'
import styled from 'styled-components'
import Flex from '@stylekit/ui/Flex'

import TwitterLogo from './svg/twitter.svg'

import Breakpoints from '@/breakpoints'

const Link = styled(Flex)`
  box-sizing: border-box;
  text-decoration: none;
  margin-right: -24px;

  ${ Breakpoints.greaterThan('tabletL')`
    margin-right: 0;
  ` };
`

const Handle = styled.span`
  box-sizing: border-box;
  color: #3A73B5;
  text-decoration: none;
  margin-left: 8px;
  text-decoration: none;
  font-size: 1.6rem;
`

const Icon = styled(TwitterLogo)`
  fill: #3A73B5;
  width: 18px;
  margin-bottom: -4px
`

const Twitter = () => {
  return (
    <Link
      alignItems="center"
      as="a"
      href="google.com"
    >
      <Icon />
      <Handle>@_ighosh</Handle>
    </Link>
  )
}

export default Twitter