import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import React from 'react';
import { 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaFacebook, 
  FaInstagram, 
  FaLinkedin, 
  FaYoutube, 
  FaWhatsapp,
  FaHeadset,
  FaComments
} from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
        <Navbar />
      
      {/* Hero Section with Background Image */}
      <section className="relative bg-[#0A2855] text-white py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A2855] to-[#0A2855]/80"></div>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}></div>
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <div className="inline-block bg-[#FE9900] text-white px-4 py-1 rounded-full text-sm font-medium mb-4">REACH OUT TO US</div>
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">Have questions or need assistance? Our team is here to help you with any inquiries you may have.</p>
        </div>
      </section>

      {/* Contact Info Cards */}
      {/* <section className="max-w-6xl mx-auto  px-6 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    
          <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all">
            <div className="bg-[#0A2855]/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaPhoneAlt className="text-[#0A2855] text-2xl" />
            </div>
            <h3 className="text-lg font-semibold text-[#0A2855]">Call Us</h3>
            <p className="text-gray-600 mt-2">We're available Monday-Friday, 9am-6pm IST</p>
            <p className="text-[#FE9900] font-bold mt-2">+91 8530113456</p>
            <p className="text-[#FE9900] font-bold">020 41318888</p>
          </div>
  
          <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all">
            <div className="bg-[#0A2855]/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaEnvelope className="text-[#0A2855] text-2xl" />
            </div>
            <h3 className="text-lg font-semibold text-[#0A2855]">Email Us</h3>
            <p className="text-gray-600 mt-2">We'll respond to your email within 24 hours</p>
            <p className="text-[#FE9900] font-bold mt-2">enquire@Finance Gaze.com</p>
          </div>
          
   
          <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all">
            <div className="bg-[#0A2855]/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaMapMarkerAlt className="text-[#0A2855] text-2xl" />
            </div>
            <h3 className="text-lg font-semibold text-[#0A2855]">Visit Us</h3>
            <p className="text-gray-600 mt-2">Our headquarters is located in Pune</p>
            <p className="text-[#FE9900] font-bold mt-2">Pune, Maharashtra</p>
          </div>
        </div>
      </section> */}

      {/* Main Contact Section */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0A2855]">How Can We Help You?</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Whether you have questions about our services, need a consultation, or want to discuss a potential collaboration, we're here for you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left Side - Contact Form */}
          <div className="bg-white p-8 shadow-lg rounded-lg lg:col-span-3 transform hover:translate-y-[-5px] transition-all duration-300">
            <div className="flex items-center mb-6">
              <FaHeadset className="text-[#FE9900] text-3xl mr-4" />
              <h2 className="text-2xl font-semibold text-[#0A2855]">Get in Touch</h2>
            </div>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#FE9900] focus:outline-none focus:ring-2 focus:ring-[#FE9900]/20"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#FE9900] focus:outline-none focus:ring-2 focus:ring-[#FE9900]/20"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Contact Number</label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#FE9900] focus:outline-none focus:ring-2 focus:ring-[#FE9900]/20"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#FE9900] focus:outline-none focus:ring-2 focus:ring-[#FE9900]/20">
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="partnership">Partnership Opportunities</option>
                  <option value="feedback">Feedback</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                <textarea
                  placeholder="How can we help you?"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#FE9900] focus:outline-none focus:ring-2 focus:ring-[#FE9900]/20"
                  rows="4"
                ></textarea>
              </div>
              
              <div className="flex items-center">
                <input type="checkbox" id="newsletter" className="mr-2 h-4 w-4 text-[#FE9900] focus:ring-[#FE9900]" />
                <label htmlFor="newsletter" className="text-sm text-gray-700">Subscribe to our newsletter for updates</label>
              </div>
              
              <button className="w-full bg-[#FE9900] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e68700] transition-all flex items-center justify-center">
                <FaComments className="mr-2" />
                SEND MESSAGE
              </button>
            </form>
          </div>

          {/* Right Side - Contact Details */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 shadow-lg rounded-lg mb-6 transform hover:translate-y-[-5px] transition-all duration-300">
              <h2 className="text-2xl font-semibold text-[#0A2855] mb-6">Our Information</h2>
              
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="bg-[#0A2855]/10 h-10 w-10 rounded-full flex items-center justify-center mt-1">
                    <FaPhoneAlt className="text-[#0A2855]" />
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium">Call us at</p>
                    <p className="text-lg font-bold text-[#0A2855]">+91 8530113456</p>
                    <p className="text-lg font-bold text-[#0A2855]">020 41318888</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="bg-[#0A2855]/10 h-10 w-10 rounded-full flex items-center justify-center mt-1">
                    <FaEnvelope className="text-[#0A2855]" />
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium">Email us at</p>
                    <p className="text-lg font-bold text-[#0A2855]">enquire@FinanceGaze.com</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start space-x-4">
                  <div className="bg-[#0A2855]/10 h-10 w-10 rounded-full flex items-center justify-center mt-1">
                    <FaMapMarkerAlt className="text-[#0A2855]" />
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium">Visit our office</p>
                    <p className="text-lg font-bold text-[#0A2855]">
                      Registered Corporate Office: Pune, Maharashtra
                    </p>
                    <a href="#" className="text-[#FE9900] font-medium hover:underline inline-flex items-center mt-2">
                      Get directions
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Operation Hours */}
              <div className="mt-8 border-t pt-6">
                <h3 className="text-[#0A2855] font-semibold">Business Hours</h3>
                <ul className="mt-3 space-y-2">
                  <li className="flex justify-between text-gray-700">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between text-gray-700">
                    <span>Saturday:</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between text-gray-700">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>

              {/* Social Media */}
              <div className="mt-8 border-t pt-6">
                <h3 className="text-[#0A2855] font-semibold">Connect With Us</h3>
                <div className="flex space-x-4 mt-3">
                  <a href="#" className="bg-[#0A2855]/10 h-10 w-10 rounded-full flex items-center justify-center hover:bg-[#FE9900]/20 transition-all">
                    <FaFacebook className="text-[#0A2855]" />
                  </a>
                  <a href="#" className="bg-[#0A2855]/10 h-10 w-10 rounded-full flex items-center justify-center hover:bg-[#FE9900]/20 transition-all">
                    <FaInstagram className="text-[#0A2855]" />
                  </a>
                  <a href="#" className="bg-[#0A2855]/10 h-10 w-10 rounded-full flex items-center justify-center hover:bg-[#FE9900]/20 transition-all">
                    <FaLinkedin className="text-[#0A2855]" />
                  </a>
                  <a href="#" className="bg-[#0A2855]/10 h-10 w-10 rounded-full flex items-center justify-center hover:bg-[#FE9900]/20 transition-all">
                    <FaYoutube className="text-[#0A2855]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      {/* <section className="max-w-6xl mx-auto py-12 px-6">
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <div className="bg-gray-200 rounded-lg h-64 w-full flex items-center justify-center">
            <div className="text-center">
              <FaMapMarkerAlt className="text-[#0A2855] text-4xl mx-auto mb-3" />
              <p className="text-gray-700">Interactive map would be displayed here</p>
              <p className="text-sm text-gray-500">(Replace with actual Google Maps iframe)</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* FAQ Section */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0A2855]">Frequently Asked Questions</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Find quick answers to common questions about our services and support.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* FAQ Item 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
            <h3 className="text-lg font-semibold text-[#0A2855]">What services does Finance Gaze offer?</h3>
            <p className="text-gray-600 mt-2">
              Finance Gaze offers a comprehensive range of financial services including investment advisory, wealth management, tax planning, and retirement solutions.
            </p>
          </div>
          
          {/* FAQ Item 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
            <h3 className="text-lg font-semibold text-[#0A2855]">How quickly can I expect a response?</h3>
            <p className="text-gray-600 mt-2">
              We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call our support line.
            </p>
          </div>
          
          {/* FAQ Item 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
            <h3 className="text-lg font-semibold text-[#0A2855]">Do you offer virtual consultations?</h3>
            <p className="text-gray-600 mt-2">
              Yes, we offer both in-person and virtual consultations to accommodate your preferences and schedule.
            </p>
          </div>
          
          {/* FAQ Item 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
            <h3 className="text-lg font-semibold text-[#0A2855]">How can I schedule an appointment?</h3>
            <p className="text-gray-600 mt-2">
              You can schedule an appointment by filling out our contact form, calling our office, or sending us an email with your preferred date and time.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <a href="#" className="text-[#FE9900] font-medium hover:underline inline-flex items-center">
            View all FAQs
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0A2855] py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Our team of experts is ready to help you achieve your financial goals. Contact us today for a free initial consultation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-[#FE9900] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#e68700] transition-all">
              SCHEDULE A CALL
            </button>
            <button className="bg-transparent text-white border border-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all">
              LEARN MORE
            </button>
          </div>
        </div>
      </section>

      {/* WhatsApp Button */}
      <div className="fixed bottom-5 right-5 flex items-center space-x-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg cursor-pointer hover:scale-105 transition-all z-50">
        <FaWhatsapp className="text-2xl" />
        <span className="font-semibold">Chat with Us</span>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;