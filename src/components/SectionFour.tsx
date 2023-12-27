import '../components/SectionFour.css'
import Images from '../const/Images'


function SectionFour(){
    return(
        <section className="secFourBody h-full">
            <div className="grid">
                <div className="container px-6 pt-6 justify-center mx-auto">

                    <h3 className="text-center mt-10">Our people are what makes Apteum a leader in the industry</h3> </div>
            </div>
            <div className="container px-6 mx-auto">
                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
                
                    {
                        Images && Images.map((item)=>
                        <div className="flex flex-col items-center p-4 border sm:p-6 rounded-xl" key={item.id}>
                        <img className="object-cover w-full rounded-xl aspect-square object-top" src={item.photo} alt="" />
                            <h3 className="mt-4 text-2xl font-semibold capitalize">{item.name}</h3>
    
                            <p className="mt-2 capitalize">{item.position}</p>
                            
                        </div>
                        )
                    }
                    

                </div>
            </div>
        </section>
       
    )
}

export default SectionFour