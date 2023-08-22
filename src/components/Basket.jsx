import { Close, Delete } from '@mui/icons-material';
import { Avatar, Box, Button, Drawer, Grid, Stack, Typography } from '@mui/material'

function Basket ({isDrawerOpen, isSetsDrawerOpen, basketList, setBasketList, total, setModalOpen, addPizza}) {

function deleteItem(id, name){
  let array=[...basketList]

  if(array[id].anzahl>=1  ){
    array[id].anzahl-=1;
    setBasketList(array)  
  }
  }   
   return (    
<>
    <Drawer
 
            anchor="right"
            open={isDrawerOpen}
            sx={{width:900}}
            onClose={()=>isSetsDrawerOpen(false)}            
            >
              <Grid width={250}>
          <Stack spacing={{ xs: 1, sm: 2 }} direction="row" justifyContent={"space-between"} mt={5}>
           <Typography variant='h6'>Liste</Typography>     
           <Close onClick={()=>isSetsDrawerOpen(false)}/>
           </Stack>
            { basketList.map((item)=> item.anzahl>0? 
            <Box sx={{ display: 'flex', m:3, justifyContent:"space-around"}}>           
             <Box >
             <Avatar
              src={item.url}
              sx={{ width: 100, height: 100 }}/> 
             </Box>
             <Box>
              <Typography>{item.name}</Typography>
              <Typography>{item.price} Euro</Typography>
              <Typography>Anzahl: {item.anzahl} </Typography>
            </Box>
              <Box><Delete onClick={()=>deleteItem(item.id, item.name, item.price)}/></Box>
              </Box>: "")            
            }
            <Typography variant='body2'>Insgesammt: { total } Euro </Typography>
            <Button variant='contained' onClick={()=>setModalOpen(true)}> Bestellen</Button>
            </Grid>
          </Drawer>
    </>
  )
}

export default Basket