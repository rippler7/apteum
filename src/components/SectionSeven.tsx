import whirlArrow from '../assets/whirlArrow.svg'
import ButtonAvg from './ButtonAvg'
import arrowRight from '../assets/arrowRight.svg'
function SectionSeven(){
    return(
        <section className="flex align-middle justify-between max-w-screen-xl px-4 mx-auto md:flex-row sm:px-6 p-8">
			<div className="container mx-auto flex flex-col items-center px-4 text-center md:py-6 md:px-5 lg:px-16 justify-center">
            <img src={whirlArrow} width={145} />
            <br />
            <br />
                <p className="px-8 mt-8 mb-12 text-2xl font-medium">
				Apteum services can be tailored for any industry, for clients big and small. Whether you're a large company, a small-to-medium size business or a sole operator, we can provide staffing solutions to help you grow. Think of us as an extension of your business, based in a different office.				</p>
				<p className="px-8 mt-8 mb-12 text-2xl font-medium">
					If you need talented people, we can help.
				</p>
                <div className="hidden w-fit m-auto text-center items-center justify-center mt-[3vw]"> <ButtonAvg label='Get in touch' iconRight={<div className='pl-2 items-center flex justify-center m-auto'><img className='rightBtnArrow' src={arrowRight} width={30} title="arrow right" alt="pointRight" /></div>} /></div>
			</div>
		</section>
    )
}

export default SectionSeven