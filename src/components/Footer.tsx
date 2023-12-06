import ApteumW from '../assets/Apteum_logo_WHITE.svg'

function Footer (){
    return(
        
            <div id='footerBar' className='flex absolute bottom-0 justify-between px-15 p-3 w-full items-start'>
                <div>
                    <img src={ApteumW} height={20} width={100} alt=""  />
                </div>
                <div className='flex flex-wrap justify-between items-center w-50 '>
                    <div>
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
       
    )
}

export default Footer