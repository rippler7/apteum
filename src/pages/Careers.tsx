import heroImgStory from '../assets/CareersHero.jpg'
import ButtonAvg from '../components/ButtonAvg';
import arrowRIght from '../assets/arrowRight.svg'
import { Link } from 'react-router-dom';
import joblist from '../const/jobs';
function Careers() {
    return (
        <div>

            <section className="relative w-full md:h-fit sm:h-max flex items-end justify-start text-left text-white z-1 pt-20">
                <div className="img-docker absolute top-0 left-0 w-full h-full overflow-hidden">
                    <img src={heroImgStory} className="w-full h-full brightness-50 object-cover scale-x-[-1] object-center-bottom" />
                </div>
                <div className='w-full md:w-10/12 mx-auto'>
                    <div className="img-content relative py-5 w-full max-w-sm md:max-w-5xl">
                        <h2 className='p-10'>Join the team</h2>
                        <h3 className="text-3xl px-10">At Apteum, we provide a workplace where all staff are respected, valued and given every opportunity to succeed. Driven by a goal to grow together, we strive to offer our staff the support they need to develop new skills, master their craft and direct the future of their careers.
                        </h3>
                        <br />
                        <h3 className="text-3xl px-10">
                            We're always looking for new talent. If you'd like to join our growing team in Cebu City, we warmly invite you to review our Current Opportunities.

                        </h3>
                    </div>
                </div>
            </section>
            <div className="flex relative align-middle justify-between text-centermax-w-screen-xl px-4 mx-auto md:flex-row sm:px-6 p-8 bg-white mb-20">
                <div className="flex mx-auto my-auto max-w-screen-xl px-4 text-center lg:py-16 lg:px-6 align-middle">
                    <figure className="max-w-screen-lg mx-auto">
                        <svg className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
                        </svg>
                        <blockquote>
                            <p className="text-2xl font-medium">"We're thrilled with the additional staff that Apteum provided to assist our local team. For us, the real power has been how quickly and efficiently we've been able to increase our capacity for change and growth."
                            </p>
                        </blockquote>
                        <figcaption className="flex items-center justify-center mt-6 space-x-3">
                            <img className="w-10 h-10 rounded-full" src="https://cdn.theorg.com/f79de598-080a-4eb5-8a5b-96bc2ddc0147_thumb.jpg" alt="profile" />
                            <div className="flex items-center divide-x-2">
                                <div className="pr-3 font-medium">Alyeah Sankar</div>
                                <div className="pl-3 text-sm font-light">Chief Customer and Innovation Officer, Landchecker</div>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </div>
            <div className="relative lg:px-6 pb-5 align-middle w-full mx-auto  text-left mb-5 lg:mb-20">
                <h2 className='m-auto w-10/12'>Current Opportunities</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 w-10/12 m-auto gap-2 lg:gap-8 mt-3 lg:mt-8 px-4 lg:px-10 xl:mt-16 sm:grid-cols-1 mb-10 text-left justify-between">
                    {
                        joblist && joblist.map((job) =>
                            <div key={job.id} className='mb-10 lg:mb-5'>
                                <h3><span className="realistic-marker-highlight">{job.title}</span></h3>
                                <h4>{job.type}</h4>
                                <h4>{job.city}, {job.country}</h4>
                                <br />
                                <p>
                                    {job.desc}
                                </p>
                                <div>
                                    <Link to={job.link} target='_blank' className=''><div className="m-auto text-center items-left mt-[2vw]"><ButtonAvg label='Learn more' iconRight={<div className='pl-1 items-center flex justify-center m-auto'><img className='rightBtnArrow' src={arrowRIght} width={30} title="arrow right" alt="pointRight" /></div>} /></div></Link>
                                </div>
                                <br />
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
export default Careers;