import React from 'react'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import ShareIcon from '@mui/icons-material/Share';
import { Delete, Favorite, FavoriteBorder } from '@mui/icons-material';
import { deleteDoc, doc } from 'firebase/firestore'
import { db } from '../../config/firebase'

const Post = ({ post }) => {

  const deletePost = async (id) => {
    const postDoc = doc(db, 'posts', id)
    await deleteDoc(postDoc)
  }

  return (
    <Card sx={{ marginBottom: 5 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
            EP
          </Avatar>
        }

        title={post.title}
        subheader={post.dateString}
      />
      <CardMedia
        component="img"
        height="450"
        image={post.imageUrl}
        alt="Nice pic"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {post.message}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: 'red' }} />} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton onClick={() => deletePost(post.id)} aria-label="delete">
          <Delete sx={{ fontSize: '27px' }} />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default Post