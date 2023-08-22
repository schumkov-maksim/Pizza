import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import  "../components/styles/Modal.css";
import { Close } from "@mui/icons-material";
import { useState } from "react";

function Modal({setModalOpen, modalOpen, total, basketList}) {
const [name, setName] =useState("")
const [adress, setAdress] = useState("")
const [email, setEmail] = useState("") 


    return (
      <div>
        {modalOpen?   <Box className="modal">
          <Box sx={{display: "flex", justifyContent:"space-between"}}>
            <Typography id="modal-modal-title" variant="h6" component="h2" >
      Ihre Bestellungen
    </Typography>
    <Close onClick={()=>setModalOpen(false)}/>
    </Box>
    <Box sx={{display:"flex"}}>
    <Box width={500} height={300} sx={{display: "flex",  flexDirection:"column", maxWidth:"50%"}}>
       <TextField label="Ihre Name" variant="outlined" sx={{ mb: 2 }} value={name} onChange={(e)=>setName(e.target.value)} />
    <TextField label="Ihre Adresse" variant="outlined" sx={{ mb: 2 }} value={adress} onChange={(e)=>setAdress(e.target.value)} />
    <TextField label="E-mail" variant="outlined" sx={{ mb: 2 }} value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <Button variant="contained" > Bestellen</Button>
    </Box>
    <Box sx={{ maxWidth:"50%"}}>
      {basketList.map((e)=>
        <div style={{display: "flex", alignItems:"center", justifyContent:"space-between"}}>
           <Avatar
              src={e.url}
              sx={{ width: 50, height: 50 }}/> 
        <Typography variant="body1"> Pizza: {e.name} {e.price} Euro,  Anzahl {e.anzahl} Stück</Typography>
        </div>
      )}
      
<Typography variant="h6" > Price: </Typography>
<Typography variant="h6">{total} Euro </Typography>
    </Box>
    </Box>
  </Box> :"" }   
        
      </div>
    );
  
}

export default Modal