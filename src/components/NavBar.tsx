import apteumLogo from '../assets/Apteum_logo_RGB.svg'
import Sidebar from '../components/Sidebar'
// import hmbrgr from '../assets/Hamburger.svg';


function NavBarContainer(){
    return(
    <>
            <div id='navigationBar' className='h-15 fixed flex justify-between p-3 w-full'>
                <div className='px-10'>
                    <a><img src={apteumLogo} width={120} alt=""  /></a>
                </div>
                <div className='flex align-right w-15 px-3'>                    
                    <div className='hmbrgr w-100 align-right'>
                        &nbsp;
                    </div>
                </div>
            </div>
            <Sidebar />
    </>    
    )
}

export default NavBarContainer