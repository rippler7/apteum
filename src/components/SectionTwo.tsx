import './SectionTwo.css';
function SectionTwo(){
    return(
        <div id="sec2" className='secTwoBody flex w-full justify-between items-center h-full py-10'>
            
            <div className='flex flex-col justify-evenly h-full w-full items-center align-items'>
                    <div className='tagline w-full px-20'>
                        
                        <h3>Working from Melbourne, Australia and Cebu City, the Philippines, Apteum is a growing team of professionals and specialists with a passion for business, technology and problem solving.</h3>
                        
                    </div>
                    <div className='grid gap-20 lg:grid-cols-3 justify-between'>
                        <div className='px-10'>
                            <h4 className='highLighted'><p>Connect with a global workforce.</p></h4>
                            <br />
                            <br />
                            <h4><p>Minimise crunch and skills shortages when it matters most.</p></h4>
                        </div>
                        <div className='px-10'>
                            <h4><p>Connect with a global workforce.</p></h4>
                            <br />
                            <br />
                            <h4><p>Minimise crunch and skills shortages when it matters most.</p></h4>
                        </div>
                        <div className='px-10'>
                            <h4><p>Connect with a global workforce.</p></h4>
                            <br />
                            <br />
                            <h4><p>Minimise crunch and skills shortages when it matters most.</p></h4>
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