import { Computer, Mail, Notifications } from '@mui/icons-material'
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography, styled } from '@mui/material'
import React, { useState } from 'react'

const NavBar = () => {

  const [open, setOpen] = useState(false)

  const handleMenu = () => {
    setOpen(prev => !prev)
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
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography
          sx={{ display: { xs: 'none', sm: 'block' } }}
          variant='h6' >
          Emilio DEV
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

            sx={{ width: 30, height: 30 }} src='https://avatars.githubusercontent.com/u/91059020?s=400&u=88f8cfabd830ccb36976d7a20998486b9e40d74c&v=4'
            onClick={handleMenu} />
        </Icons>

        <UserBox onClick={handleMenu} >
          <Avatar sx={{ width: 30, height: 30 }} src='https://avatars.githubusercontent.com/u/91059020?s=400&u=88f8cfabd830ccb36976d7a20998486b9e40d74c&v=4'
          />
          <Typography
            variant='span' >
            pinoen
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
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default NavBar