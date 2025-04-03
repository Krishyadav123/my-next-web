import Image from "next/image";
import React from "react";

const WhyWeAreBest = () => {
  return (
    <section className="w-full px-5 lg:px-32 py-12 bg-gray-50">
      <div className="w-full h-full">
        <h2 className="text-3xl font-bold text-center mb-10">
          WHY WE ARE THE BEST
        </h2>

        <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2  justify-center gap-10">
          <div className="h-full w-full  space-y-8">
            <div className="flex items-start gap-6">
              <div className="text-6xl font-light text-gray-300">1</div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  19 Years of Experience
                </h3>
                <p className="text-gray-600">
                  We've been in the finance industry for almost two decades.
                  This experience means we know how to navigate the complexities
                  of securing loans faster at best rates. Our loan consultants
                  can offer expert guidance.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="text-6xl font-light text-gray-300">2</div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  100% Client Satisfaction
                </h3>
                <p className="text-gray-600">
                  Your happiness is our top priority. We strive to make every
                  client completely satisfied with our services, ensuring a
                  positive experience from start to finish.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="text-6xl font-light text-gray-300">3</div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  80% Disbursement Rate
                </h3>
                <p className="text-gray-600">
                  We have a high success rate in getting loans approved. With an
                  80% disbursement rate, you have a great chance of securing the
                  loan you need with us.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="text-6xl font-light text-gray-300">4</div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Fastest Loan Approval
                </h3>
                <p className="text-gray-600">
                  We know that time is precious. Our streamlined processes
                  ensure that your loan gets approved quickly, so you can access
                  your funds without unnecessary delays.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="text-6xl font-light text-gray-300">5</div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Hassle-Free Loan Process
                </h3>
                <p className="text-gray-600">
                  We handle all the complexities of securing a loan so you don't
                  have to. Our goal is to make the process as easy and
                  stress-free as possible for you.
                </p>
              </div>
            </div>
          </div>

          <div className="max-h-[600px] overflow-hidden flex flex-col gap-4 items-center justify-center">
            <div className="w-full h-1/2 ">
              <img
                src="https://www.hexafin.com/wp-content/uploads/2022/11/Untitled-design-16.jpg"
                className="w-full h-full object-cover rounded-md "
                alt=""
              />
            </div>
            <div className="h-1/2 grid grid-cols-2 gap-4">
              <div>
                <img
                  src="https://www.hexafin.com/wp-content/uploads/elementor/thumbs/1-qphvjjxjk14mfbxxo325xyn61aaa2qfhlqh34sloo8.jpg"
                  className="w-full h-full rounded-md object-cover"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://www.hexafin.com/wp-content/uploads/elementor/thumbs/1-qphvjjxjk14mfbxxo325xyn61aaa2qfhlqh34sloo8.jpg"
                  className="w-full h-full rounded-md object-cover"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWeAreBest;
