import apteumLogo from '../assets/Apteum_logo_WHITE.svg'
import aLogo from '../assets/Apteum_logo_RGB.svg'
import '../components/Sidebar.css'
import { Link } from 'react-router-dom'



function NavBarContainer(){

    return(  
      <div id='navigationBar' className='h-15 fixed flex justify-between p-3 w-full z-100'>
      <div className='px-10'>
        <a><img src={apteumLogo} width={120} alt="" /></a>
      </div>
      <div className='logoCenter items-center m-auto'>
      <Link to="/"><img src={aLogo} width={155} className='p-0' /></Link>
      </div>
      <div className='flex align-right w-15 px-3'>
        <div id="hMenu" className={'hmbrgr w-100 align-right m-auto'}>
          <br />
        </div>
        <div id='mSidebar' className='transition duration-100 grid w-full pt-10'>
          <div className='flex flex-col justify-center w-full h-10 text-right items-center sm:w-full'>
            <div className='w-full items-center align-middle text-center'>
              <h4><br /></h4>
            </div>
            <div className='w-full items-center align-middle text-center'>
              <h4><br /></h4>
            </div>
            <div className='w-full items-center align-middle text-center'>
              <h4><br /></h4>
            </div>
            <div className='w-full items-center align-middle text-center'>
              <h4><br /></h4>
            </div>
            <div className="text-right w-full align-middle">
              <a className='closeBtn w-full'>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className='transition-colors transform duration-500 cursor-pointer color-[#213547] hover:color-[#FFF] text-right w-full'>
                  <path className='xBtnClose hidden' d="M40 35.9825C39.7889 33.4723 39.001 31.689 37.5377 30.6191C36.201 29.6451 34.8925 28.5478 33.5558 27.6013C32.0503 26.5313 30.6151 25.3242 29.3066 23.7467C29.0533 23.4312 28.7579 23.2117 28.4765 22.9374C28.0966 22.4847 27.7448 22.0046 27.3368 21.6068C26.591 20.8798 25.8172 20.2351 25.0855 19.4943C25.0011 19.412 24.9308 19.3023 24.8745 19.1925C24.9448 18.8222 24.9448 18.4381 24.8323 18.0403C25.1981 17.6699 25.578 17.2996 25.9438 16.9292C26.0564 16.6 26.2674 16.5177 26.4644 16.4079C26.2956 16.5863 26.1127 16.7509 25.9438 16.9292C26.3237 16.8057 26.6473 16.5314 26.8724 16.0101H26.8865C26.8865 16.0101 26.9428 15.969 26.9709 15.9141C27.1679 15.7495 27.3649 15.5849 27.5478 15.434C28.9689 14.4738 30.193 13.0335 31.389 11.5109C33.2322 10.194 34.1608 7.75231 34.6955 4.83052C34.7799 4.36413 34.7518 3.81544 34.7096 3.32161C34.6252 2.29282 34.3719 1.37376 34.0061 0.509565C33.8372 0.0980455 33.4151 -0.107714 33.1619 0.0843282C32.2754 0.756477 31.5578 1.77156 30.8684 2.85523C30.193 3.58224 29.5177 4.30926 28.8423 5.02256V5.05C28.2091 5.31063 27.7026 5.90047 27.2383 6.60005C26.6473 6.86068 26.1971 7.40937 25.8735 8.20498C24.1287 9.63158 22.4262 11.1542 21.0051 13.2941C20.7378 13.1295 20.4564 13.0198 20.1469 12.9786C19.0775 11.7715 18.0082 10.5506 16.7841 9.75503C14.772 7.49168 12.5489 5.85932 10.2133 4.58361C10.0585 4.5013 9.88964 4.52874 9.7208 4.5013C8.11679 2.74549 6.28766 1.67554 4.50074 0.48213C3.54396 -0.121432 2.57311 -0.0665623 1.60226 0.152915C1.18016 0.248936 0.870609 0.660455 0.673626 1.26402C0.096745 1.97732 -0.0720981 2.88266 0.0263937 4.00748C0.237448 6.51775 1.02538 8.301 2.48869 9.37095C3.82536 10.3449 5.1339 11.4423 6.47057 12.3888C7.97609 13.4587 9.41126 14.6658 10.7198 16.2433C10.9731 16.5588 11.2685 16.7783 11.5499 17.0526C11.9298 17.5053 12.2816 17.9854 12.6896 18.3832C13.4354 19.1102 14.2092 19.755 14.9409 20.4957C15.0253 20.578 15.0956 20.6877 15.1519 20.7975C15.0816 21.1678 15.0816 21.5519 15.1941 21.9497C14.8283 22.3201 14.4484 22.6905 14.0826 23.0608C13.97 23.39 13.759 23.4723 13.562 23.5821C13.7308 23.4038 13.9137 23.2392 14.0826 23.0608C13.7027 23.1843 13.3791 23.4586 13.1539 23.9799H13.1399C13.1399 23.9799 13.0836 24.021 13.0555 24.0759C12.8585 24.2405 12.6615 24.4051 12.4786 24.556C11.0575 25.5162 9.83336 26.9565 8.63739 28.4792C6.79419 29.796 5.86555 32.2377 5.33088 35.1595C5.24646 35.6259 5.2746 36.1746 5.31681 36.6684C5.40123 37.6972 5.6545 38.6163 6.02032 39.4805C6.18917 39.892 6.61127 40.0977 6.86454 39.9057C7.75097 39.2335 8.46855 38.2185 9.15799 37.1348C9.83336 36.4078 10.5087 35.6808 11.1841 34.9675V34.94C11.8173 34.6794 12.3238 34.0896 12.7881 33.39C13.3791 33.1293 13.8293 32.5806 14.1529 31.785C15.8976 30.3584 17.6001 28.8358 19.0212 26.6959C19.2886 26.8605 19.57 26.9703 19.8795 27.0114C20.9489 28.2185 22.0182 29.4394 23.2423 30.235C25.2544 32.4983 27.4775 34.1307 29.8131 35.4064C29.9679 35.4887 30.1367 35.4613 30.3056 35.4887C31.9096 37.2445 33.7387 38.3145 35.5257 39.5079C36.4402 40.1252 37.4251 40.0703 38.396 39.8371C38.8181 39.7411 39.1276 39.3296 39.3246 38.726C39.8874 38.0127 40.0563 37.1074 39.9719 35.9825H40Z" fill="#002D2E" />
                </svg></a></div>
          </div>
          <div className='w-90 md:pl-[12vw] top-0'>

            <ul className='mainMenuList text-left'>
              <li>
                <Link to="expertise"><h3>Expertise</h3></Link>
              </li>
              <li>
              <Link to="ourstory"><h3>Our Story</h3></Link>
              </li>
              <li className='hidden'>
              <Link to="nopage"><h3>Our Experts</h3></Link>
              </li>
              <li className='hidden'>
              <Link to="nopage"><h3>Careers</h3></Link>
              </li>
              <li className='hidden'>
              <Link to="nopage"><h3>FAQ</h3></Link>
              </li>
              <li className='hidden'>
              <Link to="nopage"><h3>Contact</h3></Link>
              </li>
            </ul>

          </div>

        </div>
      </div>
    </div>
    )
}

export default NavBarContainer