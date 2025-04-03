import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

const Hero = () => {
  return (
        <section className="w-full bg-[#0a2855] text-white py-12 md:py-16 px-5 md:px-20 lg:px-32">
        <div className="">
          <div className="flex flex-col md:flex-row items-center justify-center gap-20">
            <div className="md:w-[60%] space-y-6">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
                GROW YOUR
                <br />
                BRAND NOW!
              </h1>
              <div className="w-24 h-1 bg-amber-500"></div>
              <p className="text-lg">
                360 degree Digital Marketing with Finance Gaze! We have team of experts who can grow your brand exponential
                with their innovative ideas and strategies.
              </p>
              <div>
                <Button className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-8 py-2">LEARN MORE</Button>
              </div>
            </div>

            <div className="bg-white w-full md:w-[40%]  text-black p-6 rounded-md">
              <h2 className="text-2xl font-bold mb-6">Request a Callback</h2>
              <form className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm text-gray-600">
                    Your Name
                  </label>
                  <Input id="name" type="text" placeholder="Your Name" className="w-full p-2 border rounded" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact" className="text-sm text-gray-600">
                    Contact Number
                  </label>
                  <Input
                    id="contact"
                    type="tel"
                    placeholder="Your Contact Number"
                    className="w-full p-2 border rounded"
                  />
                </div>
                <Button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold">
                  SUBMIT
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    
  )
}

export default Hero