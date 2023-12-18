import whirlArrow from '../assets/whirlArrow.svg'
function SectionSeven(){
    return(
        <section className="flex align-middle justify-between h-full">
			<div className="container mx-auto flex flex-col items-center px-4 text-center md:py-6 md:px-5 lg:px-16 justify-center">
            <img src={whirlArrow} width={145} />
            <br />
            <br />
                <p className="px-8 mt-8 mb-12 text-lg">
				Apteum services can be tailored for any industry, for clients big and small. Whether you're a large company, a small-to-medium size business or a sole operator, we can provide staffing solutions to help you grow. Think of us as an extension of your business, based in a different office.				</p>
				<p className="px-8 mt-8 mb-12 text-lg">
					If you need talented people, we can help.
				</p>
                <br />
                <br />
                <button>Get in touch</button>
			</div>
		</section>
    )
}

export default SectionSeven