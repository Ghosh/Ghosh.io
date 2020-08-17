import React from 'react'

import Flex from '@stylekit/ui/Flex'
import Burger from '@stylekit/ui/Burger'

import Wrapper from 'components/Wrapper'

import Nav from './Nav'
import Ghosh from './Ghosh'
import Twitter from './Twitter'

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
          <Burger />
        </Flex>
      </Flex>
    </Wrapper>
  )
}

Header.displayName = 'Header'

export default Header
