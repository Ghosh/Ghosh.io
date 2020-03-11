import React from 'react'
import styled from 'styled-components'

import Container from '@core/Container'
import Box from '@core/Box'
import Text from '@core/Text'
import Button from '@core/Button'

import Label from '../Featured/Label'

import Breakpoints from '@breakpoints'

const Wrapper = styled.div`
  /* margin-top: 100px; */
  /* margin-bottom: 100px; */
  display: grid;
  grid-gap: 24px;
  grid-template-areas: "item-1";

  ${ Breakpoints.greaterThan('tabletP')`
    grid-template-areas:
      "item-1 item-1 item-2 item-2"
      "item-1 item-1 item-3 item-4";
  ` };
`

const Item = styled(Box)`
  background-color: var(--bg-darker);
  /* display: flex;
  justify-content: center;
  align-items: center; */
`

const Item1 = styled(Item)`
  grid-area: item-1;
  height: 400px;
`

const Item2 = styled(Item)`
  display: none;

  ${ Breakpoints.greaterThan('tabletP')`
    grid-area: item-2;
    display:block;
  ` };
`

const Item3 = styled(Item)`
  display: none;

  ${ Breakpoints.greaterThan('tabletP')`
    grid-area: item-3;
    display:block;
  ` };
`

const Item4 = styled(Item)`
  display: none;

  ${ Breakpoints.greaterThan('tabletP')`
    grid-area: item-4;
    display:block;
  ` };
`

const Gallery = () => {
  return (
    <Container>
      <Box my="100px">
        <Text
          fontSize={[3, 4, 5]}
          fontWeight="500"
          lineHeight={1.7}
          css="color: var(--text-primary)"
          mb="3"
        >
        Cleartrip’s Progressive Web App — Perception of speed
        </Text>
        <Wrapper>
          <Item1>
          1
          </Item1>
          <Item2>
          2
          </Item2>
          <Item3>
          3
          </Item3>
          <Item4>
          4
          </Item4>
        </Wrapper>

        <Box display="flex">
          <Box
            mt={[2, 3, 4]}
            width={['100%', '90%', '80%', '60%']}
          >
            <Text
              fontSize={[1, 2, 3]}
              fontWeight="400"
              lineHeight={1.6}
              css="color: var(--text-secondary)"
            >
              Given that majority of India does not have decent data speeds on mobile networks, speed and performance become an integral part of  browsing experience
            </Text>
            <Button mt={[3, 4, 6]}>
              Read case study
            </Button>
          </Box>
          <Box
            display={['none', 'none', 'none', 'flex']}
            flexDirection="column"
            mt={[2, 3, 4]}
            css={{
              alignItems: 'flex-end',
              flex: '1'
            }}
          >
            <Label>Design Systems</Label>
            <Box mb="4"/>
            <Label>React Components</Label>
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

export default Gallery
