import whirlArrow from '../assets/whirlArrow.svg'
import ButtonAvg from './ButtonAvg'
import arrowRight from '../assets/arrowRight.svg'
import { Link } from 'react-router-dom'
function SectionSeven(){
    return(
        <section className="flex align-middle justify-between max-w-screen-xl px-4 mx-auto md:flex-row sm:px-6 pb-10">
			<div className="container mx-auto flex flex-col items-center px-4 text-center md:py-6 md:px-5 lg:px-16 justify-center">
            <img src={whirlArrow} width={145} />
            <br />
            <br />
                <h2 className="px-8 mb-12">
                    Ready to get started?
                </h2>
                <div className="w-fit m-auto text-center items-center justify-center"><Link to="contact-us"><ButtonAvg label='Get in touch' iconRight={<div className='pl-2 items-center flex justify-center m-auto'><img className='rightBtnArrow' src={arrowRight} width={30} title="arrow right" alt="pointRight" /></div>} /></Link></div>
			</div>
		</section>
    )
}

export default SectionSeven