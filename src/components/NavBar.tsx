import apteumLogo from '../assets/Apteum_logo_RGB.svg'
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton
} from '@material-tailwind/react'
function NavBarContainer(){
    return(
            <div className='flex justify-between'>
                <div>
                    <a>link</a>
                </div>
                <div>
                    <img src={apteumLogo} height={20} width={100} alt=""  />
                </div>
                <div>
                    <a>link</a>
                </div>
            </div>
    )
}

export default NavBarContainer