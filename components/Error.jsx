import React, { useState } from 'react';
import { Snackbar, Alert, Button } from '@mui/material';

function Error (){
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <div className=' h-screen w-full flex items-center justify-center'>
      <Button variant="contained" onClick={handleClick} sx={{backgroundColor:'red'}}>
        Show Error Message
      </Button>

      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          This is an error message!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Error;
