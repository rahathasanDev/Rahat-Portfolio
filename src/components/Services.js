import React from "react";

const Services = () => {
  return (
    <section className="text-gray-500 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col w-full mb-20">
          <h1 className=" text-4xl font-medium  title-font flex  mb-4 text-white">
            Our Services
          </h1>
          <p className="lg:w-full mx-auto leading-relaxed text-2xl">
            Explore our range of services designed to meet your needs and
            exceed your expectations.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 lg:w-1/3">
            <div className="h-full bg-transparent outline outline-1  bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
              <h2 className="tracking-widest text-xl title-font font-medium text-white mb-1">
                CATEGORY
              </h2>
              <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                Service 1
              </h1>
              <p className="leading-relaxed mb-3">
                Description of Service 1 goes here. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit.
              </p>
              <a className="text-indigo-500 inline-flex items-center">
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="p-4 lg:w-1/3">
            <div className="h-full bg-transparent outline outline-1 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
              <h2 className="tracking-widest text-xl title-font font-medium text-white mb-1">
                CATEGORY
              </h2>
              <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                Service 2
              </h1>
              <p className="leading-relaxed mb-3">
                Description of Service 2 goes here. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit.
              </p>
              <a className="text-indigo-500 inline-flex items-center">
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="p-4 lg:w-1/3">
            <div className="h-full bg-transparent outline outline-1 bg-opacity-50 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
              <h2 className="tracking-widest text-xl title-font font-medium text-white mb-1">
                CATEGORY
              </h2>
              <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                Service 3
              </h1>
              <p className="leading-relaxed mb-3">
                Description of Service 3 goes here. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit.
              </p>
              <a className="text-indigo-500 inline-flex items-center">
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
