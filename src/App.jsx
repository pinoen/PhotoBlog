import { ThemeProvider, createTheme } from '@mui/material'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

function App() {
  const [mode, setMode] = useState('light')
  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'))

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    }
  })

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={darkTheme}>
        <BrowserRouter>
          <Routes>
            <Route path='/login' element={<Login setIsAuth={setIsAuth} />} />
            <Route path='/' element={<Home mode={mode} setMode={setMode} isAuth={isAuth} setIsAuth={setIsAuth} />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </LocalizationProvider>
  )
}

export default App
