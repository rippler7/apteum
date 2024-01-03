import './SectionThree.css';
import ButtonAvg from './ButtonAvg';
import arrowRIght from '../assets/arrowRight.svg'
import { Link } from 'react-router-dom';
function SectionThree(){
    return(
        <div id="sectionThree" className='secThreeBody flex w-full justify-between items-center h-full py-10'>
            
            <div className='grid justify-evenly h-full w-full items-center align-items'>
                    <div className='tagline w-full px-20'>
                        
                        <h2>How can we help you?</h2>
                        <br />
                    </div>
                    <div className='grid gap-12 lg:grid-cols-3 justify-between px-5 items-center'>
                        <div className='px-10 flex flex-col justify-start items-center'>
                            <div className='s3Feat s3Feat1 w-80 h-80 '>
                                &nbsp;
                            </div>
                            <div>
                                <h3>Employers</h3>
                                <br />
                                <h5><p>Assemble a team that will thrive across countries. Enjoy the operational flexibility, enhanced efficiency and lasting results achieved by working in multiple time zones. Hand-pick your new staff or leave recruitment to us.</p></h5>
                            </div>
                        </div>
                        <div className='px-10 flex flex-col justify-start items-center'>
                            <div className='s3Feat s3Feat2 w-80 h-80'>
                                &nbsp;
                            </div>
                            <div>
                                <h3>Job seekers</h3>
                                <br />
                                <h5><p>Join a business that values people, fosters talent, provides training and offers career advancement. Access a range of professional benefits, including health insurance, and work reasonable hours for a fair wage.</p></h5>
                                <br />
                                <br />
                                <br />
                                <br />
                                <Link to='../ourstory'><div className="w-fit m-auto text-center items-center justify-center mt-[3vw]"><ButtonAvg label='Learn more' iconRight={<div className='pl-2 items-center flex justify-center m-auto'><img className='rightBtnArrow' src={arrowRIght} width={30} title="arrow right" alt="pointRight" /></div>} /></div></Link>
                            </div>
                        </div>
                        <div className='px-10 flex flex-col justify-start items-center'>
                        <div className='s3Feat s3Feat3 w-80 h-80'>
                                &nbsp;
                            </div>
                            <div>                            
                                <h3>Other</h3>
                                <br />
                                <h5><p>Need to scale your team for a particular project? Looking to ideate, develop or prototype a product or service? Whether it’s short-term, long-term or a one-off assignment, we can tailor staff to suit your particular needs.</p></h5>
                            </div>
                        </div>
                    </div>
                <div>
                    &nbsp;
                </div>
            </div>
        </div>
    )
}

export default SectionThree;