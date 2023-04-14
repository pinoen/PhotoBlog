import { CardGiftcard, DocumentScanner, Group, Home, Interests, ModeNight, Person, Settings } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'

const SideBar = ({ mode, setMode }) => {

  const handleSwich = () => {
    setMode(mode == 'light' ? 'dark' : 'light')
  }

  return (
    <Box
      flex={1} p={2}
      sx={{
        display: { xs: 'none', sm: 'block' }
      }}>
      <Box position={'fixed'}>
        <List>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#home' >
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component='a' href='#pages' >
              <ListItemIcon>
                <DocumentScanner />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component='a' href='#groups' >
              <ListItemIcon>
                <Group />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component='a' href='#marketplace' >
              <ListItemIcon>
                <CardGiftcard />
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component='a' href='#friends' >
              <ListItemIcon>
                <Interests />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component='a' href='#settings' >
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component='a' href='#profile' >
              <ListItemIcon>
                <Person />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component='a' href='#switch' >
              <ListItemIcon >
                <ModeNight />
              </ListItemIcon>
              <Switch onChange={handleSwich} />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default SideBar