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
  cursor: pointer;
  margin-left: 12px;
`

const ThemeToggle = () => {
  const { toggleMode, isDarkMode } = useDarkMode()

  return (
    <Toggle onClick={() => toggleMode()}>
      {isDarkMode && <Sun width="24" style={{ fill: 'var(--accent-1)' }} /> }
      {!isDarkMode && <Moon height="24" style={{ fill: 'var(--accent-1)' }} />}
    </Toggle>
  )
}

ThemeToggle.propTypes = {
  toggleMode: PropTypes.func
}

export default ThemeToggle
