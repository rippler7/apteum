function SectionTwo() {
    return (
        <div id="sec2" className='secTwoBody relative w-full justify-between items-center h-full py-20 z-2'>

            <div className='flex flex-col justify-evenly h-full w-full  max-w-screen-3xl md:w-full lg:w-11/12 mx-auto items-center align-items'>
                <div className='tagline w-full sm:w-full px-8 md:px-0 md:w-10/12 lg:w-9/12 xl:10/12 lg:px-5'>

                    <h3>Working from Melbourne, Australia and Cebu City, the Philippines, Apteum is a growing team of professionals and specialists with a passion for business, technology and problem solving.</h3>

                </div>
                <div className='grid gap-2 md:gap-2 lg:gap-8 lg:grid-cols-3 justify-center items-center pt-10'>
                    <div className='px-10'>
                        <h4 className='text-2xl'><span className="text-highlight"><mark>Scale your business quickly and efficiently.</mark></span></h4>
                        <h4 className='text-2xl'><span className="hidden text-highlight"><mark>Connect with a global workforce.</mark></span></h4>
                        <h4 className='text-2xl'><span className='hidden text-highlight'><mark>Minimise crunch and skills shortages when it matters most.</mark></span></h4>
                    </div>
                    <div className='px-10'>
                        <h4 className='text-2xl'><span className="text-highlight"><mark>Increase efficiency by operating in multiple time zones.</mark></span></h4>
                    </div>
                    <div className='px-10'>
                        <h4 className='text-2xl'><span className="text-highlight"><mark>Expand resources to gain a competitive advantage.</mark></span></h4>
                        
                    </div>
                </div>
                <div>
                    &nbsp;
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="svg-filters hidden" >
                <defs>
                    <filter id="markerShapeSmall">
                        <feTurbulence type="fractalNoise" baseFrequency="0.001 0.07" numOctaves="1" result="warp" />
                        <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="30" in="SourceGraphic" in2="warp" />
                    </filter>
                </defs>
            </svg>
        </div>
    )
}

export default SectionTwo;