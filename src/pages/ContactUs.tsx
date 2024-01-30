import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import arrowRight from "../assets/arrowRight.svg";

import ContactForHrImg from "../assets/contact-for-hr.png";
import { Helmet } from "react-helmet";

const schema = yup
  .object({
    name: yup.string().required("Name required"),
    email: yup.string().email().required("Email required"),
    phone: yup.string(),
    message: yup.string(),
  })
  .required();

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onClickSend = handleSubmit((e) => {
    let message = "";

    if (e.message) {
      message = encodeURIComponent(e.message);
    }

    const subject = `Apteum Enquiry - ${e.name} - ${e.email} ${e.phone && "- " + e.phone
      }`;

    window.location.href = `mailto:enquire@apteum.com?subject=${subject}&body=${message}`;
  });

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact Us</title>
        <link rel="canonical" href="https://apteum.com/contact-us" />
        <meta name="description" content="Apteum pairs you with professionals abroad to build bespoke staffing solutions" />
        <meta name="keywords" content="Apteum, customer service, people support, professional services, staffing solutions, staffing, expertise, service specialists, employers, jobseekers, project management, talented professionals, talent acquisition service, staff recruitment"></meta>
      </Helmet>
      <div className="m-auto mt-10">

        <div className="p-[35px] lg:p-[80px] lg:w-10/12 mx-auto text-left grid grid-cols-1 md:grid-cols-2 gap-[60px]">
          <div>
            <h3 className="font-medium">For Business Enquiries</h3>

            <h4 className="mt-[38px] font-medium">Melbourne Office</h4>

            <h5 className="mt-[25px]">49-51 Stead Street</h5>
            <h5>South Melbourne 3205</h5>
            <h5>VIC Australia</h5>

            <h5 className="mt-[25px]">
              Please fill out our contact form or alternatively email us. We will
              be in touch with you shortly.
            </h5>

            <h5 className="mt-[25px]">enquire@apteum.com</h5>
          </div>

          <form onSubmit={onClickSend}>
            <input
              {...register("name")}
              className="contact block w-full py-[14px] px-[15px]"
              placeholder="Name"
            />
            <p className="text-red-600">{errors.name?.message}</p>

            <div className="mt-[25px] grid grid-cols-1 md:grid-cols-2 gap-[25px]">
              <div>
                <input
                  {...register("email")}
                  className="contact block w-full py-[14px] px-[15px]"
                  placeholder="Email address"
                />
                <p className="text-red-600">{errors.email?.message}</p>
              </div>

              <div>
                <input
                  {...register("phone")}
                  className="contact block w-full py-[14px] px-[15px]"
                  type="number"
                  placeholder="Phone"
                />
                <p className="text-red-600">{errors.phone?.message}</p>
              </div>
            </div>

            <textarea
              {...register("message")}
              className="contact block w-full py-[14px] px-[15px] mt-[25px]"
              placeholder="Message"
              rows={6}
            />

            <div className="mt-8">
              <a
                className="contact-btn w-fit flex items-center px-4 py-2 cursor-pointer"
                onClick={onClickSend}
              >
                Send
                <div className="pl-2 items-center flex justify-center m-auto">
                  <img
                    className="rightBtnArrow"
                    src={arrowRight}
                    width={30}
                    title="arrow right"
                    alt="pointRight"
                  />
                </div>
              </a>
            </div>
          </form>
        </div>
        <div className="w-full bg-white">
          <div className="lg:w-10/12 mx-auto p-[35px] lg:p-[80px] lg:pb-[200px] text-left grid grid-cols-1 md:grid-cols-2 gap-[60px]">

            <div className="pt-3">
              <img src={ContactForHrImg} alt="" />
            </div>
            <div>
              <h3 className="font-medium">For HR</h3>

              <h4 className="mt-[38px] font-medium">Cebu Office</h4>

              <h5 className="mt-[25px]">
                7th Floor, Park Centrale Bldg., Cebu IT Park
              </h5>
              <h5>Cebu City, 6000</h5>
              <h5>Phillipines</h5>

              <h3 className="hlText font-medium mt-[50px] ml-[-35px]">
                <span className="realistic-marker-highlight z-[1]">
                  <mark>Employment Opportunities</mark>
                </span>
              </h3>

              <h5 className="mt-[25px]">
                We're always looking for people to join our growing team of
                professionals in Cebu. If you'd like to apply for a position, or if
                you have enquiries about working at Apteum, please contact us via
                email to careers@apteum.com.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
