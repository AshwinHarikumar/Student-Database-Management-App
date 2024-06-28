import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          STUDENT APP
          </Typography>
          <Button ><Link to={"/"}style={{textDecoration:"none",color: "white"}}>HOME</Link></Button>
          <Button ><Link to={"/l"}style={{textDecoration:"none",color: "white"}}>LOGIN</Link></Button>
          <Button><Link to={"/s"}style={{ textDecoration:"none",color: "white"}}>SIGNUP</Link></Button>
          <Button><Link to={"/f"}style={{ textDecoration:"none",color: "white"}}>VIEW </Link></Button>
          <Button><Link to={"/i"}style={{ textDecoration:"none",color: "white"}}>ADD </Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  )
}

export default NavBar
