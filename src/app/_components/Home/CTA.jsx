import { Button } from '@/components/ui/button'
import React from 'react'

const CTA = () => {
  return (
    <section className="w-full py-12 bg-[#0a2855] text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center space-y-6">
            <h3 className="text-xl text-amber-500 font-medium">Do you want a best loan offer?</h3>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Talk to our Loan Consultant !</h2>
            <div className="mt-4">
              <Button className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-8 py-2">CONTACT NOW</Button>
            </div>
          </div>
        </div>
        {/* <div
          className="absolute inset-0 opacity-20 bg-repeat"
          style={{
            backgroundImage: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z'/%3E%3C/svg%3E"),
          }}
        ></div> */}
      </section>
  )
}

export default CTA