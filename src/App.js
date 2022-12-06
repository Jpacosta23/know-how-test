import { BrowserRouter } from 'react-router-dom'
import Routes from './routes/routes'
import ThemeProvider from './theme/ThemeProvider'

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
