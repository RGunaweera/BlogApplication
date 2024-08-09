import React from 'react';
import { Box, Typography } from '@mui/material';

const Home = () => {
  return (
    <Box
      sx={{
        height: '100vh', /* Full viewport height */
        backgroundImage: 'url(/images/home-1)',
        backgroundSize: 'cover', /* Cover the entire container */
        backgroundPosition: 'center', /* Center the image */
        backgroundRepeat: 'no-repeat', /* Prevent image repetition */
        color: 'white', /* Text color for contrast */
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: 2,
      }}
    >
      <Typography variant="h2" component="h1">
        Welcome to the Explore Page
      </Typography>
    </Box>
  );
};

export default ExplorePage;
