import apteumLogo from '../assets/Apteum_logo_RGB.svg'
import {useState} from 'react'
import '../components/Sidebar.css'


function NavBarContainer(){
    const [showSidebar, setShowSidebar] = useState(false);
    const toggleMenu = () => {
        setShowSidebar(!showSidebar);
        console.log(showSidebar);
    }
    return(
    <>
            <div id='navigationBar' className='h-15 fixed flex justify-between p-3 w-full'>
                <div className='px-10'>
                    <a><img src={apteumLogo} width={120} alt=""  /></a>
                </div>
                <div className='flex align-right w-15 px-3'>                    
                    <div id="hMenu" onClick={toggleMenu} className={'hmbrgr w-100 align-right'}>
                        <br />
                    </div>                    
                    <div id='mSidebar' onClick={toggleMenu} className={'bg-[#DFBEA6] w-35vw p-10 fixed h-full right-0 w-35vw top-0 ${showSidebar ?  "visible" : "invisible" }'}>                        
                        <h4>This is a test.</h4>
                    </div>
                </div>
            </div>
            
    </>    
    )
}

export default NavBarContainer