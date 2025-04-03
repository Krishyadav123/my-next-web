import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import React from 'react'

const page = () => {
    const testimonials = [
        {
          name: "Vinit Shah (CMD)",
          company: "Vinit & Associates, CA",
          text: "At Om Consultancy, I was recharged with credit and peace of mind. Solid advice with creative, compassionate solution was delivered. It repaired my past with a better future.",
        },
        {
          name: "Dinesh Limbasiya",
          company: "Accenture",
          text: "I was impressed with the convenience and very helpful customer service. The approval process was streamlined and not complicated.",
        },
        {
          name: "Pradeep Jathar",
          company: "",
          text: "The process was smooth, and I received my funds within a limited timeframe. I would highly recommend Om Consultancy to anyone looking for financial assistance.",
        },
        {
          name: "Anita Verma",
          company: "TCS",
          text: "Om Consultancy's expert team helped me navigate my financial planning with ease. Highly recommend their service!",
        },
        {
          name: "Rahul Mehta",
          company: "Infosys",
          text: "A wonderful team that genuinely cares about their clients. The best financial consultation I’ve ever received.",
        },
        {
          name: "Neha Kapoor",
          company: "Amazon",
          text: "Their approach is customer-friendly and solution-oriented. Helped me get financial stability effortlessly.",
        },
        {
          name: "Amit Trivedi",
          company: "Microsoft",
          text: "Professional, reliable, and quick service. Helped me sort out my financial issues with great solutions.",
        },
        {
          name: "Suresh Patel",
          company: "Google",
          text: "I was amazed by their expertise and guidance. Truly a life-changing experience for my financial goals.",
        },
        {
          name: "Kavita Deshmukh",
          company: "IBM",
          text: "Excellent service with clear financial strategies. Helped me manage my investments effectively.",
        },
        {
          name: "Rohan Joshi",
          company: "Deloitte",
          text: "Outstanding financial guidance. Their support helped me make the right investment decisions.",
        },
      ];
  return (
    <div>
        <Navbar />  
        <div className="bg-gray-50">

{/* 🟢 HERO SECTION */}
<section className="relative bg-[#0a2855] text-white py-20 text-center">
  <h1 className="text-4xl font-bold">What Our Customers Say</h1>
  <p className="mt-3 text-lg opacity-90">
    Hear from our happy clients about their experiences with us.
  </p>
</section>

{/* 🟢 TESTIMONIALS SECTION */}
<section className="py-16 bg-gray-100">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-gray-800">Client Testimonials</h2>
  </div>

  <div className="mt-10 max-w-6xl mx-auto px-4 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    {testimonials.map((testimonial, index) => (
      <div
        key={index}
        className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-[#0a2855] transition-transform transform hover:-translate-y-2 duration-300"
      >
        <p className="text-gray-700 italic">“{testimonial.text}”</p>
        <h4 className="mt-4 font-semibold text-lg text-gray-900">{testimonial.name}</h4>
        {testimonial.company && (
          <p className="text-gray-500 text-sm">{testimonial.company}</p>
        )}
      </div>
    ))}
  </div>
</section>

{/* 🟢 CALL TO ACTION (CTA) */}
<section className="bg-[#0a2855] text-white py-20 text-center">
  <h2 className="text-3xl font-bold">Ready to Experience the Best?</h2>
  <p className="mt-3 text-lg opacity-90">Join our community and get expert financial guidance today.</p>
  <button className="mt-6 bg-white text-blue-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition-all">
    Get Started Now
  </button>
</section>

</div>
    <Footer />
    </div>
  )
}

export default page