function SectionTwo() {
    return (
        <div id="sec2" className='secTwoBody flex w-full justify-between items-center h-full py-20 z-2 bg-white'>

            <div className='flex flex-col justify-evenly h-full w-10/12 mx-auto items-center align-items'>
                <div className='tagline w-full px-5 lg:px-20'>

                    <h3>Working from Melbourne, Australia and Cebu City, the Philippines, Apteum is a growing team of professionals and specialists with a passion for business, technology and problem solving.</h3>

                </div>
                <div className='grid gap-20 lg:grid-cols-3 justify-between pt-20'>
                    <div className='px-10'>
                        <h4 className='text-2xl'><span className="realistic-marker-highlight"><mark>Connect with a global workforce.</mark></span></h4>
                        <br />
                        <h4 className='text-2xl'><span className='realistic-marker-highlight'><mark>Minimise crunch and skills shortages when it matters most.</mark></span></h4>
                    </div>
                    <div className='px-10'>
                        <h4 className='text-2xl'><span className="realistic-marker-highlight"><mark>Scale your business quickly and efficiently.</mark></span></h4>
                        <br />
                        <br />
                        <h4 className='text-2xl'><span className="realistic-marker-highlight"><mark>Minimise crunch and skills shortages when it matters most.</mark></span></h4>
                    </div>
                    <div className='px-10'>
                        <h4 className='text-2xl'><span className="realistic-marker-highlight"><mark>Expand resources to gain a competitive advantage.</mark></span></h4>
                        <br />
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