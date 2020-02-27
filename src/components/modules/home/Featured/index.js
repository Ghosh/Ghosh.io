import React from 'react'
import styled from 'styled-components'

import Text from '@core/Text'
import Box from '@core/Box'
import Container from '@core/Container'

import Breakpoints from '@breakpoints'

const Divider = styled.span`
  height: 1px;
  width: 100px;
  opacity: 0.6;
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
            fontWeight="500"
            mr={2}
            css="color: var(--text-tertiary); text-transform: uppercase;">
            Featured Project
          </Text>
          <Divider />
        </Box>
      </Container>
      <Box
        mt={[3, 4, 6]}
        css="background-color: var(--bg-darker)"
      >
        <Container>
          <Box
            py={['7', '8', '9', '11']}
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <Text
              fontSize={[3, 4, 5]}
              fontWeight="500"
              lineHeight={1.7}
              css="color: var(--text-primary)"
            >
              Building a design system for Cleartrip
            </Text>
            <Text
              mt={2}
              fontSize={[1, 2, 3]}
              fontWeight="400"
              lineHeight={1.6}
              css="color: var(--text-secondary)"
              width={['100%', '90%', '80%', '50%']}
            >
              Conceptualised the first version of a design system which now powers most of Cleartrip{`‘`}s desktop products
            </Text>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default Featured
