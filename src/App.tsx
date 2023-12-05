import NavBar from './components/NavBar'
import apteumLogo from '/Apteum_logo_RGB.svg'
import './App.css'

function App() {
  return (
    <>
      <div className='navbarArea w-full h-screen'>
        <div className='navbarArea w-full h-screen'><NavBar /></div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={apteumLogo} className="logo" alt="Apteum logo" />
        </a>
      </div>
      <h1>Looking for an opportunity to expand?</h1>
      
      <p className="read-the-docs">
        Click on the logo to learn more
      </p>
    </>
  )
}

export default App
