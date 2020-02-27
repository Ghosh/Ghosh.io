import React from 'react'
import styled from 'styled-components'

import Text from '@core/Text'
import Box from '@core/Box'
import Container from '@core/Container'

import Breakpoints from '@breakpoints'

const Divider = styled.span`
  height: 1px;
  width: 100px;
  background-color: var(--text-tertiary);

  ${ Breakpoints.greaterThan('tabletL')`
      width: 200px;
  ` };
`

const Featured = () => {
  return (
    <>
      <Container >
        <Box display="flex" alignItems="center" mt={[8, 9, 10]}>
          <Text
            fontSize={['10px', '12px']}
            letterSpacing={2}
            mr={2}
            css="color: var(--text-tertiary); text-transform: uppercase;">
            Featured Project
          </Text>
          <Divider />
        </Box>
      </Container>
      <div>
      Hello
      </div>
    </>
  )
}

export default Featured
