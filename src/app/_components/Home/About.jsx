import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <section className="w-full px-5 lg:px-32 py-12 bg-white">
        <div >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Finance Gaze - NO. 1 LOAN CONSULTANTS & DIST.</h2>

          <div className="flex flex-wrap  md:gap-10 mb-8">
            <button className="px-6 py-3 text-sm font-medium border-b-2 border-amber-500 relative">
              Who we are
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-500"></span>
            </button>
            <button className="px-6 py-3 border-b-4 border-gray-300 text-sm font-medium text-gray-500">Our expertise</button>
            <button className="px-6 py-3 border-b-4 border-gray-300 text-sm font-medium text-gray-500">Principles of our work</button>
            <button className="px-6 py-3 text-sm font-medium text-gray-500 ml-auto">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            <div className="col-span-1">
              <img
                src="https://www.hexafin.com/wp-content/uploads/elementor/thumbs/team-is-working-qpfvc1dx1ger2ekiyh1q2vshmmjoacbk4k4qitsgmo.jpg"
                alt="Team meeting"
                className="w-full h-auto rounded-md"
              />
            </div>

            <div className="col-span-1">
              <div className="prose max-w-none">
                <p>
                  If you are searching the best & trusted <strong>loan consultants near you</strong> then you are at the
                  right place. Finance Gaze Consultancy Private Limited is one of the leading companies in finance industry.
                  We have been offering <strong>loan consultancy services</strong> from 19 years. Finance Gaze, currently
                  have 30 branches nationwide. We have partnered with 70+ Banks and Non-banking Financial Companies. It
                  means you will have options from 70+ banks & NBFCs to get you the best loan offer. We are trusted big
                  loan & financial consultants in India. We deal in Business Loan, Professional Loan, Personal Loan,
                  Home Loan, Loan Against Property, Car Loan, and Education Loan.
                </p>
                <Link href="#" className="text-amber-500 font-medium inline-flex items-center">
                  LEARN MORE ABOUT US
                </Link>
              </div>
            </div>

            <div className="col-span-1 bg-gray-100 p-8 relative">
              <div className="flex flex-col items-center">
                <div className="relative w-48 h-48 rounded-full overflow-hidden mb-4">
                 <img src="https://www.hexafin.com/wp-content/uploads/2024/05/1692608296338.jpeg" alt="" />
                </div>
                <h3 className="text-xl font-bold">Mr. Sanjeev Kokru</h3>
                <p className="text-sm mb-4">Founder & Director, Finance Gaze</p>
                <p className="text-sm text-center mb-4">
                  Mr. Sanjeev Kokru, has a wealth of experience in the finance industry. He has driven Finance Gaze to
                  remarkable heights, pioneering cutting-edge solutions that redefine the landscape of financial
                  services.
                </p>
                <Button className="bg-amber-500 hover:bg-amber-600 text-black">LINKEDIN PROFILE</Button>
              </div>

              <div className="absolute left-0 top-1/2 -translate-y-1/2">
                <Button variant="outline" size="icon" className="rounded-full">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
              </div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2">
                <Button variant="outline" size="icon" className="rounded-full">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <div className="flex space-x-2">
              {[1, 2, 3, 4, 5].map((dot) => (
                <span
                  key={dot}
                  className={`block h-2 w-2 rounded-full ${dot === 1 ? "bg-amber-500" : "bg-gray-300"}`}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </section>
  )
}

export default About