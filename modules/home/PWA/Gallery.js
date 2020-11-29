import React from 'react'
import styled from 'styled-components'
import Box from '@stylekit/ui/Box'

import Breakpoints from '@/breakpoints'

import Image from 'components/Image'

const Block = styled.div`
  display: none;
  grid-gap: 24px;

  ${ Breakpoints.greaterThan('tabletP')`
    display: grid;
    grid-template-areas:
      "item-1 item-2"
  ` };

  ${ Breakpoints.greaterThan('tabletL')`
    grid-template-areas:
      "item-1 item-1 item-1 item-2 item-2"
      "item-1 item-1 item-1 item-3 item-4";
  ` };
`

const Item = styled(Box)`
  background-color: var(--bg-1);
  border-radius: 4px;
  overflow: hidden;
  height: 400px;
  position: relative;

  transition: background-color .25s cubic-bezier(0,0,.2,1);
  backface-visibility: hidden;
  will-change: transform;

  ${ Breakpoints.greaterThan('tabletL')`
    height: 400px;
  ` };

  @media (hover: hover) {
    &:hover {
      background-color: var(--bg-2);
    }
  }

  picture,
  img {
    position: absolute;
    transition: all .25s cubic-bezier(0,0,.2,1);
    backface-visibility: hidden;
    will-change: transform;
  }
`

const Item1 = styled(Item)`
  grid-area: item-1;

  picture,
  img {
    box-shadow: -9px 10px 10px rgba(8,11,14,0.12);

    ${ Breakpoints.lessThan('tabletP')`
      top: 10px;
      left: 0px;
      right: 0;
      margin: auto;
      width: 90%;
      height: auto;
    ` };

    ${ Breakpoints.greaterThan('tabletP')`
      top: 20px;
      left: 20px;
    ` };

    ${ Breakpoints.greaterThan('tabletL')`
      top: 20px;
      left: 0px;
      right: 0;
      margin: auto;
    ` };

    @media (hover: hover) {
      &:hover {
        transform: translate3d(0, -2px, 0);
      }
    }
  }
`

const ItemFaux2 = styled(Item)`
  display: none;
  ${ Breakpoints.greaterThan('tabletP')`
    grid-area: item-2;
    display:block;
  ` };

  ${ Breakpoints.greaterThan('tabletL')`
    display: none;
  ` };

  picture,
  img {
    box-shadow: -9px 10px 10px rgba(8,11,14,0.12);

    ${ Breakpoints.greaterThan('tabletP')`
      top: 20px;
      left: 20px;
    ` };

    @media (hover: hover) {
      &:hover {
        transform: translate3d(0, -2px, 0);
      }
    }
  }
`

const Item2 = styled(Item)`
  display: none;

  ${ Breakpoints.greaterThan('tabletL')`
    display: block;
    grid-area: item-2;
    height: 188px;
  ` };

  picture,
  img {
    top: 5px;
    left: -145px;
    right: 0;
    margin: auto;
    object-fit: cover;

    @media (hover: hover) {
      &:hover {
        transform: scale(1.01);
      }
    }
  }
`

const Item3 = styled(Item)`
  display: none;
  ${ Breakpoints.greaterThan('tabletL')`
    grid-area: item-3;
    display:block;
    height: 188px;
  ` };

  picture,
  img {
    @media (hover: hover) {
      &:hover {
        transform: scale(1.03);
      }
    }
  }
`

const Item4 = styled(Item)`
  display: none;
  ${ Breakpoints.greaterThan('tabletL')`
    grid-area: item-4;
    display:block;
    height: 188px;
  ` };

  picture,
  img {
    top: 34px;
    left: 0;
    right: 0;
    margin: auto;
    object-fit: cover;

    @media (hover: hover) {
      &:hover {
        transform: scale(1.03);
      }
    }
  }
`

const Parts = styled.div`
  ${ Breakpoints.greaterThan('tabletP')`
    display: none;
  ` };

  picture,
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`

const Gallery = () => {
  return (
    <>
      <Parts>
        <Image
          base="/images/home/pwa/"
          name="preview.png"
          alt="Screen of the Flight PWA by Cleartrip"
          width="700px"
          height="594px"
        />
      </Parts>
      <Block>
        <Item1>
          <Image
            base="/images/home/pwa/"
            name="flights.png"
            alt="Screen of the Flight PWA by Cleartrip"
            width="472px"
            height="839px"
          />
        </Item1>
        <ItemFaux2>
          <Image
            base="/images/home/pwa/"
            name="hotels.png"
            alt="Screen of the Hotel PWA by Cleartrip"
            width="472px"
            height="839px"
          />
        </ItemFaux2>
        <Item2>
          <Image
            base="/images/home/pwa/"
            name="carousel.png"
            alt="Image of a carousel component used in the app"
            width="818px"
            height="170px"
          />
        </Item2>
        <Item3>
          <Image
            base="/images/home/pwa/"
            name="map.png"
            alt="Image of a map"
            width="178px"
            height="218px"
          />
        </Item3>
        <Item4>
          <Image
            base="/images/home/pwa/"
            name="button.png"
            alt="Image of a button denoting the touch feedback"
            width="178px"
            height="58px"
          />
        </Item4>
      </Block>
    </>
  )
}

export default Gallery
