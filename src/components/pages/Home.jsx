import React from 'react'
import NavBar from '../commons/NavBar'
import SideBar from '../commons/SideBar'
import Feed from '../commons/Feed'
import RightBar from '../commons/RightBar'
import { Box, Stack } from '@mui/material'
import AddPost from '../commons/AddPost'

const Home = ({ mode, setMode, isAuth, setIsAuth }) => {
  return (
    <Box bgcolor={'background.default'} color={'text.primary'} >
      <NavBar setIsAuth={setIsAuth} />
      <Stack direction={"row"} spacing={2} justifyContent={'space-between'}>
        <SideBar mode={mode} setMode={setMode} />
        <Feed />
        <RightBar />
      </Stack>
      <AddPost isAuth={isAuth} />
    </Box>
  )
}

export default Home