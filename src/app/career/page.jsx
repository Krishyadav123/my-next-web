import Navbar from '@/components/layout/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {

    const benefits = [
        {
            id: 1,
            title: "Opportunity for Growth",
            description:
              "At Finance Gaze, we value talent and dedication. Whether you're a seasoned professional or just starting your career, we offer ample opportunities for growth and advancement.",
          },
          {
            id: 2,
            title: "Dynamic Work Environment",
            description:
              "Be part of a vibrant and dynamic work environment where your ideas are valued, and your contributions make a difference. We encourage creativity, initiative, and out-of-the-box thinking.",
          },
          {
            id: 3,
            title: "Industry-Leading Training",
            description:
              "Joining Finance Gaze means access to industry-leading training programs and resources to enhance your skills and knowledge. We invest in our team members' professional development to ensure they stay ahead in the ever-evolving financial landscape.",
          },
          {
            id: 4,
            title: "Collaborative Team Culture",
            description:
              "At Finance Gaze, teamwork is at the heart of everything we do. Collaborate with talented professionals from diverse backgrounds and work together to achieve common goals.",
          },
          {
            id: 5,
            title: "Impactful Work",
            description:
              "Make a meaningful impact by helping individuals and businesses achieve their financial goals. At Finance Gaze, every team member plays a vital role in empowering our clients and driving positive change in the community.",
          },
          {
            id: 6,
            title: "Work-Life Balance",
            description:
              "We understand the importance of maintaining a healthy work-life balance. At Finance Gaze, we offer flexible work arrangements to ensure you have time for both your career and personal life.",
          },
      ];

  return (
    <div>

<Navbar />
        <section className="py-16 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          Join the Finance Gaze Team & Shape the Future of Finance!
        </h2>
        <p className="mt-4 text-gray-700">
          Are you ready to embark on an exciting career journey in the dynamic world of finance? Look no further than Finance Gaze Consultancy, where we’re redefining the way people access financial services and shaping the future of the industry.
        </p>
      </div>

      <div className="mt-12 max-w-6xl mx-auto flex flex-col lg:flex-row items-center bg-white shadow-lg rounded-lg p-6">
        {/* Image Section */}
        <div className="lg:w-1/2">
          <img
            src="https://www.hexafin.com/wp-content/uploads/2024/05/career-1536x1024.jpg" // Replace with the actual image path
            alt="Handshake Resume"
            width={500}
            height={350}
            className="rounded-lg"
          />
        </div>

        {/* Info Section */}
        <div className="lg:w-1/2 mt-6 lg:mt-0 lg:ml-8 space-y-4">
          <div className="flex items-center">
            <span className="text-[#fe9900] text-2xl mr-3">🏢</span>
            <p className="text-gray-900 font-bold">30 Branches</p>
          </div>
          <p className="text-gray-600">
            Finance Gaze Consultancy proudly serves clients across India with a strong network of 30 branches nationwide.
          </p>

          <div className="flex items-center">
            <span className="text-[#fe9900] text-2xl mr-3">👥</span>
            <p className="text-gray-900 font-bold">300 employees</p>
          </div>
          <p className="text-gray-600">
            We have a dedicated team of 300 employees who are committed to delivering exceptional financial services.
          </p>

          <div className="flex items-center">
            <span className="text-[#fe9900] text-2xl mr-3">📈</span>
            <p className="text-gray-900 font-bold">65000+ Clients Served</p>
          </div>
          <p className="text-gray-600">
            With over 65,000 clients served, Finance Gaze Consultancy has established a strong reputation for reliability and excellence in financial services.
          </p>

          <div className="flex items-center">
            <span className="text-[#fe9900] text-2xl mr-3">⏳</span>
            <p className="text-gray-900 font-bold">19 Years in Finance Industry</p>
          </div>
          <p className="text-gray-600">
            We have been working in the finance industry for 19 years and achieved big milestones.
          </p>

          <Link href="/careers">
            <button className="mt-4 px-6 py-2 bg-[#fe9900] text-white font-semibold rounded-lg shadow hover:bg-orange-600">
              Learn More
            </button>
          </Link>
        </div>
      </div>

      {/* WhatsApp Chat Button */}
      <div className="fixed bottom-6 right-6">
        <Link href="https://wa.me/1234567890" target="_blank">
          <button className="flex items-center px-4 py-2 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600">
            <span className="mr-2">Chat with Us</span> 🟢
          </button>
        </Link>
      </div>
    </section>


    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900">WHY CHOOSE Finance Gaze?</h2>
        <p className="text-lg text-gray-600 mt-3">
          At Finance Gaze, we believe in fostering a culture of innovation, collaboration, and excellence.
          Here’s why you should consider joining our team.
        </p>
      </div>

      <div className="mt-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {benefits.map((benefit) => (
          <div key={benefit.id} className="flex items-start p-6 bg-white rounded-xl shadow-lg border-l-4 border-[#fe9900] transition-transform duration-200 hover:-translate-y-2">
            <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-[#fe9900] text-white text-xl font-bold">
              {benefit.id}
            </div>
            <div className="ml-5">
              <h3 className="text-lg font-semibold text-gray-900">{benefit.title}</h3>
              <p className="text-gray-600 mt-1">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>


    <div className="max-w-4xl mx-auto p-6 font-sans">
      {/* Header */}
      <h1 className="text-[#0a2855] text-3xl font-bold pb-3 border-b-2 border-[#fe9900]">
        Current Job Openings
      </h1>

      {/* Job Openings List */}
      <div className="space-y-8 mt-8">
        {/* Job 1 */}
        <div className="border-l-4 border-[#fe9900] pl-4">
          <h2 className="text-[#0a2855] text-xl font-semibold">1. Sales Manager (Loans)</h2>
          <p className="text-gray-700 mt-2">
            Lead and manage loan sales team to achieve targets for various loan products. Develop sales strategies, build client relationships, and ensure compliance with policies and regulations.
          </p>
        </div>

        {/* Job 2 */}
        <div className="border-l-4 border-[#fe9900] pl-4">
          <h2 className="text-[#0a2855] text-xl font-semibold">2. Assistant Sales Manager</h2>
          <p className="text-gray-700 mt-2">
            Support Sales Manager in sales planning, client acquisition, and team coordination. Assist in preparing reports, coordinating sales activities, and providing guidance to team members.
          </p>
        </div>

        {/* Job 3 */}
        <div className="border-l-4 border-[#fe9900] pl-4">
          <h2 className="text-[#0a2855] text-xl font-semibold">3. Team Leader</h2>
          <p className="text-gray-700 mt-2">
            Supervise and motivate loan consultants to achieve sales targets. Provide coaching, training, and feedback to enhance team performance. Ensure compliance with policies and handle customer inquiries effectively.
          </p>
        </div>

        {/* Job 4 */}
        <div className="border-l-4 border-[#fe9900] pl-4">
          <h2 className="text-[#0a2855] text-xl font-semibold">4. Telemarketing Officer/BPO</h2>
          <p className="text-gray-700 mt-2">
            We are seeking a dynamic and persuasive Telemarketing Officer / BPO to join our team. The ideal candidate will possess excellent communication skills, a customer-centric approach, and the ability to achieve sales targets. Key responsibilities include making outbound calls, handling customer inquiries, and maintaining accurate call records.
          </p>
        </div>

        {/* Job 5 */}
        <div className="border-l-4 border-[#fe9900] pl-4">
          <h2 className="text-[#0a2855] text-xl font-semibold">5. Backend Co-ordinator</h2>
          <p className="text-gray-700 mt-2">
            We are looking for a detail-oriented Backend Coordinator with strong organizational skills and a proactive approach. Responsibilities include managing data entry, coordination with various departments, and ensuring smooth backend operations.
          </p>
        </div>
      </div>

      {/* Application Form */}
      <div className="mt-12 bg-gray-50 p-6 rounded-lg">
        <h3 className="text-[#0a2855] text-xl font-semibold mb-4">
          Fill the form below to apply for the job position:
        </h3>

        <form className="space-y-4">
          <div>
            <label className="block text-[#0a2855] font-medium mb-1">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#fe9900]"
            />
          </div>

          <div>
            <label className="block text-[#0a2855] font-medium mb-1">Your Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#fe9900]"
            />
          </div>

          <div>
            <label className="block text-[#0a2855] font-medium mb-1">Contact Number</label>
            <input
              type="tel"
              placeholder="Enter your mobile number"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#fe9900]"
            />
          </div>

          <div>
            <label className="block text-[#0a2855] font-medium mb-1">Job Position</label>
            <select className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#fe9900] text-gray-700">
              <option>—Please choose an option—</option>
              <option>Sales Manager (Loans)</option>
              <option>Assistant Sales Manager</option>
              <option>Team Leader</option>
              <option>Telemarketing Officer/BPO</option>
              <option>Backend Co-ordinator</option>
            </select>
          </div>

          <div>
            <label className="block text-[#0a2855] font-medium mb-1">
              Your Resume Google Drive Link or LinkedIn Profile Link
            </label>
            <input
              type="url"
              placeholder="Resume Link or LinkedIn Profile Link"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#fe9900]"
            />
          </div>

          <div className="flex space-x-4 pt-4">
            <button
              type="submit"
              className="bg-[#fe9900] hover:bg-[#e68a00] text-white font-bold py-2 px-6 rounded transition duration-200"
            >
              SUBMIT
            </button>
            <button
              type="button"
              className="bg-[#0a2855] hover:bg-[#081c3f] text-white font-bold py-2 px-6 rounded transition duration-200"
            >
              Chat with Us
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  )
}

export default page