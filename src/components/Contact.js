import React from 'react';
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Contact = () => {
  return (
    <div className='section' id='contact'>
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
        >
          <h2 className="text-3xl font-semibold mb-4">Contact Us :</h2>
          <div className="grid grid-cols-1  gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-400">rahathasan2987@gmail.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Phone Number</h3>
              <p className="text-gray-400">01744209241</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-gray-400">Nardingdi, Dhaka, Bangladesh</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Social Media</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15v3m0 0c-1.5 0-3-1.23-3-3.5s1.5-3.5 3-3.5s3 1.23 3 3.5S16.5 15 15 15zM9 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 15v3m0 0c-1.5 0-3-1.23-3-3.5s1.5-3.5 3-3.5s3 1.23 3 3.5S10.5 15 9 15zM5 18v3m14-3v3"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4a4 4 0 100 8 4 4 0 000-8z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.6 15c1.5 0 2.9-.6 3.9-1.6l4.5 2.7c.2.1.4.1.6 0a7 7 0 11-9-6.6v.1l-4.5-2.8A7 7 0 118.6 15z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
