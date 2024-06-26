import { useParams, useNavigate } from "react-router-dom";

import ImgCard from "../components/ImgCard";

import { getDataById } from "../const/Images";

import IconRight from "../assets/arrowRight.svg";

import {Helmet} from 'react-helmet';

const ExpertPage = () => {
  const navigate = useNavigate();
  const params = useParams();

  if (!params.id) {
    return null;
  }

  const data = getDataById(+params.id);

  if (!data) {
    return null;
  }

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Expert Info</title>
        <meta name="description" content="NMeet Our Experts" />
        <meta name="description" content="Apteum pairs you with professionals abroad to build bespoke staffing solutions" />
        <meta name="keywords" content="Apteum, customer service, people support, professional services, staffing solutions, staffing, expertise, service specialists, employers, jobseekers, project management, talented professionals, talent acquisition service, staff recruitment"></meta>
      </Helmet>
    <section className="w-full p-6 lg:py-10 lg:px-20 xl:px-30 h-full">
      <h2 className="text-left">Meet the Experts</h2>

      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="col-span-1">
          <ImgCard key={params.id} highlight {...data}></ImgCard>
        </div>

        <div className="lg:col-span-2">
          <p className="text-xl text-left ">{data.quote}</p>
        </div>
      </div>

      <div className="mt-5 md:mt-10 lg:pb-[120px]">
        <button className="flex items-center" onClick={() => navigate(-1)}>
          <div className="w-8">
            <img src={IconRight} className="rotate-180" />
          </div>
          <div className="ml-3">Back</div>
        </button>
      </div>
    </section>
    </div>
  );
};

export default ExpertPage;
