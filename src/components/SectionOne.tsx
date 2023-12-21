import './SectionOne.css';
import heroImg from '../assets/DSC09860.jpg'
import ButtonAvg from './ButtonAvg';
import arrowRIght from '../assets/arrowRight.svg'
function SectionOne() {
    return (
        <section className='secOneBody w-full h-full mb-8'>
            <div className="h-full w-full px-6 text-center md:px-12 lg:text-left">
                <div className="w-100 h-full mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
                    <div className="h-full grid items-center gap-12 lg:grid-cols-2 justify-normal">
                        <div className="h-full w-full">
                            <img src={heroImg} className="w-full h-full object-cover" alt="" />
                        </div>
                        <div className="w-full text-center items-center">

                            <h2>Looking to grow?</h2>
                            <br />
                            <h4 className='px-1.5'>Apteum pairs you with professionals abroad to build bespoke staffing solutions</h4>
                            <br />
                            <div className="w-fit m-auto text-center items-center justify-center mt-[3vw]"> <ButtonAvg label='Get started' iconRight={<div className='pl-2 items-center flex justify-center m-auto'><img className='rightBtnArrow' src={arrowRIght} width={30} title="arrow right" alt="pointRight" /></div>} /></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionOne;