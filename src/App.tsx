import './App.css';
import './components/Sidebar.css'
import Home from './pages/Home'
import Expertise from './pages/Expertise'
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
        </Route>
      </Routes>    
      <div className='w-full'><Navbar /></div>  
      <div className='w-full'><Footer /></div>
    </>

  )
}

export default App
