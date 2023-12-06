import NavBarContainer from './components/NavBar'
import './App.css'
import Footer from './components/Footer'

function App() {
  return (
    <div className='flex h-screen justify between'>
      <NavBarContainer />
      <div className='w-full h-screen mb-auto'>     
      
        <h1>Looking for an opportunity to expand?</h1>
      </div>
      
      <Footer />
    </div>
  )
}

export default App
