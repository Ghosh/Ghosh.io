import React from 'react'
import styled from 'styled-components'
import Box from '@stylekit/ui/Box'

import Breakpoints from '@/breakpoints'

import Gradients from './svg/uigradients.svg'
import Filters from './svg/cssfilters.svg'
import Scratch from './svg/scratchmap.svg'

import Image from './Image'

// 436 * 375
// 872 * 748

const Block = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-template-areas:
    "item-1"
    "item-2"
    "item-3";

  ${ Breakpoints.greaterThan('tabletP')`
    grid-template-areas: "item-1 item-2 item-3";
    grid-template-columns: repeat(3, minmax(0, 1fr));
  ` }
`

const Thumb = styled.div`
  width: 430px;
  position: absolute;

  ${ Breakpoints.lessThan('tabletP')`
    top: 80px;
    left: 50%;
    transform: translate3d(-215px, 0, 0)
  ` };

  ${ Breakpoints.greaterThan('tabletP')`
    bottom: -50px;
    left: 40px;
  ` };

  picture,
  img {
    width: 100%;
    box-shadow: -9px 10px 10px rgba(8,11,14,0.12);
  }
`

const Item = styled(Box)`
  position: relative;
  background-color: var(--bg-2);
  border-radius: 4px;
  height: 220px;
  width: 100%;
  overflow: hidden;

  svg {
    fill: var(--text-2-color);
  }

  &:hover {
     svg {
      fill: var(--text-1-color);
    }
  }

  ${ Breakpoints.greaterThan('tabletP')`
      min-height: 400px;
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

const Gallery = () => {
  return (
    <Block>
      <Item1 as="a" href="/">
        <Box centered mt={4}>
          <Gradients width="100px" />
        </Box>
        <Thumb>
          <Image
            base="/images/home/sides/"
            name="uigradients.png"
            alt="uiGradients website"
          />
        </Thumb>
      </Item1>
      <Item2>
        <Box centered mt={4}>
          <Filters width="120px"/>
        </Box>
        <Thumb>
          <Image
            base="/images/home/sides/"
            name="uigradients.png"
            alt="uiGradients website"
          />
        </Thumb>
      </Item2>
      <Item3>
        <Box centered mt={4}>
          <Scratch width="120px" />
        </Box>
        <Thumb>
          <Image
            base="/images/home/sides/"
            name="uigradients.png"
            alt="uiGradients website"
          />
        </Thumb>
      </Item3>
    </Block>
  )
}

export default Gallery
