import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
import Feed from './components/Feed'
import RightBar from './components/RightBar'
import { Box, Stack, ThemeProvider, createTheme } from '@mui/material'
import AddPost from './components/AddPost'
import { useState } from 'react'

function App() {

  const [mode, setMode] = useState('light')
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    }
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={'background.default'} color={'text.primary'} >
        <NavBar />
        <Stack direction={"row"} spacing={2} justifyContent={'space-between'}>
          <SideBar mode={mode} setMode={setMode} />
          <Feed />
          <RightBar />
        </Stack>
        <AddPost />
      </Box>
    </ThemeProvider>
  )
}

export default App
