import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { useDarkMode } from '@hooks/useDarkMode'

import { ReactComponent as Sun } from './icons/sun.svg'
import { ReactComponent as Moon } from './icons/moon.svg'

const Toggle = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  align-self: center;
  cursor: pointer;
  margin-left: 12px;
  width: 30px;
  height: 30px;
  padding: 0;
  padding-left: 4px;
  border-radius: 4px;

  &:hover {
    background-color: var(--bg-darker);
  }
`

const ThemeToggle = () => {
  const { toggleMode, isDarkMode } = useDarkMode()

  return (
    <Toggle onClick={() => toggleMode()}>
      {isDarkMode &&
        <Sun
          width="23"
          style={{
            fill: 'var(--accent-1)'
          }}
        />
      }
      {!isDarkMode &&
        <Moon
          width="24"
          height="20"
          style={{ fill: 'var(--accent-1)' }}
        />
      }
    </Toggle>
  )
}

ThemeToggle.propTypes = {
  toggleMode: PropTypes.func
}

export default ThemeToggle
