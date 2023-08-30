import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Page1 from './Page1';
import { AppBar, Button, Divider, ListItemIcon, ListItemText, Menu, MenuItem, MenuList, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Check } from '@mui/icons-material';

export default function App() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorEl1, setAnchorEl1] = useState<null | HTMLElement>(null);
  const open1 = Boolean(anchorEl1);
  const handleClick1 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleClose1 = () => {
    setAnchorEl1(null);
  };

  return (
    <>
      <div id="headWapper">
        <BrowserRouter>
          <AppBar style={{
            height: "60px",
          }} position="static">
            <Toolbar style={{
              height: "60px",
            }} variant="dense">
              <Typography variant="h6" color="inherit">
                Title
              </Typography>
              <Button
                id="basic-button"
                color="inherit"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                Dashboard
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem onClick={handleClose}><Link style={{
                  textDecorationLine: "none",
                  color: "inherit",
                }} to="/">홈가기</Link></MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
              <Button
                id="menu2"
                color="inherit"
                aria-controls={open1 ? 'menu2' : undefined}
                aria-haspopup="true"
                aria-expanded={open1 ? 'true' : undefined}
                onClick={handleClick1}
              >menu2</Button>
              <Menu
                id="menu2"
                anchorEl={anchorEl1}
                open={open1}
                onClose={handleClose1}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuList style={{
                  display: "contents",
                }} dense>
                  <MenuItem>
                    <ListItemText inset><Link style={{
                      textDecorationLine: "none",
                      color: "inherit",
                    }} to="page1">Page1</Link></ListItemText>
                  </MenuItem>
                  <MenuItem>
                    <ListItemText inset>1.15</ListItemText>
                  </MenuItem>
                  <MenuItem>
                    <ListItemText inset>Double</ListItemText>
                  </MenuItem>
                  <Divider />
                  <MenuItem>
                    <ListItemText>Add space before paragraph</ListItemText>
                  </MenuItem>
                  <MenuItem>
                    <ListItemText>Add space after paragraph</ListItemText>
                  </MenuItem>
                  <Divider />
                  <MenuItem>
                    <ListItemText>Custom spacing...</ListItemText>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Toolbar>
          </AppBar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/page1" element={<Page1 />} />
          </Routes>
        </BrowserRouter>
      </div>
      <div id="sideWapper">
        {/* <BrowserRouter>
          <ul>
            <li><Link to="/">홈가기</Link></li>
            <li><Link to="page1">page1</Link></li>
          </ul>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/page1" element={<Page1 />} />
          </Routes>
        </BrowserRouter> */}
      </div>
      <div id="contentsWrapper">
        <div className="contentsTitle">contentTitle</div>
        <div className="contentsBody">contentsBody</div>
      </div>
    </>
  );
}