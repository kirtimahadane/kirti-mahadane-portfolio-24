//import React from 'react';
import { Container, Typography, List, ListItem, Grid, Box , Stack} from '@mui/material';
import profileImage from "../assets/profileImage.jpg"
const About = () => {
  return (
    <Stack>
    <Container sx={{my:"150px"}}>
<Grid  container display="flex" flexDirection="row" justifyContent="center" alignItems="center">
<Grid item sx={{maxWidth:"500px", p:"20px"}}>
<Typography variant="h2">About Me</Typography>
      <Typography variant="body1">
      I entered into Web world in 2015 while looking for another working opportunity .
      I am looking for a remote front end developer job role , open to part time/full time(40 hrs /week) working hours. 
       
      </Typography>
      </Grid>
      <Grid item sx={{maxWidth:"300px"}}>
        <img src={profileImage}  className='br' />
        
      </Grid>
      </Grid>

      <Grid  container display="flex" flexDirection="row" justifyContent="center" alignItems="center" marginTop="50px" marginBottom="50px" marginRight="auto" 
      marginLeft="auto">
      <Grid item sx={{maxWidth:"500px", p:"20px"}}>
      <List> <Typography variant='h6'>Present skills include: 
        </Typography>
      <ListItem>Intermediate Level: HTML5, CSS3</ListItem>
      <ListItem> Beginner- Intermediate Level:Bootstrap5, Javascript (DOM, Form, async-await, api) </ListItem>
      <ListItem>Beginner Level:Reactjs(UseState, UseEffect Hooks, Forms, api), Matrial UI</ListItem>
     </List>
     </Grid>
     <Grid item sx={{maxWidth:"400px", p:"20px"}}> 
     
      <List>
      <Typography variant='h6'>
      Please visit LinkedIn profile to see  achievements:</Typography>
      <ListItem>Responsive Web Design Certificate from FreeCodeCamp.      </ListItem>
      <ListItem> CSS LinkedIn Assessment Badge      </ListItem>
      <ListItem>Javascript LinkedIn Assessment Badge.      </ListItem>
      </List>
    </Grid>
    </Grid>
      <Box sx={{  my:"70px", display:"flex" , flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
     <Typography variant="body1">
      Apart from web world , I enjoy doing yoga on weekdays. I like to go for long morning walk on 
    on weekends.  </Typography>

      </Box>
         </Container>
         </Stack>
  );
};

export default About;
