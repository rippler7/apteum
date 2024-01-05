import { Disclosure, Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';
import ButtonAvg from '../components/ButtonAvg';
import qna from '../const/questions';
import arrowRight from '../assets/arrowRight.svg'
function Faq() {
    return (
        <>
            <section className="min-h-fit pt-20 text-left px-5">
                <br />
                <h3 className='text-black ml-10'>Frequently Asked Questions (FAQs)</h3>
                <br />
                <p className='ml-10'>Thanks for partnering with us, we look forward to working together.
                </p>
                <br />
                <p className='ml-10'>
                    We try to take an ethical approach to remote hiring and be transparent about our actions. The following FAQs explain where our staff work and how we provide for them.
                </p>
                {
                    qna && qna.map((qa) => 
                        <Disclosure as="div" key={qa.id}>
                            {({ open }) => (
                                <div>
                                    <div className="w-full px-4 lg:px-10 py-5" key='{qa.id}'>
                                        <div className="mx-auto w-full border-b-2 border-[#002d2e]">
                                            <Disclosure.Button className="flex items-center w-full justify-between px-4 py-2 text-left text-[#002d2e] hover:bg-[#002d2e]-200 focus:outline-none focus-visible:ring bg-[#edf4f3] focus-visible:ring-500/75">
                                                <h5><span>{qa.question}</span></h5>
                                                {open ? <svg data-slot="icon" className='h-5 w-5' fill="none" strokeWidth="4" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14"></path>
                                                </svg> : <svg data-slot="icon" fill="none" strokeWidth="4" className='h-5 w-5' stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path>
                                                </svg>}
                                            </Disclosure.Button>
                                            <Transition
                                                enter="transition duration-100 ease-out"
                                                enterFrom="transform scale-95 opacity-0"
                                                enterTo="transform scale-100 opacity-100"
                                                leave="transition duration-75 ease-out"
                                                leaveFrom="transform scale-100 opacity-100"
                                                leaveTo="transform scale-95 opacity-0"
                                            >
                                                <Disclosure.Panel className="px-4 text-left pb-2 pt-4 text-gray-700 mb-2">
                                                    <h5>{qa.ans}</h5>
                                                </Disclosure.Panel>
                                            </Transition>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </Disclosure>
                    )
                }
            </section>
            <section className="flex hidden align-middle justify-between w-full px-4 mx-auto md:flex-row sm:px-6 p-8 pb-28 bg-white">
                <div className="container mx-auto flex flex-col items-center px-4 text-center md:py-6 md:px-5 lg:px-16 justify-center">
                    <br />
                    <h2 className="px-8 mt-8 mb-12">
                        Can't find what you are looking for?</h2>
                    <br />
                    <Link to='/expertise'><div className="w-fit m-auto text-center items-center justify-center mt-[3vw]"> <ButtonAvg label='Contact Us' iconRight={<div className='pl-2 items-center flex justify-center m-auto'><img className='rightBtnArrow' src={arrowRight} width={30} title="arrow right" alt="pointRight" /></div>} /></div></Link>
                    <br />
                    <br />
                </div>
            </section>
        </>
    )
}

export default Faq;