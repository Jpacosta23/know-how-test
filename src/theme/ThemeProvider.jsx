import React, { useMemo } from 'react'
import {
  ThemeProvider as ThemeProviderUI,
  StyledEngineProvider
} from '@mui/material/styles'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import CssBaseline from '@mui/material/CssBaseline'

import theme from './theme'

const ThemeProvider = ({ children }) => {
  const defaultTheme = useMemo(() => theme('light'), [])

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProviderUI theme={defaultTheme}>
        <StyledThemeProvider theme={defaultTheme}>
          <CssBaseline />
          {children}
        </StyledThemeProvider>
      </ThemeProviderUI>
    </StyledEngineProvider>
  )
}

export default ThemeProvider
