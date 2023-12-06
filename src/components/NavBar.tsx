import apteumLogo from '../assets/Apteum_logo_RGB.svg'
function NavBarContainer(){
    return(
        <>
            <div id='navigationBar' className='flex justify-between p-3'>
                <div>
                    <img src={apteumLogo} height={20} width={100} alt=""  />
                </div>
                <div className='flex justify-between align-center px-5 pl-5'>
                    <div clear-right>
                        <a>link 1</a>
                    </div>
                    <div>
                        <a>link 2</a>
                    </div>
                    <div>
                        <a>link 3</a>
                    </div>
                    <div>
                        <a>link 4</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBarContainer