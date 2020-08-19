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

const Item = styled(Box)`
  position: relative;
  background-color: var(--bg-1);
  border-radius: 4px;
  height: 220px;
  width: 100%;
  overflow: hidden;

  transition: background-color .25s cubic-bezier(0,0,.2,1);
  backface-visibility: hidden;
  will-change: transform;

  svg {
    fill: var(--text-2-color);
  }


  @media (hover: hover) {
    &:hover {

      background-color: var(--bg-2);

      svg {
        fill: var(--text-1-color);
      }

      img {
        transform: translate3d(-5px, 0,0);
      }
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

const Thumb = styled.div`
    width: 430px;
    position: absolute;

    ${ Breakpoints.lessThan('tabletP')`
      top: 80px;
      left: 30px;
      /* transform: translate3d(-215px, 0, 0) */
    ` };

    ${ Breakpoints.greaterThan('tabletP')`
      bottom: -60px;
      left: 40px;
    ` };

    picture,
    img {
      width: 100%;
      box-shadow: -9px 10px 10px rgba(8,11,14,0.12);
      transition: all .25s cubic-bezier(0,0,.2,1);
      backface-visibility: hidden;
      will-change: transform;
    }
  `

const Gallery = () => {
  return (
    <Block>
      <Item1 as="a" href="/">
        <Box centered mt="35px">
          <Gradients width="100px" />
        </Box>
        <Thumb>
          <Image
            base="/images/home/sides/"
            name="uigradients.png"
            alt="uiGradients website"
            width="436px"
            height="375px"
          />
        </Thumb>
      </Item1>

      <Item2 as="a" href="/">
        <Box centered mt={4}>
          <Filters width="110px"/>
        </Box>
        <Thumb>
          <Image
            base="/images/home/sides/"
            name="cssfilters.png"
            alt="cssFilters website"
            width="436px"
            height="375px"
          />
        </Thumb>
      </Item2>

      <Item3 as="a" href="/">
        <Box centered mt={4}>
          <Scratch width="120px" />
        </Box>
        <Thumb>
          <Image
            base="/images/home/sides/"
            name="scratchmap.png"
            alt="Scratchmap website"
            width="436px"
            height="375px"
          />
        </Thumb>
      </Item3>
    </Block>
  )
}

export default Gallery
