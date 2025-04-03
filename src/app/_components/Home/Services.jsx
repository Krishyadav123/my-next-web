import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Services = () => {
  return (
    <section className="w-full px-32 py-12 bg-gray-50">
    <div>
      <h2 className="text-3xl font-bold text-center mb-10">OUR SERVICES</h2>

      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-md overflow-hidden shadow-sm">
            <div className="h-48 relative">
            <img src="https://www.hexafin.com/wp-content/uploads/2022/11/Business-man-in-a-suite-is-smiling.jpg" className='w-full h-full' alt="" />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Business Loan</h3>
              <p className="text-sm text-gray-600 mb-4">
                Empower your business with flexible, low-interest business loans from Hexafin Consultancy Private
                Limited. With access to over 70 leading banks and NBFCs, we offer tailored financial solutions to
                fuel your growth and success.
              </p>
              <Link href="#" className="text-amber-500 font-medium inline-flex items-center">
                LEARN MORE
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-md overflow-hidden shadow-sm">
            <div className="h-48 relative">
              <img src="https://www.hexafin.com/wp-content/uploads/2022/11/Business-man-in-a-suite-is-smiling.jpg" className='w-full h-full' alt="" />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Professional Loan</h3>
              <p className="text-sm text-gray-600 mb-4">
                Empower Your Professional Journey with Tailored Financial Solutions At Hexafin Consultancy, we offer
                specialized professional loans designed to meet the unique needs of doctors and chartered
                accountants.
              </p>
              <Link href="#" className="text-amber-500 font-medium inline-flex items-center">
                LEARN MORE
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-md overflow-hidden shadow-sm">
            <div className="h-48 relative">
            <img src="https://www.hexafin.com/wp-content/uploads/2022/11/Business-man-in-a-suite-is-smiling.jpg" className='w-full h-full' alt="" />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Personal Loan</h3>
              <p className="text-sm text-gray-600 mb-4">
                We offer personalized loan solutions to help you achieve your dreams. Whether you need funds for a
                wedding, vacation, home renovation, or unexpected expenses, our solution cover everything.
              </p>
              <Link href="#" className="text-amber-500 font-medium inline-flex items-center">
                LEARN MORE
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-md overflow-hidden shadow-sm">
            <div className="h-48 relative">
            <img src="https://www.hexafin.com/wp-content/uploads/2022/11/Business-man-in-a-suite-is-smiling.jpg" className='w-full h-full' alt="" />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Home Loan</h3>
              <p className="text-sm text-gray-600 mb-4">
                Turn Your Dream Home into Reality with Hexafin Home Loans At Hexafin Consultancy, we provide
                customized home loan solutions to help you purchase your dream home.
              </p>
              <Link href="#" className="text-amber-500 font-medium inline-flex items-center">
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>

        <Button
          variant="outline"
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 bg-white z-10"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 bg-white z-10"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex justify-center mt-8">
        <div className="flex space-x-2">
          {[1, 2].map((dot) => (
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

export default Services