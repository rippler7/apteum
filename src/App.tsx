import './App.css';
import './components/Sidebar.css'
import Home from './pages/Home'
import Expertise from './pages/Expertise'
import Story from './pages/Story'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/NavBar'

function App() {

  return (
    <>            
      <Routes>
        <Route path="/">
          <Route path="/" index element={<Home />} />
          <Route path='expertise' element={<Expertise />} />
          <Route path='ourstory' element={<Story />} />
        </Route>
      </Routes>    
      <div className='w-full'><Navbar /></div>  
      <div className='w-full sm:relative md:absolute'><Footer /></div>
    </>

  )
}

export default App
