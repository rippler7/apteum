import heroImgExp from '../assets/hero-expertise.jpg'
function Expertise() {
    return (
        <>
            <section className="relative md:h-screen sm:h-max flex items-center justify-center text-center text-white z-1">
                <div className="img-docker absolute top-0 left-0 w-full h-full overflow-hidden">
                    <img src={heroImgExp} className="w-full h-full brightness-50 object-cover" />
                </div>
                <div className="img-content relative py-10">
                    <h1 className="font-light text-6xl">What we manage<br /><br />What they manage</h1>
                    <p className='px-10'><h3 className="font-light text-3xl">Apteum offers a suite of services that can be tailored to meet the specific needs of your business. Whether it’s technical services, operational support, accounting and bookkeeping, or HR and recruitment, we’re here to help you grow.
</h3></p>
                </div>
            </section>
            
            <div className="relative flex flex-col items-center max-w-screen-xl px-4 mx-auto md:flex-row sm:px-6 p-8">
            <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pl-10">
        <div className="relative w-full p-3 rounded  md:p-8">
            <div className="rounded-lg w-full">
                <img src="https://picsum.photos/400/300" />
            </div>
        </div>
    </div>
    <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pr-10">
        <div className="text-left">
            <h2
                className="text-4xl font-extrabold leading-10 tracking-tightsm:text-5xl sm:leading-none md:text-6xl">
                Technology
            </h2>
            <br />
            <p className="max-w-md mx-auto mt-3 text-lg">
            We offer exceptional customer service and onboarding, as well as administration and support, both inside and outside of Australian business hours. Proficient in industry-leading CRM tools, such as Salesforce, Hubspot and Monday, our staff can also prepare documentation, such as research, strategy and white papers.
            </p>
            
        </div>
    </div>
   
</div>
        </>
    )
}

export default Expertise