import ApteumW from '../assets/Apteum_logo_WHITE.svg'
import lnIconW from '../assets/icons8-linkedin-100-white.svg'
import { Link } from 'react-router-dom'
function Footer() {
    return (
        <div id='footerBar' className='grid bottom-0 lg:relative md:bottom-0 sm:bottom-0 grid-cols-1 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 bottom-0 mb-auto w-full justify-between items-center lg:text-right align-middle'>
            <div className='items-right align-middle px-10 py-10 md:align-center'>
                <Link to="/"><img src={ApteumW} height={50} width={130} alt="" className='items-center m-auto lg:ml-0' /></Link>
            </div>
            <div>
                <div className='grid justify-items-center lg:justify-items-end w-full items-center px-10 pt-3 sm:text-center lg:text-right'>
                    <div className='lg:grid w-full lg:w-[30vw] justify-items-center lg:justify-items-end sm:items-center md:items-center lg:items-right grid-cols-1 lg:grid-cols-3 md:grid-cols-1'>
                        <div className='px-2 sm:py-3 sm:text-center'>
                            <Link to="expertise"><a>Expertise</a></Link>
                        </div>
                        <div className='px-2 sm:py-3 sm:text-center'>
                            <Link to="ourstory"><a>Our Story</a></Link>
                        </div>
                        {/* <div className='px-2 sm:py-3 sm:text-center hidden'>
                            <a>Our Experts</a>
                        </div>
                        <div className='px-2 sm:py-3 sm:text-center hidden'>
                            <a>Careers</a>
                        </div>
                        <div className='px-2 sm:py-3 sm:text-center hidden'>
                            <a>FAQ</a>
                        </div>
                        <div className='px-2 sm:py-3 sm:text-center hidden'>
                            <a>Careers</a>
                        </div> */}
                        <div className='px-2 text-center'>
                            <a href="https://www.linkedin.com/company/apteumcorp/about/" target="_blank"><img src={lnIconW} width={25} height={25} className='m-auto md:m-auto lg:mr-0' /></a>
                        </div>
                    </div>
                </div>
                <div className='w-full items-center lg:text-right px-10 py-3'>
                    <h5>&#169; 2024 Apteum. All Rights Reserved.</h5>
                </div>
            </div>
        </div>
    )
}

export default Footer