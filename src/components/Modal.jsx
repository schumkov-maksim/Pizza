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
    <Close onClick={()=>setModalOpen(false)} style={{cursor:"pointer"}}/>
    </Box>
    <Box sx={{display:"flex"}}>
    <Box width={500} height={300} sx={{display: "flex",  flexDirection:"column", maxWidth:"50%"}}>
    <TextField label="Ihre Name" variant="outlined" sx={{ mb: 2 }} value={name} onChange={(e)=>setName(e.target.value)} />
    <TextField label="Ihre Adresse" variant="outlined" sx={{ mb: 2 }} value={adress} onChange={(e)=>setAdress(e.target.value)} />
    <TextField label="E-mail" variant="outlined" sx={{ mb: 2 }} value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <Button variant="contained" onClick={()=>setModalOpen(false)} > Bestellen</Button>
    </Box>
    <Box sx={{ maxWidth:"50%" , ml:"20px"}}>
      {basketList.map((e)=> e.anzahl>0? 
        <div style={{display: "flex", alignItems:"center", marginBottom:"10px"}}>
           <Avatar
              src={e.url}
              sx={{ width: 50, height: 50 }}/> 
        <Typography variant="body1" sx={{ml:"20px"}}> {e.anzahl} Stück  {e.name}, {e.price} Euro</Typography>
        </div>:""
      )}
      
<Typography variant="h6" > Price: {total} Euro </Typography>
    </Box>
    </Box>
  </Box> :"" }   
        
      </div>
    );
  
}

export default Modal