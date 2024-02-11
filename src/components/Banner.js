import React from "react";
import Image from "../assets/avatar.svg";
import { FaGithub, FaYoutube, FaDribbble } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section className="section" id="home">
      <div className="container mx-auto">
        <div>
          <div>
            <h1>BEN <span>AIDEN</span></h1>
            <div className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"><span className="mr-4 text-white">I am a</span>
            <TypeAnimation sequence={[
              'Developer',
              2000,
              'Designer',
              2000,
              'Youtuber',
              2000,
             ]}
             speed={50}
             className="text-accent"
             wrapper="span"
             repeat={Infinity}
             ></TypeAnimation>
            </div>
            <p className="mb-8 max-w-lg mx-auto lg:mx-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, ducimus. Porro placeat tempora repellendus, sunt enim doloribus dolore repellat incidunt.</p>
            <div className="flex  items-center mb-12  gap-x-6 max-w-max mx-auto lg:mx-0">
              <button className="btn btn-lg">Contact me</button>
              <a href="#" className="text-gradient btn-link">My portfolio</a>
            </div>
            <div className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
              <a href="#">
                <FaYoutube></FaYoutube>
              </a>
              <a href="#">
                <FaGithub></FaGithub>
              </a>
              <a href="#">
                <FaDribbble></FaDribbble>
              </a>
            </div>
          </div>
          <div>
           <img src={Image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
