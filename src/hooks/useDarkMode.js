import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

/**
 * The darkmode has been implemented in 4 steps:-
 * 1. Declare all colors as css variables on body
 * 2. Use css variable in styled components for colors
 * 3. Toggle `.dark` class on body
 * 4. Set darkmode depending on preffered scheme or past visit
 */

// Context
const DarkModeContext = React.createContext()

// Provider
const DarkModeProvider = ({ children, ...props }) => {
  /**
   * Get default value from localstorage
   * fall back to false if does not exist
   */
  const [darkMode, setDarkMode] = useState(getInitialMode())

  const toggleMode = () => setDarkMode(prev => !prev)

  // Save mode in localstorage
  useEffect(() => {
    localStorage.setItem('canIHazDarkMode', JSON.stringify(darkMode))
  }, [darkMode])

  function getInitialMode () {
    const isReturningUser = 'canIHazDarkMode' in localStorage
    const hasDarkModePreference = getPreferredColorScheme()
    const savedMode = JSON.parse(localStorage.getItem('canIHazDarkMode'))

    // Has saved in local storage
    if (isReturningUser) return savedMode
    // Has preference for dark mode
    if (hasDarkModePreference) return true
    // Default light mode
    return false
  }

  /**
   * Get preffered color scheme of user
   */
  function getPreferredColorScheme () {
    if (!window.matchMedia) return
    const pref = window.matchMedia('(prefers-color-scheme: dark)')
    return pref.matches
  }

  return (
    <DarkModeContext.Provider value={{ toggleMode }} {...props}>
      <Helmet
        bodyAttributes={{
          class: `${ darkMode ? 'dark' : '' }`
        }}
      />
      {children}
    </DarkModeContext.Provider>
  )
}

DarkModeProvider.propTypes = {
  children: PropTypes.node.isRequired
}

// Consumer
const useDarkMode = () => {
  const context = React.useContext(DarkModeContext)

  if (!context) {
    throw new Error('useDarkMode must be used within a DarkModeProvider')
  }

  const { toggleMode } = context
  return {
    toggleMode
  }
}

export { useDarkMode, DarkModeProvider }
