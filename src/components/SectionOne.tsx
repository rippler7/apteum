import './SectionOne.css';
function SectionOne(){
    return(
        <div className='flex w-full justify-between items-center h-full align-items'>
            <div className='heroImg'>
                &nbsp;
            </div>
            <div className='flex-col justify-between h-full w-full items-center align-items p-50'>
                <div className='w-full h-70'>
                    <h1>Looking to grow?</h1>
                </div>
                <div className='tagline w-full px-20 py-30 h-30'>
                    <p>
                       <h3>Apteum pairs you with professionals abroad to build bespoke staffing solutions</h3>
                    </p>
                </div>
                <div className='w-full h-full py-20'>
                    <button>
                        To Expertise
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SectionOne;