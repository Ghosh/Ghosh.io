import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Flex from '@stylekit/ui/Flex'

import Moon from './svg/moon.svg'
import Sun from './svg/sun.svg'

const Area = styled(Flex)`
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  cursor: pointer;
  border-radius: 4px;
  margin-right: -24px;

  @media (hover: hover) {
    &:hover {
      background-color: var(--bg-2);
    }
  }
`

const isBrowser = (typeof window !== `undefined`)

const Toggle = () => {
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
    <Area onClick={() => toggle()}>
      {theme === 'dark' && <Sun width="20" fill="#fcc419" />}
      {theme === 'light' && <Moon width="14" fill="#1c7ed6" />}
    </Area>
  )
}

export default Toggle
