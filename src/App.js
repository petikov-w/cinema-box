import React from 'react';
import {Routes, Route} from "react-router-dom"
import styled from 'styled-components';

import { Homepage } from "./pages/Homepage";
import { Blogpage } from "./pages/Blogpage";
// import { Singlepage } from "./pages/Singlepage";
// import { Aboutpage } from "./pages/Aboutpage";
import { Notfoundpage } from "./pages/Notfoundpage";
import { Layout } from "./components/Layout";



const App = () => {
   
    return (    
      <>
          <Routes>
              <Route path="/" element={<Layout />} >
                  <Route index element={<Homepage />} />
                  <Route path="posts" element={<Blogpage />} />
                  {/* <Route path="posts/:id" element={<Singlepage />}/> */}
                  <Route path="*" element={<Notfoundpage />} />
              </Route>
          </Routes>
      </>
            

    )
}

export default App

{/* <Routes>
              <Route path="/" element={<Layout />} >
                  <Route index element={<Homepage />} />
                  <Route path="posts" element={<Blogpage />} />
                  <Route path="posts/:id" element={<Singlepage />}/>
                  <Route path="about/*" element={<Aboutpage />} />       
                  <Route path="*" element={<Notfoundpage />} />
              </Route>
</Routes> */}