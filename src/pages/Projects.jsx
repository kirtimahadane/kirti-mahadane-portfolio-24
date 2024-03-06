//import React from 'react'
import { Container, Typography, Box,  Grid, Link } from '@mui/material';
//import { Link } from 'react-router-dom';
import projectOneImg from "../assets/project-1.png";
import projectTwoImg from "../assets/project-2.png"
import projectThreeImg from "../assets/project-3.png";
const Projects = () => {
  return (
  
 <Container sx={{maxWidth:"1000px", display:"flex", flexDirection:"column",  justifyContent:"center",
 alignItems:"center", my:"150px"}}>
        <Box sx={{my:"25px"}}>
        <Typography variant='h2'>My Projects</Typography>
        </Box>
        
      <Grid container  sx={{maxWidth:"100%", display:"flex", gap:"50px" ,justifyContent:"center",
 alignItems:"center", my:"50px"}}>
      <Grid item sx={{maxWidth:"275px", display:"flex", flexDirection:"column", justifyContent:"center",
 alignItems:"center", gap:"30px", textAlign:"center"}}>
        <Box>
        <Link href="https://kirti-mahadane-me-qkart-frontend-v2.vercel.app/" target="_blank"><img src={projectOneImg} className='br-pr'/></Link>

        </Box>
        <Box>
          <Typography variant='h6'>Qkart-Front-end </Typography>
          <Typography variant='body1' sx={{textAlign:"justify", my:"10px"}}>
            In this project, I got overview of how modern e-commerce website  frontend is built.
            The tech stack I got exposure to is   reactjs and mui and  rest api.         </Typography>
          </Box>    
      </Grid>
      
      <Grid item sx={{maxWidth:"275px", display:"flex", flexDirection:"column", justifyContent:"center",
 alignItems:"center", gap:"30px", textAlign:"center"}}>
      <Box>
        <Link href="https://qtripdynamic-11.netlify.app/" target="_blank"><img src={projectTwoImg} className='br-pr'/></Link>

        </Box>
        <Box>
          <Typography variant='h6'>QTrip Dynamic </Typography>
          <Typography variant='body1' sx={{textAlign:"justify", my:"10px"}}>
          In this project, I got overview of how to build dynamic websites with html5, css3 and javascript and bootstrap.
                      
                 </Typography>
          </Box>
      </Grid>
      <Grid item sx={{maxWidth:"275px", display:"flex", flexDirection:"column", justifyContent:"center",
 alignItems:"center", gap:"30px", textAlign:"center"}}>
      <Box>
        <Link href="https://kirtimahadane-qtrip.netlify.app/" target="_blank"><img src={projectThreeImg} className='br-pr'/></Link>

        </Box>
        <Box >
          <Typography variant='h6'>QTrip Static </Typography>
          <Typography variant='body1' sx={{textAlign:"justify", my:"10px"}}>
            This static travel website is built with Bootstrap, html, css and JS.
            By clicking on city Bengaluru, you can explore adventures and finally go to detail page. 
                     </Typography>
          </Box> 
      </Grid>
      </Grid>
        
      
    </Container>

  
     )
}

export default Projects
