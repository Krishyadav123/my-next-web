import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import React from 'react'
import { 
  FaCheckCircle, 
  FaUsers, 
  FaChartLine, 
  FaTrophy, 
  FaHandshake, 
  FaStar,
  FaQuoteLeft,
  FaLinkedin,
  FaTwitter
} from "react-icons/fa";

const page = () => {
  return (
    <div>

        <Navbar />
        <section className="relative bg-[#0A2855] text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A2855] to-[#0A2855]/70 z-10"></div>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}></div>
        
        <div className="relative z-20 max-w-6xl mx-auto px-6 text-center">
          <div className="inline-block bg-[#FE9900] text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
            ABOUT Finance Gaze
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">We're Redefining Financial Solutions</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90 mb-10">
            With over 10 years of experience, we've helped thousands of clients achieve their financial goals through innovative solutions and personalized service.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-[#FE9900] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#e68700] transition-all">
              OUR SERVICES
            </button>
            <button className="bg-transparent text-white border border-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all">
              MEET THE TEAM
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <img 
                  src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202309/loans-sixteen_nine.jpg?size=948:533" 
                  alt="About Finance Gaze" 
                  className="rounded-lg shadow-xl z-10 relative"
                />
                <div className="absolute -bottom-4 -right-4 bg-[#FE9900] w-48 h-48 rounded-lg -z-10"></div>
                <div className="absolute -top-4 -left-4 border-2 border-[#0A2855] w-full h-full rounded-lg -z-10"></div>
              </div>
            </div>
            
            <div>
              <div className="inline-block bg-[#FE9900]/20 text-[#FE9900] px-4 py-1 rounded-full text-sm font-medium mb-4">
                OUR STORY
              </div>
              <h2 className="text-3xl font-bold text-[#0A2855] mb-6">
                Empowering Financial Freedom Since 2013
              </h2>
              <p className="text-gray-600 mb-6">
                Founded with a vision to revolutionize the financial services industry, Finance Gaze has grown from a small advisory firm to a comprehensive financial solutions provider trusted by clients across the nation.
              </p>
              <p className="text-gray-600 mb-6">
                Our journey began with a simple mission: to make financial services more accessible, transparent, and effective for everyone. Today, we continue to uphold these values while expanding our expertise and technological capabilities.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div className="flex items-start">
                  <FaCheckCircle className="text-[#FE9900] text-xl mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold text-[#0A2855]">Expert Advisors</h3>
                    <p className="text-gray-600 text-sm">Certified professionals with decades of experience</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaCheckCircle className="text-[#FE9900] text-xl mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold text-[#0A2855]">Personalized Approach</h3>
                    <p className="text-gray-600 text-sm">Solutions tailored to your unique financial goals</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaCheckCircle className="text-[#FE9900] text-xl mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold text-[#0A2855]">Innovative Technology</h3>
                    <p className="text-gray-600 text-sm">Cutting-edge tools for better financial decisions</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaCheckCircle className="text-[#FE9900] text-xl mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold text-[#0A2855]">Transparent Process</h3>
                    <p className="text-gray-600 text-sm">Clear communication and no hidden fees</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0A2855]/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#FE9900]/20 text-[#FE9900] px-4 py-1 rounded-full text-sm font-medium mb-4">
              PURPOSE & DIRECTION
            </div>
            <h2 className="text-3xl font-bold text-[#0A2855] mb-4">Our Mission & Vision</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We're driven by a clear purpose and a forward-looking vision that guides everything we do.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all border-b-4 border-[#FE9900]">
              <div className="bg-[#FE9900]/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaHandshake className="text-[#FE9900] text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-[#0A2855] mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-6">
                To empower individuals and businesses with innovative financial solutions that enable them to achieve their goals and secure their financial future through expert guidance, cutting-edge technology, and personalized service.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaStar className="text-[#FE9900] text-sm mt-1.5 mr-2" />
                  <span className="text-gray-700">Providing accessible financial expertise to all</span>
                </li>
                <li className="flex items-start">
                  <FaStar className="text-[#FE9900] text-sm mt-1.5 mr-2" />
                  <span className="text-gray-700">Creating transparent, client-centered relationships</span>
                </li>
                <li className="flex items-start">
                  <FaStar className="text-[#FE9900] text-sm mt-1.5 mr-2" />
                  <span className="text-gray-700">Delivering innovative solutions for complex challenges</span>
                </li>
              </ul>
            </div>
            
            {/* Vision Card */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all border-b-4 border-[#0A2855]">
              <div className="bg-[#0A2855]/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaChartLine className="text-[#0A2855] text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-[#0A2855] mb-4">Our Vision</h3>
              <p className="text-gray-600 mb-6">
                To be the most trusted financial partner for our clients, recognized for our integrity, expertise, and innovative approach, while transforming the financial services landscape and setting new standards of excellence in the industry.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaStar className="text-[#0A2855] text-sm mt-1.5 mr-2" />
                  <span className="text-gray-700">Becoming the industry leader in client satisfaction</span>
                </li>
                <li className="flex items-start">
                  <FaStar className="text-[#0A2855] text-sm mt-1.5 mr-2" />
                  <span className="text-gray-700">Setting new benchmarks for financial service excellence</span>
                </li>
                <li className="flex items-start">
                  <FaStar className="text-[#0A2855] text-sm mt-1.5 mr-2" />
                  <span className="text-gray-700">Revolutionizing how people manage and grow their wealth</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* Company Stats */}
      <section className="py-20 bg-[#0A2855]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-white/20 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
              OUR IMPACT
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Our Growth in Numbers</h2>
            <p className="text-white/80 max-w-3xl mx-auto">
              Over the years, we've achieved significant milestones that reflect our commitment to excellence and client success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Stat 1 */}
            <div className="bg-white/10 p-6 rounded-lg text-center hover:bg-white/20 transition-all backdrop-blur-sm">
              <div className="text-[#FE9900] text-4xl font-bold mb-2">10+</div>
              <div className="text-white font-medium">Years of Experience</div>
            </div>
            
            {/* Stat 2 */}
            <div className="bg-white/10 p-6 rounded-lg text-center hover:bg-white/20 transition-all backdrop-blur-sm">
              <div className="text-[#FE9900] text-4xl font-bold mb-2">5000+</div>
              <div className="text-white font-medium">Satisfied Clients</div>
            </div>
            
            {/* Stat 3 */}
            <div className="bg-white/10 p-6 rounded-lg text-center hover:bg-white/20 transition-all backdrop-blur-sm">
              <div className="text-[#FE9900] text-4xl font-bold mb-2">₹500Cr+</div>
              <div className="text-white font-medium">Assets Managed</div>
            </div>
            
            {/* Stat 4 */}
            <div className="bg-white/10 p-6 rounded-lg text-center hover:bg-white/20 transition-all backdrop-blur-sm">
              <div className="text-[#FE9900] text-4xl font-bold mb-2">15+</div>
              <div className="text-white font-medium">Industry Awards</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#FE9900]/20 text-[#FE9900] px-4 py-1 rounded-full text-sm font-medium mb-4">
              WHAT DRIVES US
            </div>
            <h2 className="text-3xl font-bold text-[#0A2855] mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              These principles guide our decisions, shape our culture, and define how we serve our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all border-t-4 border-[#FE9900]">
              <div className="bg-[#FE9900]/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <span className="font-bold text-[#FE9900] text-2xl">01</span>
              </div>
              <h3 className="text-xl font-bold text-[#0A2855] mb-3">Integrity</h3>
              <p className="text-gray-600">
                We uphold the highest ethical standards in all our interactions, ensuring transparency, honesty, and accountability in everything we do.
              </p>
            </div>
            
            {/* Value 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all border-t-4 border-[#FE9900]">
              <div className="bg-[#FE9900]/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <span className="font-bold text-[#FE9900] text-2xl">02</span>
              </div>
              <h3 className="text-xl font-bold text-[#0A2855] mb-3">Excellence</h3>
              <p className="text-gray-600">
                We pursue excellence in all aspects of our work, continuously improving our processes, expertise, and service delivery to exceed expectations.
              </p>
            </div>
            
            {/* Value 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all border-t-4 border-[#FE9900]">
              <div className="bg-[#FE9900]/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <span className="font-bold text-[#FE9900] text-2xl">03</span>
              </div>
              <h3 className="text-xl font-bold text-[#0A2855] mb-3">Client-Centric</h3>
              <p className="text-gray-600">
                We put our clients at the center of everything we do, tailoring our solutions to their unique needs and working tirelessly to help them achieve their goals.
              </p>
            </div>
            
            {/* Value 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all border-t-4 border-[#FE9900]">
              <div className="bg-[#FE9900]/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <span className="font-bold text-[#FE9900] text-2xl">04</span>
              </div>
              <h3 className="text-xl font-bold text-[#0A2855] mb-3">Innovation</h3>
              <p className="text-gray-600">
                We embrace innovation and leverage technology to develop creative solutions to complex financial challenges and enhance the client experience.
              </p>
            </div>
            
            {/* Value 5 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all border-t-4 border-[#FE9900]">
              <div className="bg-[#FE9900]/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <span className="font-bold text-[#FE9900] text-2xl">05</span>
              </div>
              <h3 className="text-xl font-bold text-[#0A2855] mb-3">Collaboration</h3>
              <p className="text-gray-600">
                We believe in the power of teamwork and partnership, working closely with our clients and colleagues to achieve shared success.
              </p>
            </div>
            
            {/* Value 6 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all border-t-4 border-[#FE9900]">
              <div className="bg-[#FE9900]/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <span className="font-bold text-[#FE9900] text-2xl">06</span>
              </div>
              <h3 className="text-xl font-bold text-[#0A2855] mb-3">Social Responsibility</h3>
              <p className="text-gray-600">
                We are committed to making a positive impact on our community through ethical business practices and active community engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />

    </div>
  )
}

export default page