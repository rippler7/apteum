import heroImgStory from '../assets/OurStoryHero.jpg'
import ButtonAvg from '../components/ButtonAvg'
import arrowRight from '../assets/arrowRight.svg'
import { Link } from 'react-router-dom'
function Story() {
    return (
        <>
            <section className="relative w-full md:h-fit sm:h-max flex items-end justify-start text-left text-white z-1">
                <div className="img-docker absolute top-0 left-0 w-full h-full overflow-hidden">
                    <img src={heroImgStory} className="w-full h-full brightness-50 object-cover object-left-bottom" />
                </div>
                <div className='w-full md:w-10/12 mx-auto'>
                <div className="img-content relative py-5 w-full max-w-sm md:max-w-5xl">
                    <h2 className='p-10'>A new way of working</h2>
                    <p className='px-10'><h3 className="text-3xl">Remote hiring is a practical alternative and long-term solution to business growth and development—but it should be done the right way. At Apteum, that means treating all clients, collaborators, contractors and staff with the utmost respect.
                    </h3></p>
                </div>
                </div>
            </section>
            <section className='flex w-full justify-between items-center h-fit py-20 bg-white'>
            <div className='flex flex-col justify-evenly h-full w-10/12 mx-auto text-left align-items'>
                    <div className='tagline w-full px-10 text-2xl'>                        
                        <p>Initially created to provide operational support for our growing businesses, we quickly realised we had a talent acquisition service that could benefit companies across Australia and the world. But rather than follow the traditional approach to outsourcing, we <mark>wanted to build genuine and lasting relationships with the people who support</mark> our business.</p>
                        <br />
                        <p>In 2023, we established our own office in Cebu City, where we have <mark>a team of 20+ wonderful people with a wide breadth of skill and specialisation</mark>. Situated on Cebu Island, in South-Central Philippines, Cebu is a vibrant and evolving city. With a population of more than one million, and a median age of 25, this rapidly growing city plays a vital role in the Philippines' emerging economy.</p>
                        <br />
                        <p>Our office is based in the Cebu I.T. Park, a district focused on international business that services companies around the world. Due to the professional opportunities available, the area attracts talented people from across the country.  <mark>We couldn't be more pleased to be here</mark>. As our business continues to grow, we remain focused on developing relationships with like-minded clients who align with our values and share our enthusiasm for a more ethical approach to outsourcing.</p>
                    </div>
            </div>
            </section>
            <section className="flex relative align-middle justify-between text-centermax-w-screen-xl px-4 mx-auto md:flex-row sm:px-6 p-8">
            <div className="flex mx-auto my-auto max-w-screen-xl px-4 text-center lg:py-16 lg:px-6 align-middle">
                <figure className="max-w-screen-lg mx-auto">
                    <svg className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
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
            </section>
            
            <section className="hidden flex h-max align-middle justify-between w-full px-4 mx-auto md:flex-row sm:px-6 p-8 pb-28 bg-white">
                <div className="container mx-auto flex flex-col items-center px-4 text-center md:py-6 md:px-5 lg:px-16 justify-center">
                    <br />
                    <p className="px-8 mt-8 mb-12">
                    <h2>Do you have a project you would like to discuss?</h2></p>
                    <br />
                    <Link to='../nopage'><div className="w-fit m-auto text-center items-center justify-center mt-[3vw]"> <ButtonAvg label='Our Experts' iconRight={<div className='pl-2 items-center flex justify-center m-auto'><img className='rightBtnArrow' src={arrowRight} width={30} title="arrow right" alt="pointRight" /></div>} /></div></Link>
                    <br />
                    <br />
                </div>
            </section>
        </>
    )
}

export default Story