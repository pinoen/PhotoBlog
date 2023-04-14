import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

const RightBar = () => {
  return (
    <Box
      p={2}
      sx={{ display: { xs: 'none', sm: 'block' } }}
      flex={2}>
      <Box position={'fixed'} width={340} >
        <Typography variant='h6' fontWeight={100} >Online Friends</Typography>

        <AvatarGroup max={6}>
          <Avatar alt="Remy Sharp" src="https://unavatar.io/midudev" />
          <Avatar alt="Cindy Baker" src="https://unavatar.io/kevin" />
          <Avatar alt="Agnes Walker" src="https://unavatar.io/nacho" />
          <Avatar alt="Trevor Henderson" src="https://unavatar.io/gaby" />
          <Avatar alt="Remy Sharp" src="https://unavatar.io/vanem" />
          <Avatar alt="Cindy Baker" src="https://unavatar.io/lorenzo" />
          <Avatar alt="Agnes Walker" src="https://unavatar.io/guillote" />
          <Avatar alt="Trevor Henderson" src="https://unavatar.io/esteban" />
        </AvatarGroup>

        <Typography variant='h6' fontWeight={100} mt={5} mb={2} >Latest posts</Typography>

        <ImageList cols={4} rowHeight={130} gap={5} >

          <ImageListItem>
            <img
              src='https://images.pexels.com/photos/1049298/pexels-photo-1049298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              loading="lazy"
            />
          </ImageListItem>

          <ImageListItem>
            <img
              src='https://images.pexels.com/photos/1078981/pexels-photo-1078981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              loading="lazy"
            />
          </ImageListItem>

          <ImageListItem>
            <img
              src='https://images.pexels.com/photos/1770310/pexels-photo-1770310.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              loading="lazy"
            />
          </ImageListItem>

          <ImageListItem>
            <img
              src='https://images.pexels.com/photos/3355788/pexels-photo-3355788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              loading="lazy"
            />
          </ImageListItem>
        </ImageList>

        <Typography variant='h6' fontWeight={100} mt={5} >Latest conversations</Typography>

        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="https://unavatar.io/renzo" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>

          <Divider variant="inset" component="li" />

          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="https://unavatar.io/midudev" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>

          <Divider variant="inset" component="li" />

          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="https://unavatar.io/pinoen" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default RightBar