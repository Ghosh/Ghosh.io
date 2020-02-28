import React from 'react'
import styled from 'styled-components'

import Breakpoints from '@breakpoints'

import Text from '@core/Text'
import Box from '@core/Box'
import Button from '@core/Button'
import Container from '@core/Container'

import Label from './Label'

// TODO: Copy rendered colors and change to z-index stack
const Circle = styled(Box)`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: var(--bg-contrast-light);
`

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
        py={['7', '8']}
        css="background-color: var(--bg-darker)"
      >
        <Container>

          <Box display={['none', 'none', 'block']}>
            <Text
              fontSize={['24px', '38px', '48px']}
              fontWeight="800"
              lineHeight={1}
              css="color: var(--bg-contrast-light);"
            >
                Aa
            </Text>
            <Box display="flex" mt="8px">
              <Circle css="opacity: 1"/>
              <Circle ml="-20px" css="opacity: 0.8;"/>
              <Circle ml="-20px" css="opacity: 0.6;" />
              <Circle ml="-20px" css="opacity: 0.5;" />
              <Circle ml="-20px" css="opacity: 0.4;" />
              <Circle ml="-20px" css="opacity: 0.3;" />
            </Box>
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-start"
            mt={[7, 8, 9, 10]}
          >
            <Text
              fontSize={[3, 4, 5]}
              fontWeight="500"
              lineHeight={1.7}
              css="color: var(--text-primary)"
            >
              Building a design system from scratch
            </Text>
            <Text
              mt={[2, 3]}
              fontSize={[1, 2, 3]}
              fontWeight="400"
              lineHeight={1.6}
              css="color: var(--text-secondary)"
              width={['100%', '90%', '80%', '50%']}
            >
              Conceptualised and built the first version of a design system which now powers Cleartrip{`‘`}s desktop products
            </Text>
            <Button mt={[3, 4, 6]}>
              Read case study
            </Button>

            <Box
              display={['none', 'none', 'flex']}
              mt={[4, 7, 9, 10]}
            >
              <Label>Design</Label>
              <Label>Code</Label>
            </Box>
          </Box>

        </Container>
      </Box>
    </>
  )
}

export default Featured
