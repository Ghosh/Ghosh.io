import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

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

const isBrowser = (typeof window !== `undefined`)

const ThemeToggle = () => {
  const [theme, setTheme] = useState(null)

  useEffect(() => {
    if (isBrowser) {
      setTheme(window.__theme)
      window.__onThemeChange = () => setTheme(window.__theme)
    }
  }, [])

  const toggle = () => {
    if (theme === 'light') return window.__setPreferredTheme('dark')
    if (theme === 'dark') return window.__setPreferredTheme('light')
    window.__setPreferredTheme('dark')
  }

  return (
    <Toggle onClick={() => toggle()}>
      {theme === 'dark' &&
        <Sun
          width="24"
          style={{
            fill: 'var(--accent-1)'
          }}
        />
      }
      {theme === 'light' &&
        <Moon
          width="18"
          height="18"
          style={{
            fill: 'var(--accent-1)',
            paddingLeft: '2px'
          }}
        />
      }
    </Toggle>
  )
}

export default ThemeToggle
