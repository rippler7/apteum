import './SectionOne.css';
import heroImg from '../assets/DSC09860.jpg'
function SectionOne(){
    return(
        <section className='secOneBody w-full h-full'>
        <div className="h-full w-full px-6 text-center md:px-12 lg:text-left">
            <div className="w-100 h-full mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
            <div className="h-full grid items-center gap-12 lg:grid-cols-2 justify-normal">
                <div className="h-full w-full">
                <img src={heroImg}  className="w-full h-full object-cover" alt="" />
                </div>
                <div className="w-full text-center">        
                    
                        <h2>Looking to grow?</h2>
                   
                    <br />
                    
                        <h4 className='px-1.5'>Apteum pairs you with professionals abroad to build bespoke staffing solutions</h4>
                    
                    <br />
                <a className="button mb-2 inline-block bg-primary px-12 pt-4 pb-3.5 text-sm" data-te-ripple-init data-te-ripple-color="light" href="#!" role="button">Get started</a>
                </div>
            </div>
            </div>
        </div>
        </section>
    )
}

export default SectionOne;