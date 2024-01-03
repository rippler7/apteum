import { Disclosure, Transition } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';
import ButtonAvg from '../components/ButtonAvg';
import qna from '../const/questions';
import arrowRight from '../assets/arrowRight.svg'
function Faq() {
    return (
        <>
        <section className="min-h-fit pt-20">
            <br />
            <h2>Frequently Asked Questions (FAQs)</h2>
            {
                qna && qna.map((qa) => <>
                    <Disclosure as="div">
                        {({ open }) => (
                            <>
                                <div className="w-full px-4 lg:px-10 py-5" key='{qa.id}'>
                                    <div className="mx-auto w-full bg-white p-2">
                                        <Disclosure.Button className="flex w-full justify-between px-4 py-2 text-left text-[#002d2e] hover:bg-[#002d2e]-200 focus:outline-none focus-visible:ring bg-[#edf4f3] focus-visible:ring-500/75">
                                            <h3><span>{qa.question}</span></h3>
                                            <ChevronUpIcon
                                                className={`${open ? 'rotate-180 transform' : ''
                                                    } h-5 w-5 #213547`}
                                            />
                                        </Disclosure.Button>
                                        <Transition
                                            enter="transition duration-100 ease-out"
                                            enterFrom="transform scale-95 opacity-0"
                                            enterTo="transform scale-100 opacity-100"
                                            leave="transition duration-75 ease-out"
                                            leaveFrom="transform scale-100 opacity-100"
                                            leaveTo="transform scale-95 opacity-0"
                                        >
                                            <Disclosure.Panel className="px-4 text-left pb-2 pt-4 text-gray-700">
                                                <h4>{qa.ans}</h4>
                                            </Disclosure.Panel>
                                        </Transition>
                                    </div>
                                </div>
                            </>
                        )}
                    </Disclosure>
                </>)
            }            
        </section>
        <section className="flex hidden align-middle justify-between w-full px-4 mx-auto md:flex-row sm:px-6 p-8 pb-28 bg-white">
                <div className="container mx-auto flex flex-col items-center px-4 text-center md:py-6 md:px-5 lg:px-16 justify-center">
                    <br />
                    <p className="px-8 mt-8 mb-12">
                    <h2>Can't find what you are looking for?</h2></p>
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