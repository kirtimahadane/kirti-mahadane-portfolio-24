
//import React from 'react';
//import Nav from './Nav';
import { Container, Typography, Button, Box, Stack } from '@mui/material';
import { Link } from 'react-router-dom';



const Home = () => {
  return (
    <>
    {/* <Nav/> */}
  
      <Stack className='home-bg'>  
    <Container >
      <Box className="home-text" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Typography variant="h2">Hi! This is Kirti Mahadane.</Typography>
      <Typography variant="h4">Remote Frontend Developer</Typography>
      <Button  sx={{color:"black", bgcolor:"warning.main" , my:"20px"}} component={Link} to="/contact">
        Contact Me!
      </Button>

      </Box>
          </Container>
          </Stack>
    </>
  );
};

export default Home;
