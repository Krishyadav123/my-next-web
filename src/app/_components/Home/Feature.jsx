import React from 'react'

const Feature = () => {
  return (
    <section className="w-full px-5 md:px-32 py-12 bg-gray-100">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="bg-amber-500 rounded-full p-4 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 text-black"
                >
                  <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                  <line x1="7" y1="7" x2="7.01" y2="7"></line>
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">19 Years of Experience</h3>
              <p className="text-sm text-gray-600">
                Finance Gaze, a leading loan consulting and Distribution Company has been helping people get bank loans at
                low rates.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-amber-500 rounded-full p-4 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 text-black"
                >
                  <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
                  <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"></path>
                  <path d="M12 3v6"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Doorstep Services</h3>
              <p className="text-sm text-gray-600">
                We offer free consultation call with our loan specialist & we provide doorstep services. Our consultants
                visit at your office whenever you need.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-amber-500 rounded-full p-4 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 text-black"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Lowest Documents</h3>
              <p className="text-sm text-gray-600">
                Are you worried about tedious documentations for loan process? Don't worry, we offer loan at low
                documents at the best rate.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-amber-500 rounded-full p-4 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 text-black"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                  <line x1="12" y1="6" x2="12" y2="18"></line>
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Minimum Processing Fees</h3>
              <p className="text-sm text-gray-600">
                We do all process of loan application with minimum processing fees with smooth client experience.
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Feature