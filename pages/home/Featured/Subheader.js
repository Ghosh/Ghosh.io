import React from 'react'
import styled from 'styled-components'

import Wrapper from 'components/Wrapper'
import Text from '@stylekit/ui/Text'
import Flex from '@stylekit/ui/Flex'

const Line = styled.span`
  display: inline-block;
  width: 100px;
  height: 1px;
  background-color: var(--text-3-color);
`

const Subheader = () => {
  return (
    <Wrapper>
      <Flex
        alignItems="center"
        mb={[3, 3, 3, 4]}
      >
        <Text
          fontSize="h300"
          color="var(--text-3-color)"
          m="0"
          mr={2}
          css={`
          text-transform: uppercase;
          letter-spacing: 1px;
        `}
        >
          Featured project
        </Text>
        <Line />
      </Flex>
    </Wrapper>
  )
}

export default Subheader
