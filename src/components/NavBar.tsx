import apteumLogo from '../assets/Apteum_logo_WHITE.svg'
import { Transition } from '@tailwindui/react'
import { useState } from 'react'
import '../components/Sidebar.css'

function NavBarContainer(){
    const [showSidebar, setShowSidebar] = useState(false);
    return(
  
            <div id='navigationBar' className='h-15 fixed flex justify-between p-3 w-full'>
                <div className='px-10'>
                    <a><img src={apteumLogo} width={120} alt=""  /></a>
                </div>
                <div className='flex align-right w-15 px-3'>                    
                    <div id="hMenu" onClick={()=>{setShowSidebar(!showSidebar)}} className={'hmbrgr w-100 align-right'}>
                        <br />
                    </div>          
        
                    <Transition 
                        show={showSidebar}
                        enter="transition-[right] ease-out duration-100 right-[35vw]"
                        enterFrom="right-0"
                        enterTo="right-[35vw]"
                        leave="transition-[right] ease-in duration-100 right-0"
                        leaveFrom="right-[35vw]"
                        leaveTo="right-0"
                    >
                        <div id='mSidebar' className='flex pt-10 right-0'>
                            <div className='grid grid-cols-2 justify-center h-10 items-center w-full'>
                                <div className='w-300 items-center align-middle text-center'>
                                <h4><br /></h4>
                                </div>
                                <div onClick={()=>{setShowSidebar(!showSidebar)}} className="w-50 text-right"><a>X</a></div>
                            </div>                        
                        </div>
                    </Transition>
                </div>
            </div>            
    
    )
}

export default NavBarContainer