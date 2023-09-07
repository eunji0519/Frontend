import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

export default function Sidebar() {

   const [isCheck, setCheck] = useState(false);
   const [isOpen, setOpen] = useState(false);
   const colors = ["red", "blue", "green", "yellow", "skyblue"];
   const colorList = colors.map((color) => <li>{color}</li>);
   const menuLst = ["menu1", "menu2", "menu3", "menu4", "menu5"];

   const [hide, setHide] = useState({
      menu1: false,
      menu2: false,
      menu3: false,
      menu4: false,
      menu5: false,
   });
   const mouseEvent = (menuName: any, bool: boolean) => {
      const change = { ...hide };
      change[menuName] = bool;
      setHide(change);
   };
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
            <div>
               <ul>{colorList}</ul>
            </div>
            <div>
               <nav className="nav">
                  <ul className="navContainer">
                     {menuLst.map((v, idx) => (
                        <li
                           className={hide[v] ? "active" : "none"}
                           onMouseEnter={() => mouseEvent(v, true)}
                           onMouseLeave={() => mouseEvent(v, false)}
                        >
                           <p>{`메뉴${idx + 1}`}</p>
                        </li>
                     ))}
                  </ul>
                  <div className="detailMenu">
                     {menuLst.map((v, idx) => (
                        <ul
                           onMouseEnter={() => mouseEvent(v, true)}
                           onMouseLeave={() => mouseEvent(v, false)}
                        >
                           <li>{`메뉴${idx + 1}-${1}`}</li>
                           <li>{`메뉴${idx + 1}-${2}`}</li>
                           <li>{`메뉴${idx + 1}-${3}`}</li>
                           <li>{`메뉴${idx + 1}-${4}`}</li>
                        </ul>
                     ))}
                  </div>
               </nav>
            </div>
         </div>
      </>
   )
}
