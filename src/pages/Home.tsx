import SectionOne from '../components/SectionOne'
import SectionTwo from '../components/SectionTwo'
import SectionThree from '../components/SectionThree'
import SectionFour from '../components/SectionFour'
import SectionFive from '../components/SectionFive'
import SectionSix from '../components/SectionSix'
import SectionSeven from '../components/SectionSeven'

function Home(){
    return(
        <div className='h-full w-full justify-between align-items items-center min-h-screen'>
      
      <div>
        <div className='w-full lg:h-screen md:h-full sm:h-full mb-auto'>     
          <SectionOne />       
        </div>
        <div className='w-full md:h-full sm:h-full mb-auto'>     
          <SectionTwo />       
        </div>
        <div className='w-full md:h-full sm:h-full mb-auto'>     
          <SectionThree />       
        </div>
        <div className='w-full md:h-full sm:h-full mb-auto'>     
          <SectionFour />       
        </div>
        <div className='w-full md:h-full sm:h-full mb-auto'>     
          <SectionFive />       
        </div>
        <div className='w-full md:h-full sm:h-full mb-auto'>     
          <SectionSix />       
        </div>
        <div className='w-full mb-auto'>     
          <SectionSeven />       
        </div>
      </div>
      </div>
    )
}

export default Home