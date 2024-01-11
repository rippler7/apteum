import './SectionThree.css';
import ButtonAvg from './ButtonAvg';
import arrowRIght from '../assets/arrowRight.svg'
import { Link } from 'react-router-dom';
function SectionThree() {
    return (
        <div id="sectionThree" className='secThreeBody flex w-full justify-between items-center h-full py-10'>

            <div className='grid justify-evenly h-full w-full md:w-full lg:w-9/12 mx-auto items-center align-items'>
                <div className='tagline w-full px-20'>

                    <h2>How can we help you?</h2>
                    <br />
                </div>
                <div className='grid gap-4 lg:gap-8 lg:grid-cols-3 justify-center px-5 items-center'>
                    <div className='flex flex-col justify-start items-center'>
                        <div className='s3Feat s3Feat1 w-full h-80 '>
                            &nbsp;
                        </div>
                        <div>
                            <h3>Employers</h3>
                            <br />
                            <h5>Assemble a team that will thrive across countries. Enjoy the operational flexibility, enhanced efficiency and lasting results achieved by working in multiple time zones. Hand-pick your new staff or leave recruitment to us.</h5>
                        </div>
                    </div>
                    <div className='flex flex-col justify-start items-center mb-10'>
                        <div className='s3Feat s3Feat2 w-full h-80'>
                            &nbsp;
                        </div>
                        <div className='lg:mb-20'>
                            <h3>Job seekers</h3>
                            <br />
                            <h5>Join a business that values people, fosters talent, provides training and offers career advancement. Access a range of professional benefits, including health insurance, and work reasonable hours for a fair wage.</h5>
                        </div>
                    </div>
                    <div className='flex flex-col justify-start items-center'>
                        <div className='s3Feat s3Feat3 w-full h-80'>
                            &nbsp;
                        </div>
                        <div>
                            <h3>Other</h3>
                            <br />
                            <h5>Need to scale your team for a particular project? Looking to ideate, develop or prototype a product or service? Whether it’s short-term, long-term or a one-off assignment, we can tailor staff to suit your particular needs.</h5>
                        </div>
                    </div>
                </div>
                <div>
                    <Link to='../ourstory'><div className="w-fit m-auto text-center items-center justify-center mt-[3vw]"><ButtonAvg label='Learn more' iconRight={<div className='pl-2 items-center flex justify-center m-auto'><img className='rightBtnArrow' src={arrowRIght} width={30} title="arrow right" alt="pointRight" /></div>} /></div></Link>
                    <br />
                    &nbsp;
                </div>
            </div>
        </div>
    )
}

export default SectionThree;