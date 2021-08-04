import React, { useState } from 'react'
import { ThemeProvider as SCThemeProvider } from 'styled-components'
import { light, dark } from '@pancakeswap-libs/uikit'

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
  const themes = {
    ...light,
    colors: {
      ...light?.colors,
      primary: '#006EE9',
      secondary: '#006EE9',
      primaryBright: '#006EE9',
      primaryDark: '#006EE9',
      textSubtle: '#006EE9',
      text: '#4c9ffc',
    },
    button: {
      ...light.button,
      primary: {
        ...light.button.primary,
        background: '#006EE9',
      },
      subtle: {
        ...light.button.primary,
        background: '#4c9ffc',
        backgroundHover: '#006EE9',
      },
    },
  }
  console.log('THEMES : ', themes)
  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <SCThemeProvider theme={themes}>{children}</SCThemeProvider>
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeContextProvider }
