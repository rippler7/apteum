import apteumLogo from '../assets/Apteum_logo_RGB.svg'
import '../components/Sidebar.css'

function NavBarContainer(){
    return(
    <>
            <div id='navigationBar' className='h-15 fixed flex justify-between p-3 w-full'>
                <div className='px-10'>
                    <a><img src={apteumLogo} width={120} alt=""  /></a>
                </div>
                <div className='flex align-right w-15 px-3'>                    
                    <div id="hMenu" className='hmbrgr w-100 align-right'>
                        <br />
                    </div>
                    <div id='mSidebar' className="mainSidebar">
                        <h4>This is a test.</h4>
                    </div>
                </div>
            </div>
            
    </>    
    )
}

export default NavBarContainer