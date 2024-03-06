//import React from 'react';

import { Box, Container, Typography, TextField ,  Button } from '@mui/material';

import { TextareaAutosize } from '@mui/base/TextareaAutosize';
//import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize'
import { useState , useEffect} from 'react';

const Contact = () => {
  const [firstName, setFirstName]= useState("");
  const [lastName, setLastName]= useState("") ;
  const [email, setEmail]= useState("")
  const [message, setMessage]= useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if ( window.location.search.includes('success=true') ) {
      setSuccess(true);
    }
  }, []);
  return (
    <Container sx={{
    width:"100%", 
    marginTop:"150px", 
    display:"flex", 
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center"}}>
      <Typography variant="h2">Contact Me</Typography>
      <Typography variant="body1">
        I am looking for a remote job / work opportunity where I can learn, grow and contribute
      </Typography>
      {success && (
          <Typography sx={{color:"green"}}>Thanks for your message! </Typography> 
        )}
      <Box  component="form"  
        name="contactr" 
       method="POST" 
       data-netlify="true" 
       action="/contact" 
       sx={{marginTop:"30px", textAlign:"center", 
      mx:"30px", maxWidth:"900px", width:"100%", display:"flex", justifyContent:"center" , flexDirection:"column", alignItems:"center",boxSizing:"border-box"}}>
        <input type="hidden" name="contactr" value="contactr" />
        
        <TextField id="firstName" 
        label="First Name" 
        variant="filled" 
         required
         name="firsName"
         value={firstName}
         onChange={(e)=>setFirstName(e.target.value)}
         sx={{marginTop:"30px",  margin: "auto", maxWidth:"100%", width:"100%"}}
          /><br/>
         <TextField id="lastName" 
        label="Last Name" 
        variant="filled" 
         required
         name="lastName"
         value={lastName}
         onChange={(e)=>setLastName(e.target.value)}
         sx={{marginTop:"30px",  margin: "auto",   maxWidth:"100%",  width:"100%"}}
         /><br/>
         <TextField 
         id="email" 
        label="Email" 
        variant="filled" 
         required
         name="email"
         value={email}
         onChange={(e)=>setEmail(e.target.value)}
         sx={{marginTop:"30px",  marginRight: "auto", marginLeft:"auto",  maxWidth:"100%", width:"100%"}}
          /><br/>
          <TextareaAutosize
         placeholder="Your message"
         value={message} name="message" id="message"
         onChange={(e)=>setMessage(e.target.value) }         
         
         sx={{boxSizing:"border-box", maxWidth:"100%", width:"100%"}}
        
              /> 
        <Box component="div" sx={{margin:"auto", maxWidth:"600px", width:"600px", textAlign:"center"}}>
        <Button type="submit" sx={{color:"black", bgcolor:"warning.main"}}>Send</Button>
        </Box>
                       </Box>
    </Container>
  );
};

export default Contact;
