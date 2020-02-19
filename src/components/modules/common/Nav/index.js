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
  font-weight: 400;
  color: ${ props => props.theme.colors.midnight[5] }
`

const Nav = () => {
  // Todo: Document in readme
  // import styled, { useTheme } from 'styled-components'
  // const linkColor = useTheme().colors.midnight[3]

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
