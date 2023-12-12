import './SectionTwo.css';
function SectionTwo(){
    return(
        <div className='secOneBody flex w-full justify-between items-center h-full py-10'>
            <div className='heroImg'>
                &nbsp;
            </div>
            <div className='flex flex-col justify-center h-full w-full items-center align-items'>
                <div className='w-full align-bottom'>
                    <h1>Looking to grow?</h1>
                </div>
                <div className='tagline w-full px-20'>
                    <p>
                       <h3>Apteum pairs you with professionals abroad to build bespoke staffing solutions</h3>
                    </p>
                </div>
                <div className='w-full py-20'>
                    <button>
                        To Expertise
                    </button>
                </div>
                <div>
                    &nbsp;
                </div>
            </div>
        </div>
    )
}

export default SectionTwo;