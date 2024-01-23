import heroImgExp from '../assets/hero-expertise.jpg'
import heroImg2 from '../assets/expertise-pic2.jpg'
import heroImg3 from '../assets/expertise-pic3.jpg'
import heroImg4 from '../assets/expertise-pic4.jpg'
import ButtonAvg from '../components/ButtonAvg'
import arrowRight from '../assets/arrowRight.svg'
import { Link } from 'react-router-dom'
function Services() {
    return (
        <>
            <section className="relative w-full md:h-fit sm:h-max flex items-end justify-start text-left text-white z-1 pt-20">
                <div className="img-docker absolute top-0 left-0 w-full h-full overflow-hidden">
                    <img src={heroImgExp} className="w-full h-full brightness-50 object-cover object-left-middle" />
                </div>
                <div className='w-full md:w-10/12 mx-auto'>
                    <div className="img-content relative lg:py-5 w-full max-w-sm lg:max-w-5xl">
                        <h2 className='p-10'>You can count on us</h2>
                        <h3 className="text-3xl px-10">
                            Apteum offers a suite of services that can be tailored to meet the specific needs of your business. Whether it's technical services, operational support, accounting and bookkeeping, or HR and recruitment, we're here to help you grow.</h3><br />
                        <h3 className="text-3xl px-10">When you partner with Apteum, our team in the Philippines becomes an extension of your business. While we're here to provide support, assistance and guidance through the recruitment process, you get to hand-select the people who are right for you. You can also leave recruitment to us—so you can focus on what you do best.
                        </h3>
                    </div>
                </div>
            </section>
            <div className="relative flex items-center bg-white w-full px-4 mx-auto md:flex-row sm:px-6 p-8">
                <div className='w-10/12 flex flex-col items-center m-auto lg:flex-row'>
                    <div className="flex items-center py-5 lg:w-1/2">
                        <div className="relative p-3">
                            <div className="w-full lg:w-10/12 mx-auto">
                                <img src={heroImg2} className='object-cover' />
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto flex items-center py-5 lg:w-1/2">
                        <div className="text-left w-full">
                            <h2
                                className="text-3xl leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl">
                                Technology
                            </h2>
                            <br />
                            <p className="mx-auto mt-3 text-lg">
                                We can provide software and data engineers familiar with various coding languages, methodologies and programs. We also retain skilled UX and UI designers, as well as quality assurance and testing specialists.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
            <div className="relative flex flex-col items-center w-full px-4 mx-auto md:flex-row sm:px-6 p-8">
                <div className='w-10/12 flex flex-col items-center m-auto lg:flex-row'>
                    <div className="mx-auto flex items-center py-5 lg:w-1/2">
                        <div className="text-left w-full">
                            <h2
                                className="text-3xl tracking-tight sm:text-5xl sm:leading-none md:text-6xl">
                                Accounting and Bookkeeping
                            </h2>
                            <br />
                            <p className="mx-auto mt-3 text-lg">
                                Our team of chartered accountants and certified practising accountants are experts in Australian law and compliance. Highly proficient with bookkeeping software, including Xero and MYOB, our staff can assist with taxes, financial statements, and account management.
                            </p>

                        </div>
                    </div>
                    <div className="flex items-center py-5 lg:w-1/2">
                        <div className="relative p-3">
                            <div className="w-full lg:w-10/12 mx-auto">
                                <img src={heroImg3} className='object-cover object-top' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative flex items-center bg-white w-full px-4 mx-auto md:flex-row sm:px-6 p-8">
                <div className='w-10/12 flex flex-col items-center m-auto lg:flex-row'>
                    <div className="flex items-center py-5 lg:w-1/2">
                        <div className="relative p-3">
                            <div className="w-full lg:w-10/12 mx-auto">
                                <img src={heroImg4} className='object-cover' />
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto flex items-center py-5 lg:w-1/2">
                        <div className="text-left w-full">
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
            <section className="relative w-10/12 py-10 align-middle mx-auto  text-left lg:mb-20">
                <h2 className='m-auto lg:w-10/12'>How it works</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 lg:w-10/12 m-auto lg:gap-8 mt-3 lg:mt-8 md:px-4 xl:mt-16 sm:grid-cols-1 text-left justify-between">
                    <div className='md:mb-5'>
                        <h3><span className="realistic-marker-highlight">Clients</span></h3>
                        <br />
                        <p className='text-2xl'>
                            Our services are tailored for small-to-medium size businesses looking to grow the right way. Rather than provide a one-size-fits-all solution, we focus on developing relationships with like-minded clients who align with our values and share our enthusiasm for a more ethical approach to outsourcing.
                        </p>
                    </div>
                    <div className='mb-10 md:mb-5'>
                        <h3><span className="realistic-marker-highlight">Culture</span></h3>
                        <br />
                        <p className='text-2xl'>
                            At Apteum, we cultivate a working environment grounded in kindness, compassion and understanding. Whether you're a client in Australia or abroad, or a member of our team in Cebu, we treat all collaborators with dignity and respect.
                        </p>
                    </div>
                    <div className='mb-10 md:mb-5'>
                        <h3><span className="realistic-marker-highlight">Workflow</span></h3>
                        <br />
                        <p className='text-2xl'>
                            You'll have complete oversight of day-to-day operations. Our team members in Cebu City will report directly to you, ensuring your workflow is never staggered. Our Melbourne team will be on hand to assist with all changes, big and small.
                        </p>
                    </div>
                    <div className='mb-10 md:mb-5'>
                        <h3><span className="realistic-marker-highlight">Results</span></h3>
                        <br />
                        <p className='text-2xl'>
                            Our services are underpinned by the most advanced technologies and methodologies available, and when it comes to problem solving our team members are warmly encouraged to innovate to deliver the best possible outcome.
                        </p>
                    </div>
                    <br />
                </div>
            </section>
            <section className="flex w-screen h-max align-middle justify-between px-4 mx-auto md:flex-row sm:px-6 p-8 bg-white">
                <div className="container mx-auto flex flex-col items-center px-4 text-center md:py-6 md:px-5 lg:px-16 justify-center">
                    <br />

                    <h2 className='px-8 mb-12'>Do you have a project you would like to discuss?</h2>
                    <br />
                    <Link to='../contact-us'><div className="w-fit m-auto text-center items-center justify-center mt-[3vw] mb-5"> <ButtonAvg label='Get started' iconRight={<div className='pl-2 items-center flex justify-center m-auto'><img className='rightBtnArrow' src={arrowRight} width={30} title="arrow right" alt="pointRight" /></div>} /></div></Link>
                    <br />
                    <br />
                </div>
            </section>
        </>
    )
}

export default Services