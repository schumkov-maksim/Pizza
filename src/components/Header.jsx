import { AppBar, Badge, Box, Toolbar, Typography } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import React from 'react'

export default function Header({basketList, isDrawerOpen, isSetsDrawerOpen, total}) { 
  
  const count = basketList.reduce(
    (accumulator, currentValue) =>
      accumulator +  currentValue.anzahl,
    0
  );

  return (
    <Box sx={{ flexGrow:1 }}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          About
        </Typography> 
        <Typography variant='body1'>Price: {total} </Typography>
        <Badge badgeContent={count} color="secondary">
        <AddShoppingCartIcon onClick={()=>isSetsDrawerOpen(!isDrawerOpen)}/>
        </Badge>
      </Toolbar>
    </AppBar>
   </Box>

);
  
}
