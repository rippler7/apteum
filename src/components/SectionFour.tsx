import '../components/SectionFour.css'
import ImgCard from './ImgCard'
import { Link } from 'react-router-dom'
import {featuredImg} from '../const/Images'
import ButtonAvg from '../components/ButtonAvg';
import arrowRIght from '../assets/arrowRight.svg';


function SectionFour(){
    return(
        <section className="secFourBody h-full pb-10">
            <div className="grid">
                <div className="container px-6 pt-6 justify-center mx-auto">

                    <h3 className="text-center mt-10">Our people are what makes Apteum a leader in the industry</h3> </div>
            </div>
            <div className="container px-6 mx-auto">
                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
                
                    {
                        featuredImg && featuredImg.map((item)=>
                        <Link key={item.id} to="experts"><ImgCard {...item}></ImgCard></Link>
                        )
                    }                    
                    <br />
                </div>
                <Link to='../experts'><div className="w-fit m-auto text-center items-center justify-center mt-[3vw]"><ButtonAvg label='To Our Experts' iconRight={<div className='pl-2 items-center flex justify-center m-auto'><img className='rightBtnArrow' src={arrowRIght} width={30} title="arrow right" alt="pointRight" /></div>} /></div></Link>
            </div>
        </section>
       
    )
}

export default SectionFour