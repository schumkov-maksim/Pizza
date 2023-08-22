import { Alert, Box, Button, Card, CardActionArea, CardContent, CardMedia, FormControlLabel, Grid, Radio, RadioGroup, Snackbar, Typography } from '@mui/material'
import React, { useState } from 'react'

function Pizza({name,url, priceGross, priceKlein, text, setBasketList, basketList }) {

  const [isOpen,setIsOpen]= useState(false)
  const [price, setPrice] = useState(priceKlein);
 

  function addPizza(name,url){   
  let id=basketList.length; 
  let a =[...basketList]
  const obj ={id: id, name:name, url:url, price:price, anzahl: 1}
  const isDrin = basketList.findIndex((item) => item.name === name && item.price===price);
  if(isDrin>=0){
   
    a[isDrin].anzahl+=1;
    setBasketList(a)
  }
 else{
  const newArr= [...basketList, obj]
  id=new Date();
  setBasketList(newArr);
  console.log(newArr.length + " iSDrin" + newArr[0].name);
 
 }
 setIsOpen(true);
}


  return (
    <div>     
        <Grid item xs={8} md={12} >
        <Card sx={{  mt:5, maxheight:450, width:350 }}>
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
          <Typography variant='body2'>{text}</Typography>

   <Box sx={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
    <Box>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="klein"
        name="radio-buttons-group"     
        sx={{display:"flex"}}   
        >
       <FormControlLabel value="klein" onClick={()=>setPrice(priceKlein)} control={<Radio />} label= {priceKlein + " Euro (klein)"} />
       <FormControlLabel value="gross" onClick={()=>setPrice(priceGross)}control={<Radio />} label={ priceGross + " Euro (gross)"}  />
      </RadioGroup>
      </Box>
      <Box>
      <Button variant='contained' onClick={()=>addPizza(name, url)}>Bestellen</Button>
      </Box>
      </Box>
      </CardContent>  
      </CardActionArea>
      <Snackbar open={isOpen} autoHideDuration={2000} onClose={()=>setIsOpen(false)}>
      <Alert  onClose={()=>setIsOpen(false)} severity="success" sx={{ width: '100%' }}>
          {name} wurde hinzugefügt
    </Alert>
      </Snackbar>
    </Card>   
    </Grid>
    </div>

  )
}
export default Pizza;