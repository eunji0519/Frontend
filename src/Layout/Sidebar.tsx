import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

export default function Sidebar() {

   const [isCheck, setCheck] = useState(false);
   const [isOpen, setOpen] = useState(false);

   return (
      <>
         <div id="sideWapper">
            <div
               style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "10px",
                  boxSizing: "border-box",
                  backgroundColor: "gray",
                  width: "100%",
                  height: "60px",
                  color: "#fff"
               }}
            >
               <h1 style={{ fontSize: "30px" }}>adf</h1>
               <button
                  onClick={() => {
                     setCheck((e) => !e);
                  }}
               >
                  {isCheck ? "-" : "+"}
               </button>
            </div>
            {isCheck && (
               <p
                  style={{
                     margin: "0",
                     backgroundColor: "skyblue",
                     color: "#fff",
                     padding: "10px"
                  }}
               >
                  dasf
               </p>
            )}
            <div
               style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "10px",
                  boxSizing: "border-box",
                  backgroundColor: "gray",
                  width: "100%",
                  height: "60px",
                  color: "#fff"
               }}
            >
               <h1 style={{ fontSize: "30px" }}>adf</h1>
               <button
                  onClick={() => {
                     setOpen((e) => !e);
                  }}
               >
                  {isOpen ? "-" : "+"}
               </button>
            </div>
            {isOpen && (
               <p
                  style={{
                     margin: "0",
                     backgroundColor: "skyblue",
                     color: "#fff",
                     padding: "10px"
                  }}
               >
                  dasf
               </p>
            )}
            <div>
               <ul>
                  <li>아메리카노</li>
                  <li>카페라떼</li>
                  <li>핫초코</li>
                  <li>차
                     {isOpen && (
                        <ul>
                           <li>녹차</li>
                           <li>홍차</li>
                           <li>자스민차</li>
                        </ul>
                     )}
                  </li>
               </ul>
            </div>
         </div>
      </>
   )
}
