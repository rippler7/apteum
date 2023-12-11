import NavBarContainer from './components/NavBar'
import './App.css';
import SectionOne from './components/SectionOne'
//import './components/TextAnimation.css'
//import TextAnim from './components/TextAnimation'
import Footer from './components/Footer'

function App() {
  return (
    <div className='flex flex-col h-screen w-full justify-between align-items'>
      <div className='w-full'><NavBarContainer /></div>
      <div className='w-full h-screen mb-auto'>     
        <SectionOne />       
      </div>
      <div className='w-full'><Footer /></div>
    </div>
  )
}

export default App
