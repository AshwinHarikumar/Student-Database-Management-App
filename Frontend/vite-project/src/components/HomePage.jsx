import React from 'react';
import { AppBar, Toolbar, Typography, Container, Grid, Paper, Button } from '@mui/material';
import './HomePage.css'; 

const HomePage = () => {
  return (
    <div className="background">
      <Container maxWidth="md" className="content-container">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper elevation={3} className="paper-style">
              <Typography variant="h4" component="h1" gutterBottom className="welcome-text">
               <b>STUDENT DATABSE MANAGEMENT SYSTEM</b>
              </Typography>
              <p>
              Welcome to our Student Management System! 
              This platform is designed to streamline and enhance the management of student data and activities, making it easier for educators, administrators, and students to interact and collaborate. Whether you're checking grades, managing schedules, or tracking progress, our system offers a user-friendly interface and powerful tools to support your educational journey. Thank you for being a part of our community, and we look forward to helping you achieve your academic goals!</p>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default HomePage;
