import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Post from './Post'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../../config/firebase'

const Feed = () => {
  const [postsList, setPostsList] = useState([])
  const postsCollectionRef = collection(db, 'posts')

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef)
      setPostsList(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
    }
    getPosts()
  }, [])

  return (
    <Box pt={10} flex={4}>
      {postsList.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </Box>
  )
}

export default Feed