/* eslint-disable react-refresh/only-export-components */
import { createContext, ReactNode, useState } from 'react'
import { ThemeProvider as ThemeProviderStyled } from 'styled-components'
import { defaultTheme } from '../styles/theme/default'
import { lightTheme } from '../styles/theme/light'

export enum ThemeType {
  default = 'default',
  light = 'light',
}
interface ThemeContextType {
  theme: 'default' | 'light'
  toggleTheme: () => void
}
interface ThemeProviderProps {
  children: ReactNode
}

const themes = {
  default: defaultTheme,
  light: lightTheme,
}

export const ThemeContext = createContext({} as ThemeContextType)

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState(ThemeType.default)

  function toggleTheme() {
    if (theme === ThemeType.default) {
      setTheme(ThemeType.light)
    } else {
      setTheme(ThemeType.default)
    }
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProviderStyled theme={themes[theme]}>
        {children}
      </ThemeProviderStyled>
    </ThemeContext.Provider>
  )
}
