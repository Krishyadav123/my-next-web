"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const servicesData = [
  {
    title: "Business Loan",
    description:
      "Empower your business with flexible, low-interest business loans from Finance Gaze Consultancy Private Limited. With access to over 70 leading banks and NBFCs, we offer tailored financial solutions to fuel your growth and success.",
    image: "https://www.hexafin.com/wp-content/uploads/2022/11/business-loan-now-2048x1365.jpg",
  },
  {
    title: "Professional Loan",
    description:
      "Empower Your Professional Journey with Tailored Financial Solutions. At Finance Gaze Consultancy, we offer specialized professional loans designed to meet the unique needs of doctors and chartered accountants.",
    image: "https://www.hexafin.com/wp-content/uploads/2022/11/doctor-in-white-appron-is-smiling.jpg",
  },
  {
    title: "Personal Loan",
    description:
      "We offer personalized loan solutions to help you achieve your dreams. Whether you need funds for a wedding, vacation, home renovation, or unexpected expenses, our solutions cover everything.",
    image: "https://www.hexafin.com/wp-content/uploads/2022/11/Business-man-in-a-suite-is-smiling.jpg",
  },
  {
    title: "Home Loan",
    description:
      "Turn Your Dream Home into Reality with Finance Gaze Home Loans. At Finance Gaze Consultancy, we provide customized home loan solutions to help you purchase your dream home.",
    image: "https://www.hexafin.com/wp-content/uploads/2022/11/hands-holding-home-keys-2048x1365.jpg",
  },
  {
    title: "Car Loan",
    description:
      "Drive Your Dream Car with Easy Financing. We offer competitive interest rates and flexible repayment options for new and used car purchases.",
    image: "https://www.hexafin.com/wp-content/uploads/2022/11/car-1.jpg",
  },
  {
    title: "Education Loan",
    description:
      "Invest in Your Future with Our Education Loans. Fund your higher education with flexible repayment plans and low-interest rates.",
    image: "https://www.hexafin.com/wp-content/uploads/2024/05/girl-is-wearing-degree-convocation-black-appron-and-smiling-holding-her-degree-in-her-hand.jpg",
  },
];

const Services = () => {
  return (
    <section className="w-full px-5 md:px-32 py-12 bg-gray-50">
      <div>
        <h2 className="text-3xl font-bold text-center mb-10">OUR SERVICES</h2>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          className="relative"
        >
          {servicesData.map((service, index) => (
            <SwiperSlide key={index} className="bg-white rounded-md overflow-hidden shadow-sm">
              <div className="h-48 relative">
                <img src={service.image} className="w-full h-full object-cover" alt={service.title} />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                <Link href="#" className="text-amber-500 font-medium inline-flex items-center">
                  LEARN MORE
                </Link>
              </div>
            </SwiperSlide>
          ))}

          {/* Navigation Buttons */}
          <button className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 -ml-4 bg-white p-2 rounded-full shadow-md z-10">
            {/* <ChevronLeft className="h-5 w-5" /> */}
          
          </button>
          <button className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 -mr-4 bg-white p-2 rounded-full shadow-md z-10">
            <ChevronRight className="h-5 w-5" />
          </button>
        </Swiper>

        {/* Pagination Dots */}
        <div className="swiper-pagination mt-6"></div>
      </div>
    </section>
  );
};

export default Services;
