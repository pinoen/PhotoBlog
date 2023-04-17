import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google';
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../../config/firebase'
import { useNavigate } from 'react-router-dom'

const Login = ({ setIsAuth }) => {

  const navigate = useNavigate()
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then(res => {
      setIsAuth(true)
      localStorage.setItem('isAuth', true)
      localStorage.setItem('name', res.user.displayName)
      localStorage.setItem('email', res.user.email)
      localStorage.setItem('profilePic', res.user.photoURL)
      navigate('/')
    })
      .catch(err => console.log(err))
  }

  return (
    <Box
      sx={{ backgroundImage: 'url(https://images.pexels.com/photos/2686558/pexels-photo-2686558.jpeg)', backgroundSize: 'cover' }}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      height={'100vh'} >
      <Button startIcon={<GoogleIcon />} variant='contained' onClick={signInWithGoogle} >Sign in with a Google Account</Button>

      <Typography
        component={'a'}
        href='https://www.pexels.com/photo/scenic-view-of-snow-capped-mountains-2686558'
        color={'gray'}
        position={'fixed'}
        bottom={10}
        right={20}
        fontWeight={500}
        sx={{ textDecoration: 'none' }}
      >Photo by Matthias Groeneveld</Typography>
    </Box>
  )
}

export default Login