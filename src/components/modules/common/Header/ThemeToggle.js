import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { useDarkMode } from '@hooks/useDarkMode'

import { ReactComponent as Sun } from './icons/sun.svg'
import { ReactComponent as Moon } from './icons/moon.svg'

const Toggle = styled.button`
  background-color: transparent;
  border: none;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  cursor: pointer;
  outline: 0;
`

const ThemeToggle = () => {
  const { toggleMode, isDarkMode } = useDarkMode()

  return (
    <Toggle onClick={() => toggleMode()}>
      { isDarkMode && <Sun width="30" fill="yellow" /> }
      {!isDarkMode && <Moon width="22" fill="slategrey" /> }
    </Toggle>
  )
}

ThemeToggle.propTypes = {
  toggleMode: PropTypes.func
}

export default ThemeToggle
