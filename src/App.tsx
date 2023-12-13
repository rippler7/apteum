import NavBarContainer from './components/NavBar'
import './App.css';
import SectionOne from './components/SectionOne'
import SectionTwo from './components/SectionTwo'
import SectionThree from './components/SectionThree'
//import './components/TextAnimation.css'
//import TextAnim from './components/TextAnimation'
import Footer from './components/Footer'

function App() {
  return (
    <div className='flex flex-col h-screen w-full justify-between align-items items-center min-h-screen'>
      <div className='w-full'><NavBarContainer /></div>
      <div>
        <div className='w-full h-screen mb-auto'>     
          <SectionOne />       
        </div>
        <div className='w-full h-screen mb-auto'>     
          <SectionTwo />       
        </div>
        <div className='w-full h-screen mb-auto'>     
          <SectionThree />       
        </div>
      </div>
      <div className='w-full'><Footer /></div>
    </div>
  )
}

export default App
