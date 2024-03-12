import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
const Services = () => {
  return (
    <section id="services" className="text-gray-500 body-font ">
      <motion.div
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.1 }}
             
            >
              <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col w-full mb-20">
          <h1 className="text-4xl font-medium title-font flex mb-4 text-white">
           OUR SERVICES :
          </h1>
          <p className="lg:w-full mx-auto leading-relaxed text-2xl">
            Showcase your skills and expertise as a full-stack web developer
            with these featured services.
          </p>
        </div>
        {/* Added border outline to the category div */}
        <div className="flex flex-wrap -m-4 bg-transparent outline outline-1 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative mb-10">
          <div className="p-4 lg:w-1/3">
            <div>
              <h2 className="tracking-widest text-xl title-font font-medium text-white mb-1">
                Frontend Development
              </h2>
              <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-500 mb-3">
                Responsive Web Design
              </h1>
              <p className="leading-relaxed mb-3">
                Create visually appealing and user-friendly websites optimized
                for all devices.
              </p>
              <a
                href="/frontend"
                className="text-indigo-500 inline-flex items-center"
              >
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
            <div>
              <h2 className="tracking-widest text-xl title-font font-medium text-white mb-1">
                Backend Development
              </h2>
              <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-500 mb-3">
                API Development
              </h1>
              <p className="leading-relaxed mb-3">
                Build robust APIs to handle data communication between the
                frontend and backend.
              </p>
              <a
                href="/backend"
                className="text-indigo-500 inline-flex items-center"
              >
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
            <div>
              <h2 className="tracking-widest text-xl title-font font-medium text-white mb-1">
                Portfolio
              </h2>
              <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-500 mb-3">
                Showcase Your Work
              </h1>
              <p className="leading-relaxed mb-3">
                Display your projects, skills, and achievements in an
                impressive portfolio.
              </p>
              <a
                href="/portfolio"
                className="text-indigo-500 inline-flex items-center"
              >
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
            
            </motion.div>
      
    </section>
  );
};

export default Services;
