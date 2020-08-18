import React from 'react'

import Box from '@stylekit/ui/Box'
import Flex from '@stylekit/ui/Flex'
import Spacer from '@stylekit/ui/Spacer'

import Wrapper from 'components/Wrapper'

import Nav from './Nav'
import Ghosh from './Ghosh'
import Twitter from './Twitter'
import Toggle from './Toggle'

const Header = () => {
  return (
    <Wrapper>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        height={['80px', '100px', '140px']}
      >
        {/* Left */}
        <Flex alignItems="center">
          <Ghosh />
          <Spacer ml={['0px', '35px', '50px']} />
          <Box display={['none', 'none', 'block']}>
            <Nav />
          </Box>
        </Flex>

        {/* Right */}
        <Flex alignItems="center" justifyContent="flex-end">
          <Twitter />
          <Spacer mx={3} />
          <Toggle />
        </Flex>
      </Flex>

      <Box
        mt={['-5px', '-10px']}
        display={['block', 'block', 'none']}
      >
        <Nav />
      </Box>
    </Wrapper>
  )
}

Header.displayName = 'Header'

export default Header
