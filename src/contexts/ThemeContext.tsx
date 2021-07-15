import React, { useState } from 'react'
import { ThemeProvider as SCThemeProvider } from 'styled-components'
import { light, dark } from '@pancakeswap/uikit'

const CACHE_KEY = 'IS_DARK'

const ThemeContext = React.createContext({ isDark: null, toggleTheme: () => null })

const ThemeContextProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    const isDarkUserSetting = localStorage.getItem(CACHE_KEY)
    return isDarkUserSetting ? JSON.parse(isDarkUserSetting) : false
  })

  const toggleTheme = () => {
    setIsDark((prevState) => {
      localStorage.setItem(CACHE_KEY, JSON.stringify(!prevState))
      return !prevState
    })
  }
  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <SCThemeProvider
        theme={() => ({
          ...light,
          colors: {
            ...light?.colors,
            primary: '#006EE9',
            secondary: '#006EE9',
            textSubtle: '#006EE9',
            inputSecondary: '#91c5ff',
          },
        })}
      >
        {children}
      </SCThemeProvider>
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeContextProvider }
