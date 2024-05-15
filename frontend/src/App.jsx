import React from "react";
import Login from "./Components/Login";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Signup from "./Components/Signup";
import Home from "./Components/Home";
import Main from "./view/Main";

function App(){                     
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/home' element={<Home/>}></Route>


      <Route path='/main' element={<Main/>}></Route>
    </Routes>
    
    </BrowserRouter>
  )
}
export default App;

