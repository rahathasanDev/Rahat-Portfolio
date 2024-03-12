import React from 'react';
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { FaGithub, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className='section' id='contact'>
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="flex flex-col lg:flex-row"
        >
          <div className="w-full lg:w-1/2 lg:pr-8">
            <h2 className="text-3xl font-semibold mb-4">Contact Us :</h2>
            <div className="grid grid-cols-1 gap-6">
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
                    <FaGithub size={24} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-500">
                    <FaFacebook size={24} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-500">
                    <FaInstagram size={24} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-500">
                    <FaLinkedin size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:pl-8">
            <h3 className="text-3xl font-semibold mb-2">Send a Message</h3>
            <form className="flex flex-col">
              <input type="text" id="name" name="name" placeholder="Name" className="mb-4 px-4 py-2 rounded-lg border border-gray-300 bg-gray-100 focus:outline-none focus:border-blue-500" />
              <input type="email" id="email" name="email" placeholder="Email" className="mb-4 px-4 py-2 rounded-lg border border-gray-300 bg-gray-100 focus:outline-none focus:border-blue-500" />
              <textarea id="message" name="message" rows="4" placeholder="Message" className="mb-4 px-4 py-2 rounded-lg border border-gray-300 bg-gray-100 focus:outline-none focus:border-blue-500 text-black"></textarea>
              <button type="submit" className="text-white bg-blue-500 px-6 py-2 rounded-md hover:bg-blue-600">Send</button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
