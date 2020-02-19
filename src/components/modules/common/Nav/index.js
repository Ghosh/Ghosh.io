import React from 'react'
import styled from 'styled-components'

import Breakpoints from '@breakpoints'

const List = styled.ul`
  margin-left: 48px;
  display: none;

    ${ Breakpoints.greaterThan('tabletP')`
      display: flex;
  ` };
`

const Item = styled.li`
  list-style-type: none;
  margin-right: 28px;
  font-size: 1.5rem;
`

const Nav = () => {
  return (
    <List>
      <Item>Home</Item>
      <Item>About</Item>
      <Item>Labs</Item>
      <Item>Contact</Item>
    </List>
  )
}

export default Nav
