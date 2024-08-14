import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Container, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import './AllBlogs.css';

export default function MasonryImageList() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',  // Horizontally center the image list
        alignItems: 'start',      // Align items to the top of the container
        marginTop: '100px',
        width: '100%',             
        overflowY: 'hidden',       // Hide the vertical scrollbar
        height: 'auto',            // Let the container height adjust based on content
      }}
    >
      <Box
        sx={{
          maxWidth: '1000px',  // Set a maximum width for the image list container
          width: '100%',       // Ensure the container takes up 100% of the available width
        }}
      >
        <Typography className='blog-intro'>
          <h2>Read our latest travel blogs</h2>
          <p>Welcome to our little corner of the internet where we share stories, tips, and experiences from our travels around the world. Whether you’re a seasoned traveler or someone who dreams of exploring new places, We hope our blog inspires you to embark on your own adventures.</p>
          <Container className='btns'>
            <Button variant="outlined" className='btn-read'>Read Blogs</Button>
            <Button variant="contained" className='btn-create'>Write a Blog</Button>
          </Container>
          
        </Typography>
        <ImageList variant="masonry" cols={4} gap={4} sx={{ overflow: 'hidden' }}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.title}                
                actionIcon={
                  <IconButton
                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                    aria-label={`info about ${item.title}`}
                  >
                    <InfoIcon />
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Box>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1512757776214-26d36777b513?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Explore',
  },

  {
    img: 'https://images.unsplash.com/photo-1500835556837-99ac94a94552?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Travel',
  },

  {
    img: 'https://images.unsplash.com/photo-1528759335187-3b683174c86a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Vacation',
  },

  {
    img: 'https://images.unsplash.com/photo-1530907487668-af02f65b4afe?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Adventure',
  }


  // {
  //   img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
  //   title: 'Bed',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
  //   title: 'Books',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
  //   title: 'Sink',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
  //   title: 'Kitchen',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
  //   title: 'Blinds',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
  //   title: 'Chairs',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
  //   title: 'Laptop',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
  //   title: 'Doors',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
  //   title: 'Coffee',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
  //   title: 'Storage',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
  //   title: 'Candle',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
  //   title: 'Coffee table',
  // },
];
