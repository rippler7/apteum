import NavBarContainer from './components/NavBar'
import './App.css'
import Footer from './components/Footer'

function App() {
  return (
    <div className='flex flex-col h-screen justify-between align-items'>
      <div><NavBarContainer /></div>
      <div className='w-full h-screen mb-auto'>     
      
        <h1>Looking for an opportunity to expand?</h1>
      </div>
      <div><Footer /></div>
    </div>
  )
}

export default App
