import heroImgExp from '../assets/hero-expertise.jpg'
import heroImg2 from '../assets/expertise-pic2.jpg'
import heroImg3 from '../assets/expertise-pic3.jpg'
import heroImg4 from '../assets/expertise-pic4.jpg'
function Expertise() {
    return (
        <>
            <section className="relative w-full md:h-screen sm:h-max flex items-center justify-center text-center text-white z-1">
                <div className="img-docker absolute top-0 left-0 w-full h-full overflow-hidden">
                    <img src={heroImgExp} className="w-full h-full brightness-50 object-cover" />
                </div>
                <div className="img-content relative py-10 max-w-md md:max-w-6xl">
                    <h1 className="text-6xl">What we manage<br /><br />What they manage</h1>
                    <p className='px-10'><h3 className="text-3xl">Apteum offers a suite of services that can be tailored to meet the specific needs of your business. Whether it’s technical services, operational support, accounting and bookkeeping, or HR and recruitment, we’re here to help you grow.
                    </h3></p>
                </div>
            </section>

            <div className="relative flex items-center bg-white w-full px-4 mx-auto md:flex-row sm:px-6 p-8">
                <div className='w-10/12 flex flex-col items-center m-auto md:flex-row'>
                    <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pl-10">
                        <div className="relative w-full p-3 rounded  md:p-8">
                            <div className="rounded-lg w-full">
                                <img src={heroImg2} className='object-fill' />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pr-10">
                        <div className="text-left">
                            <h2
                                className="text-3xl leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl">
                                Technology
                            </h2>
                            <br />
                            <p className="mx-auto mt-3 text-lg">
                                We offer exceptional customer service and onboarding, as well as administration and support, both inside and outside of Australian business hours. Proficient in industry-leading CRM tools, such as Salesforce, Hubspot and Monday, our staff can also prepare documentation, such as research, strategy and white papers.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
            <div className="relative flex flex-col items-center w-full px-4 mx-auto md:flex-row sm:px-6 p-8">
                <div className='w-10/12 flex flex-col items-center m-auto md:flex-row'>
                    <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pr-10">
                        <div className="text-left">
                            <h2
                                className="text-3xl leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl">
                                Accounting and Bookkeeping
                            </h2>
                            <br />
                            <p className="mx-auto mt-3 text-lg">
                                Our team of chartered accountants and certified practising accountants are experts in Australian law and compliance. Highly proficient with bookkeeping software, including Xero and MYOB, our staff can assist with taxes, financial statements, and account management.
                            </p>

                        </div>
                    </div>
                    <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pl-10">
                        <div className="relative w-full p-3 rounded  md:p-8">
                            <div className="rounded-lg w-full">
                                <img src={heroImg3} className='object-fill object-top' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative flex items-center bg-white w-full px-4 mx-auto md:flex-row sm:px-6 p-8">
                <div className='w-10/12 flex flex-col items-center m-auto md:flex-row'>
                    <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pl-10">
                        <div className="relative w-full p-3 rounded  md:p-8">
                            <div className="rounded-lg w-full">
                                <img src={heroImg4} className='object-fill' />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pr-10">
                        <div className="text-left">
                            <h2
                                className="text-3xl leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl">
                                Customer & Business Services
                            </h2>
                            <br />
                            <p className="mx-auto mt-3 text-lg">
                                We offer exceptional customer service and onboarding, as well as administration and support, both inside and outside of Australian business hours. Proficient in industry-leading CRM tools, such as Salesforce, Hubspot and Monday, our staff can also prepare documentation, such as research, strategy and white papers.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
            <section className="flex h-max align-middle justify-between max-w-screen-xl px-4 mx-auto md:flex-row sm:px-6 p-8 pb-28">
                <div className="container mx-auto flex flex-col items-center px-4 text-center md:py-6 md:px-5 lg:px-16 justify-center">
                    <br />
                    <p className="px-8 mt-8 mb-12">
                    <h2>Do you have a project you would like to discuss?</h2></p>
                    <br />
                    <br />
                    <button>Get in touch</button>
                    <br />
                    <br />
                </div>
            </section>
        </>
    )
}

export default Expertise