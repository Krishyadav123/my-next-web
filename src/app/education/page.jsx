import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { List, Percent, Rocket, FileText, Handshake, Network } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function BusinessLoanPage() {
  return (
    <div className="w-full overflow-hidden">
        <Navbar />
      <div className="relative px-5 py-10 lg:px-32  bg-blue-900">
        {/* Main container with responsive padding */}
        <div className="relative flex flex-col md:flex-row w-full">
          {/* Left content section */}
          <div className="w-full md:w-1/2 p-6 md:p-8 lg:p-12 flex flex-col justify-center z-10">
            <div className="text-orange-400 font-medium text-lg md:text-xl pb-2">
              Services
            </div>
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight pb-4">
            EDUCATION
              <br />
              LOAN
            </h1>
            <p className="text-white text-sm md:text-base lg:text-lg max-w-xl">
            Invest in Your Future with Finance Gaze Education Loans! At Finance Gaze Consultancy, we provide tailored education loan solutions to help you achieve your academic goals. With Finance Gaze, you can get the best rates and terms to finance your education.
            </p>
          </div>

          {/* Right image section */}
          <div className="w-full md:w-1/2 h-full">
            <div className="h-full min-h-[300px]  w-full relative">
              <img
                src="https://www.hexafin.com/wp-content/uploads/2024/05/girl-is-wearing-degree-convocation-black-appron-and-smiling-holding-her-degree-in-her-hand.jpg"
                alt="Business professional signing documents"
                className="rounded-full h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Chat with Us button - fixed at bottom right */}
        {/*   */}
      </div>

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
          <span className="text-gray-600">Education Loan</span>
        </div>

        {/* Main Content Layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Content Section */}
          <div className="w-full lg:w-2/3">
            {/* Main Heading */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Say Yes to Your Dream University with our Education Loan!
            </h1>

            {/* Introduction Paragraph */}
            <p className="text-gray-600 mb-6">
            Are you dreaming of studying in a the best university but worried about the expenses?
            </p>

            {/* Second Paragraph */}
            <p className="text-gray-600 mb-6">
            Don’t let your financial condition hold you back.
            </p>

            {/* Call-to-Action */}
            <p className="text-gray-600 mb-12">
            With an education loan, you can turn your dreams into reality and focus on what matters most – your studies and your future.
            </p>

            <p className="text-gray-600 mb-12">
            Imagine walking through the corridors of a prestigious university, attending lectures by renowned professors, and participating in enriching extracurricular activities without constantly stressing about how to pay for it all.
            </p>

            <p className="text-gray-600 mb-12">
            An education loan usually covers major expenses including tuition fees, accommodation, study materials, and even daily living expenses.

This financial aid allows you to fully immerse yourself in your educational journey, and gain a good knowledge and skills that will benefit you for a lifetime.

When it comes to finding the best education loan deal, Finance Gaze is here to help. 


            </p>

            {/* What We Offer Section */}
            {/* <h2 className="text-3xl font-bold text-gray-900 mb-6">
              WHAT WE OFFER
            </h2> */}
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
                  className="py-4 px-4 text-gray-600 hover:bg-gray-100"
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
                  className="py-4 px-4 text-gray-600 hover:bg-gray-100 border-l-4  border-orange-500 font-medium"
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
      <div className="w-full md:w-3/4 pr-0 md:pr-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">WHY CHOOSE US</h1>

        <div className="space-y-10">
          {/* Wide Range of Loan Options */}
          <div className="flex items-start">
            <div className="bg-amber-400 rounded-full p-4 mr-4 flex-shrink-0">
              <Network className="w-6 h-6 text-black" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-2">Wide Range of Loan Options</h2>
              <p className="text-gray-600">
                Choose from a variety of education loan products to find the perfect fit for your academic needs.
              </p>
            </div>
          </div>

          {/* Affordable Interest Rates */}
          <div className="flex items-start">
            <div className="bg-amber-400 rounded-full p-4 mr-4 flex-shrink-0">
              <Percent className="w-6 h-6 text-black" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-2">Affordable Interest Rates</h2>
              <p className="text-gray-600">
                You will be getting benefits from the best education loan interest rates through our partnerships with 70+ leading banks and NBFCs.
              </p>
            </div>
          </div>

          {/* Quick Loan Approvals */}
          <div className="flex items-start">
            <div className="bg-amber-400 rounded-full p-4 mr-4 flex-shrink-0">
              <Rocket className="w-6 h-6 text-black" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-2">Quick Loan Approvals</h2>
              <p className="text-gray-600">
                Enjoy a fast and efficient loan approval process to secure funds for your education promptly.
              </p>
            </div>
          </div>

          {/* Minimal Documentation */}
          <div className="flex items-start">
            <div className="bg-amber-400 rounded-full p-4 mr-4 flex-shrink-0">
              <FileText className="w-6 h-6 text-black" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-2">Minimal Documentation</h2>
              <p className="text-gray-600">
                Experience a hassle-free application process with minimal documentation requirements.
              </p>
            </div>
          </div>

          {/* Transparent Process */}
          <div className="flex items-start">
            <div className="bg-amber-400 rounded-full p-4 mr-4 flex-shrink-0">
              <Handshake className="w-6 h-6 text-black" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-2">Transparent Process</h2>
              <p className="text-gray-600">
                Benefit from clear and transparent loan terms with no hidden fees, ensuring peace of mind.
              </p>
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
              <h3 className="font-bold">Loan Application</h3>
              <p className="text-gray-600 mb-2">You can start by filling the simple loan inquiry form and our loan consultant will get back to you in 10-15 minutes.</p>
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
              <h3 className="font-bold">Post-Loan Support</h3>
              <p className="text-gray-600">Enjoy our continuous support & help even after your loan is disbursed. We are always here to help you manage your funds effectively & any query you may have.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Documents Required Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">DOCUMENTS REQUIRED FOR BUSINESS LOAN</h2>
        
        <div className="space-y-4">
          {/* Document 1 */}
          <div>
            <p className="font-bold">1. KYC</p>
            <p className="text-gray-600">Pan Card (Compulsory) / Aadhar card / Driving License etc.</p>
          </div>
          
          {/* Document 2 */}
          <div>
            <p className="font-bold">2. Ownership Proof</p>
            <p className="text-gray-600">Documents proving ownership of your business.</p>
          </div>
          
          {/* Document 3 */}
          <div>
            <p className="font-bold">3. Current Residence Proof</p>
            <p className="text-gray-600">Address proof for your residence.</p>
          </div>
          
          {/* Document 4 */}
          <div>
            <p className="font-bold">4. Business Proof</p>
            <p className="text-gray-600">Documents proving your business existence and operations.</p>
          </div>
          
          {/* Document 5 */}
          <div>
            <p className="font-bold">5. Income Proof</p>
            <p className="text-gray-600">Financial records showing your business's income.</p>
          </div>
          
          {/* Document 6 */}
          <div>
            <p className="font-bold">6. Bank Statement</p>
            <p className="text-gray-600">Recent bank statements to verify your business cash flow.</p>
          </div>
        </div>
      </div>
      
      {/* Why Choose Us Section */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Start Your Journey Today!</h2>
        
        <div className="space-y-4 text-gray-700">
          <p>
          Don’t let finances stop you from achieving your academic goals. With an education loan, you can pave the way to a brighter future..
          </p>
          
          <p>
          Start researching your options today, and take the first step towards your dream career! just contact us +91 8530113456.
          </p>
        </div>
      </div>
    </div>
</div>

    <Footer />
    </div>
  );
}