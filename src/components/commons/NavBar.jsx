import { Computer, Mail, Notifications } from '@mui/icons-material'
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import { auth } from '../../config/firebase'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const NavBar = ({ setIsAuth }) => {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const handleMenu = () => {
    setOpen(prev => !prev)
  }

  const handleLogOut = () => {
    signOut(auth).then(() => {
      localStorage.clear()
      setIsAuth(false)
      navigate('/login')
    })
  }

  const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between'
  })

  const Search = styled('div')(({ theme }) => ({
    backgroundColor: 'white',
    padding: '0 10px',
    borderRadius: theme.shape.borderRadius,
    width: '40%'
  }))

  const Icons = styled(Box)(({ theme }) => ({
    display: 'none',
    alignItems: 'center',
    gap: '15px',
    [theme.breakpoints.up('sm')]: {
      display: 'flex'
    }
  }))

  const UserBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  }))

  return (
    <AppBar position="fixed">
      <StyledToolbar>
        <Typography
          sx={{ display: { xs: 'none', sm: 'block' } }}
          variant='h6' >
          {localStorage.getItem('name')} Travel Memories
        </Typography>
        <Computer sx={{ display: { xs: 'block', sm: 'none' } }} />
        <Search><InputBase placeholder='Search...' /></Search>

        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>

          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>

          <Avatar

            sx={{ width: 30, height: 30, cursor: 'pointer' }} src={localStorage.getItem('profilePic')}
            onClick={handleMenu} />
        </Icons>

        <UserBox onClick={handleMenu} >
          <Avatar sx={{ width: 30, height: 30, cursor: 'pointer' }} src={localStorage.getItem('profilePic')}
          />
          <Typography
            variant='span' >
            {localStorage.getItem('name')}
          </Typography>

        </UserBox>
      </StyledToolbar>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={handleMenu}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem onClick={handleLogOut} >Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default NavBar