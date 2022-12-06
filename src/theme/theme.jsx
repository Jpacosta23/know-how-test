import { createTheme, responsiveFontSizes } from '@mui/material/styles'

const theme = (modeTheme = 'light') =>
  responsiveFontSizes(
    createTheme({
      palette: {},
      typography: {
        fontFamily: 'Roboto',
        button: {
          fontSize: 16,
          letterSpacing: 0.2,
          textTransform: 'none'
        },
        body1: {
          fontSize: '16px',
          lineHeight: '20px',
          letterSpacing: '0.15px'
        }
      },
      components: {
        MuiInputBase: {
          background: '#ffffff',
          border: '1px solid #cbcbcb',
          borderRadius: '5px'
        },
        MuiTextField: {
          background: '#ffffff',
          border: '1px solid #cbcbcb',
          borderRadius: '5px'
        }
      }
    })
  )

export default theme
