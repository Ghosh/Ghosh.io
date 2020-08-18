import React from 'react'

import Flex from '@stylekit/ui/Flex'
import Burger from '@stylekit/ui/Burger'
import Spacer from '@stylekit/ui/Spacer'

import Wrapper from 'components/Wrapper'

import Nav from './Nav'
import Ghosh from './Ghosh'
import Twitter from './Twitter'
import Toggle from './Toggle'

const Header = () => {
  return (
    <Wrapper>
      <Flex justifyContent="space-between" alignItems="center" height="140px" >
        {/* Left */}
        <Flex alignItems="center">
          <Ghosh />
          <Nav />
        </Flex>

        {/* Right */}
        <Flex alignItems="center" justifyContent="flex-end">
          <Twitter />
          <Spacer mx={2} />
          <Toggle />
          <Spacer mx={2} />
          <Burger />
        </Flex>
      </Flex>
    </Wrapper>
  )
}

Header.displayName = 'Header'

export default Header
