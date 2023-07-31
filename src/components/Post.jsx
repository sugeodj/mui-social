import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material';
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material';

export const Post = () => {
    return (
        <Card sx={{
            margin: 5
        }}>
          <CardHeader
              avatar={
                  <Avatar sx={{ bgcolor: 'darkgray' }} aria-label='recipe'>
                      R
                  </Avatar>
              }
              action={
                  <IconButton aria-label='settings'>
                      <MoreVert />
                  </IconButton>
              }
              title='John Smith'
              subheader='July 14, 2023'
          />
          <CardMedia
              component='img'
              height='20%'
              image='https://smashballoon.com/wp-content/uploads/2021/06/types-of-social-media-posts.jpg'
              alt='Paella dish'
          />
          <CardContent>
              <Typography variant='body2' color='text.secondary'>
                  This impressive paella is a perfect party dish and a fun
                  meal to cook together with your guests. Add 1 cup of
                  frozen peas along with the mussels, if you like.
              </Typography>
          </CardContent>
          <CardActions disableSpacing>
              <IconButton aria-label='add to favorites'>
                  <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: 'red' }} />} />
              </IconButton>
              <IconButton aria-label='share'>
                  <Share />
              </IconButton>
          </CardActions>
      </Card>
  )
}
