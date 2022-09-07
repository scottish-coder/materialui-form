import React, { useState } from 'react';
import { Button } from "@mui/material"
import ModalDialog from './ModalDialog';
import { isJSDocCommentContainingNode } from 'typescript';

function App() {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div className="App">
      <Button variant="contained" color="primary" onClick={handleOpen}>Signup</Button>
      <ModalDialog open={open} handleClose={handleClose}/>
    </div>
  );
}

export default App;
