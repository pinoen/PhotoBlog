import { Add, InsertPhoto } from '@mui/icons-material'
import { Avatar, Box, Button, Fab, InputAdornment, Modal, Stack, TextField, Tooltip, Typography, styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { DatePicker } from '@mui/x-date-pickers';
import { addDoc, collection } from 'firebase/firestore';
import { db, auth } from '../../config/firebase';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import { storage } from '../../config/firebase';
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage'
import Swal from 'sweetalert2'

const AddPost = ({ isAuth }) => {
  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState('')
  const [message, setMessage] = useState('')
  const [date, setDate] = useState(null);
  const [imageUpload, setImageUpload] = useState(null)
  const dateString = dayjs(date).toString().slice(5, 16);
  const navigate = useNavigate()
  const postsCollectionRef = collection(db, 'posts')

  useEffect(() => {
    if (!isAuth) {
      navigate('/login')
    }
  })

  const handleModal = () => {
    setOpen(prev => !prev)
  }

  const handleDate = (newDate) => {
    setDate(newDate)
  }

  const handleSubmit = async () => {
    handleModal()
    await addDoc(postsCollectionRef,
      { title, message, dateString, imageUrl: imageUpload, author: { name: auth.currentUser.displayName, id: auth.currentUser.uid } })

    const imageRef = ref(storage, `images/${imageUpload.name}`)
    uploadBytes(imageRef, imageUpload).then(() => {
      Swal.fire(
        'New post!',
        'Your post was successfully created!',
        'success'
      ).then(res => {
        if (res.isConfirmed) {
          navigate('/')
          setTimeout(() => {
            window.location.reload()
          }, 1000)
        }
      })
    })
  }

  const UserBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    fontWeight: 700,
    gap: '10px',
    marginBottom: '15px',
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
        <Box width={300} height={370} bgcolor={'background.default'} color={'text.primary'} borderRadius={5} p={3}>
          <Typography variant='h6' color={'gray'} textAlign={'center'}>Create post</Typography>

          <UserBox>
            <Avatar sx={{ width: 30, height: 30 }} src={localStorage.getItem('profilePic')}
            />
            <Typography
              variant='span' >
              {localStorage.getItem('name')}
            </Typography>
          </UserBox>

          <TextField
            variant='standard'
            sx={{ pb: '10px' }}
            label='Title'
            value={title}
            name='title'
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Title for your post'
          >Title</TextField>

          <TextField
            multiline
            rows={3}
            fullWidth
            variant='standard'
            label="What's place is in your mind?"
            value={message}
            name='message'
            onChange={(e) => setMessage(e.target.value)}
          />

          <Stack direction={'row'} mt={2} mb={3} gap={2} >
            <TextField
              onChange={(e) => setImageUpload(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <InsertPhoto color='success' />
                  </InputAdornment>
                ),
              }}

              label='Enter image url'
              type='url' />

          </Stack>

          <Box display={'flex'}>
            <DatePicker
              value={date}
              onChange={handleDate}
            />
            <Button onClick={handleSubmit}>Post</Button>
          </Box>
        </Box>
      </Modal>
    </>
  )
}

export default AddPost