import './SectionTwo.css';
function SectionTwo(){
    return(
        <div id="sec2" className='secTwoBody flex w-full justify-between items-center h-full py-20'>
            
            <div className='flex flex-col justify-evenly h-full w-10/12 mx-auto items-center align-items'>
                    <div className='tagline w-full px-20'>
                        
                        <h3>Working from Melbourne, Australia and Cebu City, the Philippines, Apteum is a growing team of professionals and specialists with a passion for business, technology and problem solving.</h3>
                        
                    </div>
                    <div className='grid gap-20 lg:grid-cols-3 justify-between pt-20'>
                        <div className='px-10'>
                            <span className='highlight-container'><span className='highlight'><h4><p>Connect with a global workforce.</p></h4></span></span>
                            <br />
                            <br />
                            <span className='highlight-container'><span className='highlight'><h4><p>Minimise crunch and skills shortages when it matters most.</p></h4></span></span>
                        </div>
                        <div className='px-10'>
                            <span className='highlight-container'><span className='highlight'><h4><p>Scale your business quickly and efficiently.</p></h4></span></span>
                            <br />
                            <br />
                            <span className='highlight-container'><span className='highlight'><h4><p>Minimise crunch and skills shortages when it matters most.</p></h4></span></span>
                        </div>
                        <div className='px-10'>
                        <span className='highlight-container'><span className='highlight'><h4><p>Expand resources to gain a competitive advantage. </p></h4></span></span>
                            <br />
                        </div>
                    </div>
                <div>
                    &nbsp;
                </div>
            </div>
        </div>
    )
}

export default SectionTwo;