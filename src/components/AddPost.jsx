import { Add, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from '@mui/icons-material'
import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography, styled } from '@mui/material'
import React, { useState } from 'react'

const AddPost = () => {
  const [open, setOpen] = useState(false)

  const handleModal = () => {
    setOpen(prev => !prev)
  }

  const UserBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    fontWeight: 700,
    gap: '10px',
    marginBottom: '15px',
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  }))

  return (
    <>
      <Tooltip title="Add Post" sx={{
        position: 'fixed',
        bottom: 100,
        left: { xs: 'calc(50% - 25px)', md: 30 }
      }}>
        <Fab color='primary' onClick={handleModal} >
          <Add />
        </Fab>
      </Tooltip>

      <Modal
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        open={open}
        onClose={handleModal}
      >
        <Box width={400} height={270} bgcolor={'background.default'} color={'text.primary'} borderRadius={5} p={3}>
          <Typography variant='h6' color={'gray'} textAlign={'center'}>Create post</Typography>

          <UserBox>
            <Avatar sx={{ width: 30, height: 30 }} src='https://avatars.githubusercontent.com/u/91059020?s=400&u=88f8cfabd830ccb36976d7a20998486b9e40d74c&v=4'
            />
            <Typography
              variant='span' >
              pinoen
            </Typography>
          </UserBox>

          <TextField
            multiline
            rows={3}
            fullWidth
            variant='standard'
            label="What's on your mind?"
          />

          <Stack direction={'row'} mt={2} mb={3} gap={2} >
            <EmojiEmotions color='primary' />
            <Image color='secondary' />
            <VideoCameraBack color='success' />
            <PersonAdd color='error' />
          </Stack>

          <ButtonGroup fullWidth variant="contained">
            <Button>Post</Button>
            <Button><DateRange /></Button>
          </ButtonGroup>
        </Box>
      </Modal>
    </>
  )
}

export default AddPost