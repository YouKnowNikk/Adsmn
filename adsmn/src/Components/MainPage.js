import React from 'react'
import NavBar from './NavBar'
import RS1 from './RS1'
import RS2 from './RS2'
import { Routes, Route } from 'react-router-dom';
import PageNotFound from './PageNotFound';
import RS3 from './RS3';
import RS4 from './RS4';
import RS5 from './RS5';
import RS6 from './RS6';
function MainPage() {
  return (
    <>
      <div style={{ minHeight: '100%' }}>
        <NavBar />
        <Routes>
          <Route path="/" element={<RS1 />} />
          <Route path="/rs2" element={<RS2 />} />
          <Route path='/rs3' element = {<RS3 />} />
          <Route path='/rs4' element = {<RS4/>}/>
          <Route path='/rs5' element ={<RS5/>}/>
          <Route path='/rs6' element ={<RS6/>}/>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </>

  )
}

export default MainPage