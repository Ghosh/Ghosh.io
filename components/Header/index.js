import React from 'react'

import Box from '@stylekit/ui/Box'
import Flex from '@stylekit/ui/Flex'

import Wrapper from 'components/Wrapper'

import Nav from './Nav'
import Logo from './svg/logo.svg'

const Header = () => {
  return (
    <Wrapper>
      <Box height="140px" width="100%" vCentered>
        <Flex justifyContent="between">
          <Flex>
            <Logo width="65" />
            <Nav />
          </Flex>

          <Flex.Box alignItems="end">
            <div>Twitter</div>
          </Flex.Box>
        </Flex>
      </Box>
    </Wrapper>
  )
}

export default Header
