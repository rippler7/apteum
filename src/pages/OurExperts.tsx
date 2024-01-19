import { useNavigate } from "react-router-dom";

import mainExpBanner from "../assets/worldMap-sm.png";
import ImgCard from "../components/ImgCard";
import { images } from "../const/Images";

function OurExperts() {
  const navigate = useNavigate();

  const onClickExpert = (id: number) => {
    navigate(`/experts/${id}`);
  };

  return (
    <>
      <section className="relative w-full md:h-fit sm:h-max flex items-end justify-start text-left text-[#002d2e] z-1 pb-20">
        <div className="img-docker absolute top-0 left-0 w-full h-full overflow-hidden">
          <img
            src={mainExpBanner}
            className="md:w-10/12 m-auto h-full object-contain sm:object-none object-right sm:object-right-bottom h-1600 lg:pr-20"
          />
        </div>
        <div className="w-full md:w-10/12 mx-auto">
          <div className="img-content relative py-5 w-full max-w-sm md:max-w-5xl">
            <h2 className="p-10">Meet the experts</h2>
            <h4 className="text-2xl w-full md:w-8/12 px-10">
              We're pleased to connect organizations all over the world with
              professional, qualified staff who deliver results. Whether it's
              operational support, technical services, HR and recruitment, or
              payroll management, our experts are here to help.
            </h4>
          </div>
        </div>
      </section>
      <section className="p-10 relative w-full bg-white lg:pb-[120px]">
        <div
          id="mainOurExp"
          className="w-10/12 m-auto grid grid-cols-1 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3 mb-10 gap-6"
        >
          {images &&
            images.map((item) => (
              <div key={item.id} onClick={() => onClickExpert(item.id)}>
                <ImgCard {...item} highlight></ImgCard>
              </div>
            ))}
        </div>
      </section>
    </>
  );
}

export default OurExperts;
