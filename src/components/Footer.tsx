import ApteumW from '../assets/Apteum_logo_WHITE.svg'
import lnIconW from '../assets/icons8-linkedin-100-white.svg'
function Footer (){
    return(
        
            <div id='footerBar' className='flex bottom-0 fixed mb-auto w-full justify-between items-center align-middle'>
                <div className='items-center align-middle px-10'>
                        <img src={ApteumW} height={50} width={130} alt=""  />
                    </div>
                <div>
                <div className='flex flex-col justify-between w-full items-center px-10 pt-3'>
                    <div className='flex justify-between items-center w-150'>
                        <div className='px-2'>
                            <a>Expertise</a>
                        </div>
                        <div className='px-2'>
                            <a>Our Story</a>
                        </div>
                        <div className='px-2'>
                            <a>Our Experts</a>
                        </div>
                        <div className='px-2'>
                            <a>Careers</a>
                        </div>
                        <div className='px-2'>
                            <a>FAQ</a>
                        </div>
                        <div className='px-2'>
                            <a>Careers</a>
                        </div>
                        <div>
                            <a><img src={lnIconW} width={25} height={25} /></a>
                        </div>
                    </div>
                </div>
                <div className='w-full items-center text-right px-10 py-3'>
                    <h3>&#64; 2023 Apteum. All Rights Reserved.</h3>
                </div>
                </div>
            </div>
       
    )
}

export default Footer