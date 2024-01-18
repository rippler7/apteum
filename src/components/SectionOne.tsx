import './SectionOne.css';
import heroImg from '../assets/DSC09860.jpg';
import ButtonAvg from './ButtonAvg';
import arrowRIght from '../assets/arrowRight.svg';
import worldMapWithArrow from '../assets/worldMapWithArrow.svg';
import { Link } from 'react-router-dom';
function SectionOne() {
    return (
        <section className='w-full h-full mb-8'>
            <div className="h-full w-full text-center lg:text-left mx-auto">
                <div className="h-full w-full mx-auto overflow-hidden">
                    <div className="h-full grid grid-cols-1 items-start gap-12 lg:grid-cols-2 justify-normal">
                        <div className="h-full w-full">
                            <img src={heroImg} className="flex w-full h-full object-cover" alt="" />
                        </div>
                        <div className="w-full h-full text-center items-center mt-10">
                            <br />
                            <br />
                            <h1 className="text-highlight mt-8 w-full"><mark>Looking to grow?</mark></h1>
                            <br />
                            <h3 className='px-1.5 w-8/12 mx-auto mt-8'>Apteum pairs you with professionals abroad to build bespoke staffing solutions</h3>
                            <br />
                            <br />
                            <Link to='/services'><div className="w-fit m-auto text-center items-center justify-center text-2xl"> <ButtonAvg label='To Expertise' iconRight={<div className='pl-2 items-center flex justify-center m-auto'><img className='rightBtnArrow' src={arrowRIght} width={30} title="arrow right" alt="pointRight" /></div>} /></div></Link>
                            <div className='flex h-1/2 mt-[20px] w-3/4 mx-auto items-center justify-center overflow-hidden'>
                            <img src={worldMapWithArrow} className='object-cover index-0' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionOne;