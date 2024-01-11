import { useParams } from "react-router-dom";
import { getDataById } from '../const/Images'
import ImgCard from "../components/ImgCard";
import IconRight from '../assets/arrowRight.svg';
import { useNavigate } from "react-router-dom";

const ExpertPage = () => {
    const navigate = useNavigate();
    const params = useParams();
    if (!params.id) {
        return null;
    }

    const data = getDataById(+params.id)

    if (!data) {
        return null;
    }

    return (

        <section className="w-full h-full mt-10 pt-20 md:px-20">
            <h2 className="w-full m-auto lg:w-11/12 lg:ml-10 lg:pl-10 text-left">Meet the Experts</h2>
            <div className="w-full lg:w-11/12 m-auto grid grid-cols-1 lg:grid-cols-3 text-left justify-start pb-[20px]">
                <div className="md:flex-2 text-center md:text-left">
                    <br />
                    <div className="w-full flex-none max-w-[700px]">
                        <ImgCard key={params.id} {...data}></ImgCard>
                    </div>
                </div>
                <div className="w-fulltext-left px-3 mt-10 lg:col-span-2">
                    <p className="text-xl">{data.quote}</p>
                </div>
            </div>
            <button className="grid bg-transparent align-middle items-center h-[80px] w-[150px] border-0 hover:bg-transparent hover:text-[#002d2e] grid-cols-2" onClick={()=>navigate(-1)}>
                        <div className="w-full"><img src={IconRight} className="p-0 rotate-180" /></div><div className="pl-3">Back</div>
                    </button>
        </section>
    )
}
export default ExpertPage;