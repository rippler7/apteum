import heroImgExp from '../assets/hero-expertise.jpg'
function Expertise() {
    return (
        
            <section className="relative h-screen flex items-center justify-center text-center text-white z-1">
                <div className="img-docker absolute top-0 left-0 w-full h-full overflow-hidden">
                    <img src={heroImgExp} className="w-full h-screen brightness-50 object-cover" />
                </div>
                <div className="img-content relative py-10">
                    <h1 className="font-light text-6xl">What we manage<br /><br />What they manage</h1>
                    <p className='px-10'><h3 className="font-light text-3xl">Apteum offers a suite of services that can be tailored to meet the specific needs of your business. Whether it’s technical services, operational support, accounting and bookkeeping, or HR and recruitment, we’re here to help you grow.
</h3></p>
                </div>
            </section>
        
    )
}

export default Expertise