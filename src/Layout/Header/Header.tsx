import { Box, Button, Grid, Toolbar, Typography } from '@mui/material';
import './Header.css';
import { BrowserRouter, Link, NavLink, Route, Routes, Search } from 'react-router-dom';
import HeaderRouter from './HeaderRouter';
import { useState } from 'react';

export default function Header() {
   const [isCheck, setCheck] = useState(false);
   return (
      <>
         <div className="headWapper">
            <BrowserRouter>
               <header style={{
                  width: "100%",
                  border: "solid 1px red",
                  paddingLeft: "24px",
                  paddingRight: "24px",
                  display: "flex",
                  position: "relative",
                  alignItems: "center",
                  height: "60px",
               }}>
                  <p style={{
                     // margin: "0",
                     fontWeight: "bolder",
                     border: "solid 1px red",
                     fontSize: "1rem",
                     lineHeight: "1.5",
                     letterSpacing: "0.00938em",
                  }}>df</p>
                  <Box sx={{ flexGrow: 1 }}>
                  </Box>
               </header>
               {/* <header style={{
                  width: "100%",
                  height: "calc(100%-20px)",
                  border: "solid 1px red",
                  // padding: "10px 0px",
                  textAlign: "right"
               }}>
                  <div style={{
                     color: "black", margin: "8px",
                  }}>ddf</div> */}
               {/* <Box component="span" sx={{ p: 2, border: '1px dashed grey' }}>
                     <Button variant="contained">Save</Button>
                  </Box>
                  <Box component="span" sx={{ p: 2, border: '1px dashed grey' }}>
                     <Button>Save</Button>
                  </Box> */}
               {/* <NavLink to="/page1" style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}>page1</NavLink> */}
               {/* </header> */}
               {/* <Toolbar style={{
                  height: "60px",
                  border: "solid 1px red",
               }} variant="dense"></Toolbar> */}
               <HeaderRouter />
            </BrowserRouter>
         </div >
      </>
   )
}
