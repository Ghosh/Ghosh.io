import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

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

const Anchor = styled(Link)`
  position: relative;
  text-decoration: none;
  font-weight: 400;
  color: var(--text-tertiary);

  &::after {
    position: absolute;
    left: 50%;
    bottom: -16px;
    content: ' ';
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 100%;
  }

  &:hover {
    &::after {
      background-color: var(--text-tertiary);
    }
  }

  &.is-current {
    text-decoration: none;
    color: var(--text-primary);

    &::after {
      background-color: var(--accent-1);
    }
  }
`

const Nav = () => {
  return (
    <List>
      <Item>
        <Anchor to="/" activeClassName="is-current">
          Home
        </Anchor>
      </Item>
      <Item>
        <Anchor to="/about" activeClassName="is-current">
          About
        </Anchor>
      </Item>
      <Item>
        <Anchor to="/labs" activeClassName="is-current">
          Labs
        </Anchor>
      </Item>
      <Item>
        <Anchor to="/contact" activeClassName="is-current">
          Contact
        </Anchor>
      </Item>
    </List>
  )
}

export default Nav
