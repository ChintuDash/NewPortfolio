
import './App.css'
import Navbar from './component/navbar';
import Home from './component/home';
import Tools from './component/tools';
import Project from './component/project';
import Contact from './component/contact';
import { Route, Routes } from 'react-router-dom';
function App() {
 

  return (
    <>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Tools" element={<Tools/>}/>   
          <Route path="/Project" element={<Project/>}/>
          <Route path="/Contact" element={<Contact/>}/>
        </Routes>
     
    </>
  )
}

export default App
