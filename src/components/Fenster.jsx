import { Alert, Snackbar } from '@mui/material'
import React from 'react'

function Fenster({isOpen, setIsOpen, name}) {
  return (
    <div>
          <Snackbar open={isOpen} autoHideDuration={2000} onClose={()=>setIsOpen(false)}>
      <Alert  onClose={()=>setIsOpen(false)} severity="success" sx={{ width: '100%' }}>
          {name} wurde hinzugefügt
      </Alert>
      </Snackbar>
    </div>
  )
}

export default Fenster