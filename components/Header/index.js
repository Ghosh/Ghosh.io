import React from 'react'

import Wrapper from 'components/Wrapper'
import Box from '@stylekit/ui/Box'
import Flex from '@stylekit/ui/Flex'

const Header = () => {
  return (
    <Wrapper>
      <Box height="80px" width="100%" vCentered>
        <Flex justifyContent="between">
          <Flex>
            <div>Logo</div>
            <div>Nav</div>
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
