import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

// Context
// --------------------------
const DarkModeContext = React.createContext()

// Provider
const DarkModeProvider = ({ children, ...props }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = JSON.parse(localStorage.getItem('canIHazDarkMode'))
    return savedMode || false
  })

  const toggleMode = () => setDarkMode(prev => !prev)

  // Save mode in localstorage
  useEffect(() => {
    localStorage.setItem('canIHazDarkMode', JSON.stringify(darkMode))
  }, [darkMode])

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
