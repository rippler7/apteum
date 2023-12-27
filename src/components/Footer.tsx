import ApteumW from '../assets/Apteum_logo_WHITE.svg'
import lnIconW from '../assets/icons8-linkedin-100-white.svg'
import { Link } from 'react-router-dom'
function Footer() {
    return (

        <div id='footerBar' className='grid lg:fixed md:bottom-0 sm:bottom-0 lg:grid-cols-2 bottom-0 mb-auto w-full justify-between items-center text-right align-middle'>
            <div className='items-right align-middle px-10 py-10 md:align-center'>
                <Link to="/"><img src={ApteumW} height={50} width={130} alt="" className='items-center' /></Link>
            </div>
            <div>
                <div className='flex justify-items-end w-full items-center px-10 pt-3 text-right'>
                    <div className='flex w-full justify-end items-end'>
                        <div className='px-2'>
                            <Link to="expertise"><a>Expertise</a></Link>
                        </div>
                        <div className='px-2'>
                            <Link to="ourstory"><a>Our Story</a></Link>
                        </div>
                        <div className='px-2 hidden'>
                            <a>Our Experts</a>
                        </div>
                        <div className='px-2 hidden'>
                            <a>Careers</a>
                        </div>
                        <div className='px-2 hidden'>
                            <a>FAQ</a>
                        </div>
                        <div className='px-2 hidden'>
                            <a>Careers</a>
                        </div>
                        <div>
                            <a><img src={lnIconW} width={25} height={25} /></a>
                        </div>
                    </div>
                </div>
                <div className='w-full items-center text-right px-10 py-3'>
                    <h4>&#169; 2024 Apteum. All Rights Reserved.</h4>
                </div>
            </div>
        </div>

    )
}

export default Footer