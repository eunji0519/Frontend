import { Button } from '@mui/material';
import React, { useState } from 'react'
import '../Layout/Header/Header.css'

export default function Contents() {
   const [isOpen, setMenu] = useState(false);  // 메뉴의 초기값을 false로 설정

   const toggleMenu = () => {
      setMenu(true); // on,off 개념 boolean
   }
   return (
      <>
         {/* <div id="contentsWrapper">
            <div className="markdown-body">
               <div className="css-dvpk2h">
                  <div className="contentsTitle">contentTitled</div>
                  <div className="contentsBody">contentsBody</div>
               </div>
            </div>
         </div> */}
      </>
   )
}
