import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Page1 from '../../Page1'
import Home from '../../Home'

export default function HeaderRouter() {
   return (
      <>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/page1" element={<Page1 />} />
         </Routes>
      </>
   )
}
