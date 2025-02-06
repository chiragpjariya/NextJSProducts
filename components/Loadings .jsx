// components/Loading.js
import React from 'react';
import { CircularProgress, Box, Typography } from '@mui/material';

const Loadings = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <CircularProgress sx={{ marginBottom: 2 }} />
      <Typography variant="h6" color="textSecondary">
      Loading...
      </Typography>
    </Box>
  );
};

export default Loadings;
