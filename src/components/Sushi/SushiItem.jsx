import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Grid,  Typography } from '@mui/material'
import React from 'react'

function SushiItem({name, url, price, addItem, text}) {   
  return (
    <div>     
    <Grid item xs={8} md={12} >
    <Card sx={{  mt:5, minHeight:450, width:350 }}>
    <Typography gutterBottom variant="h6" component="p" sx={{textAlign:"center"}}>
        {name}
      </Typography>
  <CardActionArea>
    <CardMedia  
      component="img"
        image= {url}
        alt={name}
        maxheight={250}
    />
    <CardContent>
    <Typography variant='body1'>{text}</Typography>

      <Typography variant='h6'>Price {price} Euro</Typography>

<Box sx={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
<Box>
  </Box>
  <Box>
  <Button variant='contained' onClick={()=>addItem(name,url, price)}>Bestellen</Button>
  </Box>
  </Box>
  </CardContent>  
  </CardActionArea>

</Card>   
</Grid>
</div>
  )
}

export default SushiItem