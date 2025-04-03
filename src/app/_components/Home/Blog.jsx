import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Blog = () => {
  return (
     <section className="w-full px-5 lg:px-32 py-12 bg-white">
            <div >
              <h2 className="text-3xl font-bold text-center mb-10">BLOGS</h2>
    
              <div className="flex flex-col lg:flex-row items-center  gap-8">
                <div className="lg:w-[60%] space-y-8">
                <div className="flex gap-4 items-start">
                    <div className="w-40 md:w-44 h-28 relative flex-shrink-0">
                     <img src="https://www.hexafin.com/wp-content/uploads/2025/03/Sandhya-Designs-2025-03-26T154706.236.png" className='w-full h-full' alt="" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-md md:text-xl font-bold">
                        <Link href="#" className="hover:text-amber-500">
                          ATM Card Block Karne Ke Liye Application: Step By Step Guide 2025
                        </Link>
                      </h3>
                      <div className="text-sm text-gray-500">Banking & Finance - 2 February 2025</div>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-40 md:w-44 h-28 relative flex-shrink-0">
                     <img src="https://www.hexafin.com/wp-content/uploads/2025/03/Sandhya-Designs-2025-03-26T154706.236.png" className='w-full h-full' alt="" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-md md:text-xl font-bold">
                        <Link href="#" className="hover:text-amber-500">
                          ATM Card Block Karne Ke Liye Application: Step By Step Guide 2025
                        </Link>
                      </h3>
                      <div className="text-sm text-gray-500">Banking & Finance - 2 February 2025</div>
                    </div>
                  </div>
    
                  <div className="flex gap-4 items-start">
                    <div className="w-40 md:w-44 h-28 relative flex-shrink-0">
                     <img src="https://www.hexafin.com/wp-content/uploads/2025/03/Sandhya-Designs-2025-03-26T154706.236.png" className='w-full h-full' alt="" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-md md:text-xl font-bold">
                        <Link href="#" className="hover:text-amber-500">
                          ATM Card Block Karne Ke Liye Application: Step By Step Guide 2025
                        </Link>
                      </h3>
                      <div className="text-sm text-gray-500">Banking & Finance - 2 February 2025</div>
                    </div>
                  </div>
                </div>
    
                <div className="lg:w-[40%] max-w-[400px] space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-xl text-center font-bold text-amber-500">Awards</h3>
                    <div className="border rounded-md p-4">
                        <img src="/certificate.png" alt="" />
                      {/* <Image
                        src="/placeholder.svg?height=400&width=300"
                        alt="Certificate of Appreciation"
                        width={300}
                        height={400}
                        className="w-full h-auto"
                      /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
  )
}

export default Blog