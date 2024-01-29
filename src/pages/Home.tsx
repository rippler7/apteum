import SectionOne from '../components/SectionOne'
import SectionTwo from '../components/SectionTwo'
import SectionThree from '../components/SectionThree'
import SectionFour from '../components/SectionFour'
import SectionFive from '../components/SectionFive'
import SectionSix from '../components/SectionSix'
import SectionSeven from '../components/SectionSeven'
import { Helmet } from "react-helmet";

function Home() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Welcome to Apteum</title>
        <link rel="canonical" href="https://apteum.com" />
        <meta name="description" content="Apteum pairs you with professionals abroad to build bespoke staffing solutions" />
        <meta name="keywords" content="Apteum, customer service, people support, professional services, staffing solutions, staffing, expertise, service specialists, employers, jobseekers, project management, talented professionals, talent acquisition service, talent acquisition service, staff recruitment"></meta>
      </Helmet>
      <div className='h-full w-screen justify-between align-items items-center min-h-screen pb-0 md:pb-20'>

        <div>
          <div className='w-full lg:h-screen md:h-full sm:h-full mb-auto'>
            <SectionOne />
          </div>
          <div className='w-full md:h-full sm:h-full mb-auto bg-white'>
            <SectionTwo />
          </div>
          <div className='hidden md:block w-full md:h-full sm:h-full mb-auto'>
            <SectionThree />
          </div>
          <div className='w-full md:h-full sm:h-full mb-auto bg-white'>
            <SectionFour />
          </div>
          <div className='hidden md:block w-full md:h-full sm:h-full mb-auto bg-white md:bg-transparent'>
            <SectionSix />
          </div>
          <div className='w-full md:h-full sm:h-full mb-auto bg-transparent md:bg-white'>
            <SectionFive />
          </div>
          <div className='w-full mb-0 bg-white md:bg-transparent'>
            <SectionSeven />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home