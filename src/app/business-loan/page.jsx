import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { List, Percent, Phone, Truck, BarChart3, Layers } from "lucide-react";
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
              BUSINESS
              <br />
              LOAN
            </h1>
            <p className="text-white text-sm md:text-base lg:text-lg max-w-xl">
              Empower your business with flexible, low-interest business loans
              from Finance Gaze Consultancy Private Limited. With access to over 70
              leading banks and NBFCs, we offer tailored financial solutions to
              fuel your growth and success.
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
          <span className="text-gray-600">Business Loan</span>
        </div>

        {/* Main Content Layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Content Section */}
          <div className="w-full lg:w-2/3">
            {/* Main Heading */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Grow Your Business with Secured & Unsecured Business Loans!
            </h1>

            {/* Introduction Paragraph */}
            <p className="text-gray-600 mb-6">
              Welcome to Finance Gaze Consultancy Private Limited. We help businesses
              by offering flexible, low-interest loans that can be secured with
              collateral or unsecured business loan without needing security.
            </p>

            {/* Second Paragraph */}
            <p className="text-gray-600 mb-6">
              Our goal is to provide customized financial solutions that support
              your business's growth and success. Partner with us to access
              loans from 70+ top banks & NBFCs. Benefit from competitive rates,
              expert advice, and a smooth approval process that gets you funds
              quickly.
            </p>

            {/* Call-to-Action */}
            <p className="text-gray-600 mb-12">
              Start shaping your business's future with Finance Gaze today.
            </p>

            {/* What We Offer Section */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              WHAT WE OFFER
            </h2>
          </div>

          {/* Right Sidebar */}
          <div className="w-full lg:w-1/3">
            <div className="bg-gray-50 p-6 rounded-md border border-gray-200">
              <h3 className="text-xl text-gray-500 mb-6">Our services</h3>

              {/* Services Navigation */}
              <div className="flex flex-col">
                {/* Current active service */}
                <a
                  href="/services/business-loan"
                  className="py-4 px-4 border-l-4 border-orange-500 font-medium"
                >
                  Business Loan
                </a>

                {/* Other services */}
                <a
                  href="/services/professional-loan"
                  className="py-4 px-4 text-gray-600 hover:bg-gray-100"
                >
                  Professional Loan
                </a>
                <a
                  href="/services/personal-loan"
                  className="py-4 px-4 text-gray-600 hover:bg-gray-100"
                >
                  Personal Loan
                </a>
                <a
                  href="/services/home-loan"
                  className="py-4 px-4 text-gray-600 hover:bg-gray-100"
                >
                  Home Loan
                </a>
                <a
                  href="/services/education-loan"
                  className="py-4 px-4 text-gray-600 hover:bg-gray-100"
                >
                  Education Loan
                </a>
                <a
                  href="/services/car-loan"
                  className="py-4 px-4 text-gray-600 hover:bg-gray-100"
                >
                  Car Loan
                </a>
                <a
                  href="/services/digital-services"
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
          <h1 className="text-3xl md:text-4xl font-bold mb-8">WHAT WE OFFER</h1>
          
          <div className="space-y-10">
            {/* Wide Range of Options */}
            <div className="flex items-start">
              <div className="bg-amber-400 rounded-full p-4 mr-4 flex-shrink-0">
                <List className="w-6 h-6 text-black" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold mb-2">Wide Range of Options</h2>
                <p className="text-gray-600">
                  You can choose from over 70+ banks and NBFCs to get the best loan for your business. Whether you're 
                  looking for unsecured business loans or a secured business loan, we have options that match your 
                  requirement.
                </p>
              </div>
            </div>
            
            {/* Competitive Rates */}
            <div className="flex items-start">
              <div className="bg-amber-400 rounded-full p-4 mr-4 flex-shrink-0">
                <Percent className="w-6 h-6 text-black" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold mb-2">Competitive Rates</h2>
                <p className="text-gray-600">
                  You can get the benefit from our strategic partnerships with financial institutions to secure the business 
                  loan at best interest rates.
                </p>
              </div>
            </div>
            
            {/* Expert Consultation */}
            <div className="flex items-start">
              <div className="bg-amber-400 rounded-full p-4 mr-4 flex-shrink-0">
                <Phone className="w-6 h-6 text-black" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold mb-2">Expert Consultation</h2>
                <p className="text-gray-600">
                  You can receive professional advice & guidance to get the business loan process done effortlessly. Our 
                  loan consultants help you understand each & every step, from application to disbursement.
                </p>
              </div>
            </div>
            
            {/* Fast Approval Process */}
            <div className="flex items-start">
              <div className="bg-amber-400 rounded-full p-4 mr-4 flex-shrink-0">
                <Truck className="w-6 h-6 text-black" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold mb-2">Fast Approval Process</h2>
                <p className="text-gray-600">
                  Enjoy a quick and efficient loan approval process, ensuring timely access to funds and the complete 
                  process will be absolute hassle-free.
                </p>
              </div>
            </div>
            
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
        <h2 className="text-2xl font-bold mb-4">Why choose us to get a secured & unsecured business loan</h2>
        
        <div className="space-y-4 text-gray-700">
          <p>
            At Insaaf, we understand that every business is unique and has a distinct requirements. That's why we provide both 
            unsecured business loans and secured loans depending on your specific financial needs and NBFCs to suit the different needs.
          </p>
          
          <p>
            Whether you have collateral to offer or need a loan without security that is unsecured one, we have solutions that perfectly 
            match to your situation.
          </p>
          
          <p>
            Our commitment to competitive business loan interest rates and flexible terms makes us the ideal partner for your financial 
            growth. We help you achieve your dream by getting you funds approved faster and hassle-free.
          </p>
        </div>
      </div>
    </div>
</div>

    <Footer />
    </div>
  );
}