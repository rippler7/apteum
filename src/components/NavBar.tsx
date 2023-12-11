import apteumLogo from '../assets/Apteum_logo_RGB.svg'
// import hmbrgr from '../assets/Hamburger.svg';
function NavBarContainer(){
    return(
        
            <div id='navigationBar' className='h-15 fixed flex justify-between p-3 w-full'>
                <div>
                    <img src={apteumLogo} width={100} alt=""  />
                </div>
                <div className='flex align-right pr-0 w-8'>                    
                    <div className='hmbrgr w-100 align-right'>
                        &nbsp;
                    </div>
                </div>
            </div>
        
    )
}

export default NavBarContainer