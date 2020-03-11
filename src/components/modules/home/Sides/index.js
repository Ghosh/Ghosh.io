import React from 'react'
import styled from 'styled-components'

import Box from '@core/Box'
import Text from '@core/Text'
import Button from '@core/Button'
import Container from '@core/Container'

import Breakpoints from '@breakpoints'

const Wrapper = styled(Box)`
  /* margin-top: 100px; */
  /* margin-bottom: 100px; */
  display: grid;
  grid-gap: 24px;
  grid-template-areas:
    "item-1"
    "item-2"
    "item-3"
  ;

  ${ Breakpoints.greaterThan('tabletP')`
    grid-template-areas:
      "item-1 item-2 item-3"
  ` };
`

const Item = styled(Box)`
  background-color: var(--bg-darker);
  border-radius: 4px;
  height: 160px;

  ${ Breakpoints.greaterThan('mobileL')`
      height: 200px;
  ` };

  ${ Breakpoints.greaterThan('tabletP')`
      height: 400px;
  ` };
`

const Item1 = styled(Item)`
  grid-area: item-1;
`

const Item2 = styled(Item)`
  grid-area: item-2;
`

const Item3 = styled(Item)`
  grid-area: item-3;
`

const Sides = () => {
  return (
    <Container mb="400px">
      <Text
        fontSize={[3, 4, 5]}
        fontWeight="500"
        lineHeight={1.7}
        css="color: var(--text-primary)"
        mb="1"
      >
        Personal projects
      </Text>
      <Text
        fontSize={[1, 2, 3]}
        fontWeight="400"
        lineHeight={1.6}
        width={['100%', '90%', '80%', '60%']}
        css="color: var(--text-secondary)"
      >
        I love side projects. It gives me a chance to flex creatively outside the confines of my daily work. Here are some of my favourites:-
      </Text>

      <Wrapper mt="4">
        <Item1>
          1
        </Item1>
        <Item2>
          2
        </Item2>
        <Item3>
          3
        </Item3>
      </Wrapper>

      <Button mt={[3, 4, 6]}>
        See all projects
      </Button>
    </Container>
  )
}

export default Sides
