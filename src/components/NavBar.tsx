import apteumLogo from '../assets/Apteum_logo_RGB.svg'
import lnIcon from '../assets/icons8-linkedin-100.svg'
function NavBarContainer(){
    return(
        
            <div id='navigationBar' className='h-15 relative flex justify-between p-3 w-full'>
                <div>
                    <img src={apteumLogo} width={100} alt=""  />
                </div>
                <div className='flex align-right pr-0 w-8'>                    
                    <div className='align-right'>
                        <a><img src={lnIcon} width={25} height={25} /></a>
                    </div>
                </div>
            </div>
        
    )
}

export default NavBarContainer