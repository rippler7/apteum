import NavBarContainer from './components/NavBar'
import './App.css'
import Footer from './components/Footer'

function App() {
  return (
    <div className='flex flex-col h-screen w-full justify-between align-items'>
      <div className='w-full'><NavBarContainer /></div>
      <div className='w-full h-screen mb-auto'>     
      
        <h1>Looking for an opportunity to expand?</h1>
      </div>
      <div className='w-full'><Footer /></div>
    </div>
  )
}

export default App
