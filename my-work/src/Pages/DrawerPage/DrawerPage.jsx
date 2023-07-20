import { AppBar, Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import { AiFillHome, AiFillStar, AiFillSetting, AiOutlineMenu, AiOutlineFileDone } from 'react-icons/ai';
import { GrCircleInformation } from 'react-icons/gr';
import MainPage from "../MainPage/MainPage";
import Setting from "../Setting/Setting";
import Starred from "../Starred/Starred";
import './DrawerPage.css'
import AboutUs from "../About/AboutUs";
import Done from "../Done/Done";


function DrawerPage() {
  const [showPage, setShowPage] = useState('Home');
  const [open, setOpen] = useState(false);

  function homeFunction() {
    setShowPage('Home');
    // setOpen(false);
  }

  function starFunction() {
    setShowPage('Starred');
    // setOpen(false);
  }
  function settingFunction() {
    setShowPage('Setting');
    // setOpen(false);
  }
  function aboutFunction() {
    setShowPage('About');
    // setOpen(false);
  }
  function doneFunction(){
    setShowPage('Done');
  }
  return (
    <>
      <Box sx={{ display: 'flex' }} >
        <AppBar sx={{ width: `100%` }} className="Appbar">
          <Toolbar>
            <IconButton onClick={() => setOpen(true)}>
              <AiOutlineMenu color="white"/>
            </IconButton>

            <Typography variant="h5">
              TO DO
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer sx={{
          '& .MuiDrawer-paper': {
            width: 250,
            boxSizing: 'border-box',
          },
        }}

          variant="fixed" anchor="left" open={open}
          className="Drawer"
          onClick={()=>setOpen(false)}
        >
          <div className="List_wrapper">
          <List className="List">
            <ListItem disablePadding onClick={() => homeFunction()}>
              <ListItemButton>
                <ListItemIcon>
                  <AiFillHome size={25} color="black"/>
                </ListItemIcon>
                <ListItemText primary='Home'/>
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />
          <List className="List">
            <ListItem disablePadding onClick={() => starFunction()}>
              <ListItemButton>
                <ListItemIcon>
                  <AiFillStar size={25} color="black"/>
                </ListItemIcon>
                <ListItemText primary='Starred'/>
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />
          <List className="List">
            <ListItem disablePadding onClick={() => doneFunction()}>
              <ListItemButton>
                <ListItemIcon>
                  <AiOutlineFileDone size={25} color="black"/>
                </ListItemIcon>
                <ListItemText primary='Done' />
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />
          <List className="List">
            <ListItem disablePadding onClick={() => settingFunction()}>
              <ListItemButton>
                <ListItemIcon>
                  <AiFillSetting size={25} color="black"/>
                </ListItemIcon>
                <ListItemText primary='Settings' />
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />
          <List className="List">
            <ListItem disablePadding onClick={() => aboutFunction()}>
              <ListItemButton>
                <ListItemIcon>
                  <GrCircleInformation size={25} color="black"/>
                </ListItemIcon>
                <ListItemText primary='About' />
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />
          </div>
        </Drawer>
        <Box sx={{ flexGrow: 1, bgcolor: 'background.default', p: 0 }}>
          <Toolbar />
          {showPage === 'Home' && <MainPage />}
          {showPage === 'Starred' && <Starred />}
          {showPage === 'Setting' && <Setting />}
          {showPage === 'About' && <AboutUs />}
          {showPage === 'Done' && <Done />}
        </Box>
      </Box>

    </>
  )
}
export default DrawerPage;


