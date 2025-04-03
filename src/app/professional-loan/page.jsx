import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { List, Percent, Phone, Truck, BarChart3, Layers } from "lucide-react";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function Page() {
  return (
    <div>

        <Navbar />
       <div className="w-full overflow-hidden">
      <div className="relative px-5 py-10 lg:px-32  bg-blue-900">
        {/* Main container with responsive padding */}
        <div className="relative flex flex-col md:flex-row w-full">
          {/* Left content section */}
          <div className="w-full md:w-1/2 p-6 md:p-8 lg:p-12 flex flex-col justify-center z-10">
            <div className="text-orange-400 font-medium text-lg md:text-xl pb-2">
              Services
            </div>
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight pb-4">
            Professional 
            <br/>
             Loan
            </h1>
            <p className="text-white text-sm md:text-base lg:text-lg max-w-xl">
            Empower Your Professional Journey with Tailored Financial Solutions At Finance Gaze Consultancy, we offer specialized professional loans designed to meet the unique needs of doctors and chartered accountants.
            </p>
          </div>

          {/* Right image section */}
          <div className="w-full md:w-1/2 h-full">
            <div className="h-full min-h-[300px]  w-full relative">
              <img
                src="https://www.hexafin.com/wp-content/uploads/2022/11/Business-man-in-a-suite-is-smiling.jpg"
                alt="Business professional signing documents"
                className="rounded-full h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
        </div>

        {/* Chat with Us button - fixed at bottom right */}
    

      <div className="w-full bg-white px-5 md:20 lg:px-32">
        
      <div className="py-10">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center text-sm mb-8">
          <a href="/" className="text-blue-600 hover:underline">
            Home
          </a>
          <span className="mx-2 text-gray-500">»</span>
          <a href="/services" className="text-blue-600 hover:underline">
            Services
          </a>
          <span className="mx-2 text-gray-500">»</span>
          <span className="text-gray-600">Professional Loan</span>
        </div>

        {/* Main Content Layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Content Section */}
          <div className="w-full lg:w-2/3">
            {/* Main Heading */}
           <div>
           <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Professional Loan for Doctors & CA
            </h1>

            {/* Introduction Paragraph */}
            <p className="text-gray-600 mb-6">
            At Finance Gaze Consultancy Private Limited, we offer customized professional loans designed to meet the unique requirements of professionals like you.
            </p>

            {/* Second Paragraph */}
            <p className="text-gray-600 mb-6">
            Whether you are a doctor, a chartered accountant (CA), our loan solutions provide the financial support you need to achieve your goals.
            </p>

            {/* Call-to-Action */}
            <p className="text-gray-600 mb-12">
            With competitive interest rates, flexible repayment options, and minimal documentation, we make the process easy and hassle-free.
            </p>
           </div>

           <div>
           <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Professional Loan for Doctors
            </h1>

            {/* Introduction Paragraph */}
            <p className="text-gray-600 mb-6">
            If you’re a doctor looking to expand your practice, buy new equipment / devices, or even open a new clinic / hospital, our professional loan for doctors is just what you need. We provide a absolute best in class customer experience.
            </p>

            {/* Second Paragraph */}
            <p className="text-gray-600 mb-6">
            We understand the unique financial need of medical professionals & offer loans with flexible terms to help you achieve your goals faster.


            </p>

            {/* Call-to-Action */}
            <p className="text-gray-600 mb-12">
            With quick approval & minimal paperwork, you can focus on what you do best – “taking care of your patients”.
            </p>
           </div>
           <div>
           <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
           Professional Loan for Chartered Accountants
            </h1>

            {/* Introduction Paragraph */}
            <p className="text-gray-600 mb-6">
            Chartered accountants often need financial assistance to grow their practice, invest in new software, or manage operational expenses.
            </p>

            {/* Second Paragraph */}
            <p className="text-gray-600 mb-6">
            Our professional loan for chartered accountants is customized to meet these requirements.
            </p>

            {/* Call-to-Action */}
            <p className="text-gray-600 mb-6">
            We offer attractive interest rates & flexible, affordable repayment options to ensure you can manage your finances with ease.
            </p>
            <p className="text-gray-600 mb-12">
            Let us help you take your career to the next level.
            </p>
           </div>


            {/* What We Offer Section */}
          </div>

          {/* Right Sidebar */}
          <div className="w-full lg:w-1/3">
            <div className="bg-gray-50 p-6 rounded-md border border-gray-200">
              <h3 className="text-xl text-gray-500 mb-6">Our services</h3>

              {/* Services Navigation */}
              <div className="flex flex-col">
                {/* Current active service */}
                <a
                  href="#"
                  className="py-4 px-4 "
                >
                  Business Loan
                </a>

                {/* Other services */}
                <a
                  href="#"
                  className="py-4 px-4 text-gray-600 hover:bg-gray-100 border-l-4 border-orange-500 font-medium"
                >
                  Professional Loan
                </a>
                <a
                  href="#"
                  className="py-4 px-4 text-gray-600 hover:bg-gray-100"
                >
                  Personal Loan
                </a>
                <a
                  href="#"
                  className="py-4 px-4 text-gray-600 hover:bg-gray-100"
                >
                  Home Loan
                </a>
                <a
                  href="#"
                  className="py-4 px-4 text-gray-600 hover:bg-gray-100"
                >
                  Education Loan
                </a>
                <a
                  href="#"
                  className="py-4 px-4 text-gray-600 hover:bg-gray-100"
                >
                  Car Loan
                </a>
                <a
                  href="#"
                  className="py-4 px-4 text-gray-600 hover:bg-gray-100"
                >
                  Digital Services
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* WhatsApp Chat Button (Fixed) */}
      </div>

      <div className="w-full py-10">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-3/4 pr-0 md:pr-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">WHY CHOOSE US</h1>
          
          <div className="space-y-10">
            {/* Wide Range of Options */}
            <div className="flex items-start">
              <div className="bg-amber-400 rounded-full p-4 mr-4 flex-shrink-0">
                <List className="w-6 h-6 text-black" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold mb-2">Specialized Loan Products</h2>
                <p className="text-gray-600">
                Tailored loan solutions specifically designed for doctors and chartered accountants.
                </p>
              </div>
            </div>
            
            {/* Competitive Rates */}
            <div className="flex items-start">
              <div className="bg-amber-400 rounded-full p-4 mr-4 flex-shrink-0">
                <Percent className="w-6 h-6 text-black" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold mb-2">Competitive Interest Rates</h2>
                <p className="text-gray-600">
                Benefit from our strategic partnerships with 70+ banks and NBFCs to secure the most favorable interest rates.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-amber-400 rounded-full p-4 mr-4 flex-shrink-0">
                <Truck className="w-6 h-6 text-black" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold mb-2">Flexible Repayment Terms</h2>
                <p className="text-gray-600">
                Choose repayment plans that align with your professional income and financial planning.
                </p>
              </div>
            </div>
            
            {/* Expert Consultation */}
            <div className="flex items-start">
              <div className="bg-amber-400 rounded-full p-4 mr-4 flex-shrink-0">
                <Phone className="w-6 h-6 text-black" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold mb-2">Quick and Easy Process</h2>
                <p className="text-gray-600">
                Experience a streamlined application and approval process with minimal documentation.
                </p>
              </div>
            </div>
            
            {/* Fast Approval Process */}
            
            {/* Flexible Repayment Terms */}
            <div className="flex items-start">
              <div className="bg-amber-400 rounded-full p-4 mr-4 flex-shrink-0">
                <Layers className="w-6 h-6 text-black" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold mb-2">Flexible Repayment Terms</h2>
                <p className="text-gray-600">
                  Now you can adjust your loan payment that will be fit with your business's income and financial condition.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-amber-400 rounded-full p-4 mr-4 flex-shrink-0">
                <Layers className="w-6 h-6 text-black" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold mb-2">Dedicated Support</h2>
                <p className="text-gray-600">
                Receive continuous support and expert guidance throughout the loan tenure.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-1/4 mt-8 md:mt-0">
          <div className="relative">
            <div className="bg-gray-600 rounded-lg overflow-hidden">
              <div className="p-6 text-center">
                <h2 className="text-3xl font-bold text-amber-400 mb-2">Achieve your Financial Goals!</h2>
                <p className="text-white text-xl mb-6">Get Your Loan Approval Now...</p>
                <button className="bg-amber-400 hover:bg-amber-500 text-black font-bold py-3 px-6 rounded-full">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="w-full py-10">
      {/* How We Work Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-8">HOW WE WORK</h2>
        
        <div className="space-y-6">
          {/* Step 1 */}
          <div className="flex">
            <div className="mr-4 flex-shrink-0">
              <div className="w-10 h-10 border border-gray-300 flex items-center justify-center">
                <span className="text-gray-500">1</span>
              </div>
            </div>
            <div>
              <h3 className="font-bold">
              Application Submission</h3>
              <p className="text-gray-600 mb-2">Start by filling out a simple application form (Loan Enquiry Form) with your basic details and financial requirements.</p>
              <button className="bg-amber-400 hover:bg-amber-500 text-sm px-4 py-1 rounded">Loan Enquiry Form</button>
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="flex">
            <div className="mr-4 flex-shrink-0">
              <div className="w-10 h-10 border border-gray-300 flex items-center justify-center">
                <span className="text-gray-500">2</span>
              </div>
            </div>
            <div>
              <h3 className="font-bold">Document Verification</h3>
              <p className="text-gray-600">Our team will verify your business loan documents and if all seems good they will contact you quickly.</p>
            </div>
          </div>
          
          {/* Step 3 */}
          <div className="flex">
            <div className="mr-4 flex-shrink-0">
              <div className="w-10 h-10 border border-gray-300 flex items-center justify-center">
                <span className="text-gray-500">3</span>
              </div>
            </div>
            <div>
              <h3 className="font-bold">Eligibility Check</h3>
              <p className="text-gray-600">Now here we will be assessing your business loan eligibility based on the eligibility criteria by our partner banks and NBFCs.</p>
            </div>
          </div>
          
          {/* Step 4 */}
          <div className="flex">
            <div className="mr-4 flex-shrink-0">
              <div className="w-10 h-10 border border-gray-300 flex items-center justify-center">
                <span className="text-gray-500">4</span>
              </div>
            </div>
            <div>
              <h3 className="font-bold">Loan Approval</h3>
              <p className="text-gray-600">Once your eligibility is confirmed, the approval process begins quickly, ensuring you get your funds at your bank account without any delay.</p>
            </div>
          </div>
          
          {/* Step 5 */}
          <div className="flex">
            <div className="mr-4 flex-shrink-0">
              <div className="w-10 h-10 border border-gray-300 flex items-center justify-center">
                <span className="text-gray-500">5</span>
              </div>
            </div>
            <div>
              <h3 className="font-bold">Disbursement</h3>
              <p className="text-gray-600">Once your loan got approved that will be quickly disbursed in your bank account and allowing you to use it for your business's needs.</p>
            </div>
          </div>
          
          {/* Step 6 */}
          <div className="flex">
            <div className="mr-4 flex-shrink-0">
              <div className="w-10 h-10 border border-gray-300 flex items-center justify-center">
                <span className="text-gray-500">6</span>
              </div>
            </div>
            <div>
              <h3 className="font-bold">On-going Support</h3>
              <p className="text-gray-600">Even after loan approval you will have our customer support for any query. Enjoy continuous support and advice even after your loan is disbursed.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Documents Required Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Documents Required- Doctors & CA</h2>
        
        <div className="space-y-4">
          {/* Document 1 */}
          <div>
            <p className="font-bold">1. KYC</p>
            <p className="text-gray-600">Pan Card (Compulsory) / Aadhar card / Driving License etc.</p>
          </div>
          
          {/* Document 2 */}
          <div>
            <p className="font-bold">2. Bank Statement</p>
            <p className="text-gray-600">Latest bank statement for the last six months.</p>
          </div>
          
          {/* Document 3 */}
          <div>
            <p className="font-bold">3. Degree Registration Certificate</p>
            <p className="text-gray-600">Proof of your professional degree and registration.</p>
          </div>
          
          {/* Document 4 */}
          <div>
            <p className="font-bold">4. Last Two Years of ITR</p>
            <p className="text-gray-600">Income Tax Returns for the last two years.</p>
          </div>
          
          {/* Document 5 */}
          <div>
            <p className="font-bold">5. Resident Proof</p>
            <p className="text-gray-600">Proof of your current residence.</p>
          </div>
          
          {/* Document 6 */}
          <div>
            <p className="font-bold">6. Letterhead </p>
            <p className="text-gray-600">Your professional letterhead for verification.</p>
          </div>
        </div>
      </div>
      
      {/* Why Choose Us Section */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Apply for a Professional Loan Today</h2>
        
        <div className="space-y-4 text-gray-700">
          <p>
          Don’t let financial constraints hold you back. Whether you are a doctor or a chartered accountant, our professional loans can help you achieve your dreams.
          </p>
          
          <p>
          Fiil this simple Loan Enquiry Form today to apply for a professional loan and take the next step towards your financial goals.
          </p>
          
        </div>
      </div>
    </div>
</div>

    </div>

    <Footer />
    </div>
  );
}