import NavBarContainer from './components/NavBar'
import './App.css';
import SectionOne from './components/SectionOne'
import SectionTwo from './components/SectionTwo'
import SectionThree from './components/SectionThree'
import SectionFour from './components/SectionFour'
//import './components/TextAnimation.css'
//import TextAnim from './components/TextAnimation'
import Footer from './components/Footer'

function App() {
  return (
    <div className='h-full w-full justify-between align-items items-center min-h-screen'>
      <div className='w-full'><NavBarContainer /></div>
      <div className='grid'>
        <div className='w-full lg:h-screen md:h-full sm:h-full mb-auto'>     
          <SectionOne />       
        </div>
        <div className='w-full lg:h-screen md:h-full sm:h-full mb-auto'>     
          <SectionTwo />       
        </div>
        <div className='w-full lg:h-screen md:h-full sm:h-full mb-auto'>     
          <SectionThree />       
        </div>
        <div className='w-full lg:h-screen md:h-full sm:h-full mb-auto'>     
          <SectionFour />       
        </div>
      </div>
      <div className='w-full'><Footer /></div>
    </div>
  )
}

export default App
