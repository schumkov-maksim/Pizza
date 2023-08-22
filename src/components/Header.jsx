import { AppBar, Badge, Box, Typography } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import React from 'react'
import { Link} from 'react-router-dom';

export default function Header({basketList, isDrawerOpen, isSetsDrawerOpen, total}) { 
  
  const count = basketList.reduce(
    (accumulator, currentValue) =>
      accumulator +  currentValue.anzahl,
    0
  );

  return (

    <Box style={{display:"flex", justifyContent:"space-between"}}>
    <AppBar position="static">

        <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"} mt={2} mb={2}> 
        <Box display={"flex"} ml={5}>       
        <Typography variant="h6" component="p" >
         <Link to="/" style={{color:"#fff", textDecoration:"none"}}>Pizza</Link>
        </Typography> 
        <Typography variant="h6" component="p" sx={{ ml:5}}>
         <Link to="sushi" style={{color:"#fff", textDecoration:"none"}}>Sushi</Link>
        </Typography> 
        <Typography variant="h6" component="p" sx={{ ml:5 }}>
         <Link to="get" style={{color:"#fff", textDecoration:"none"}}>Getränkt</Link>
        </Typography></Box>  
        <Box display={"flex"} mr={5}>   
        <Typography variant='body1'>Price: {total} </Typography>
        <Badge badgeContent={count} color="secondary">
        <AddShoppingCartIcon style={{cursor:"pointer"}} onClick={()=>isSetsDrawerOpen(!isDrawerOpen)}/>
        </Badge>
        </Box>
        </Box>

    </AppBar>
   </Box>

);
  
}
