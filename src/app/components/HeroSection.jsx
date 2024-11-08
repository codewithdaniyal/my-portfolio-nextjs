"use client"; // This makes the component a client-side component

import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion'

// Dynamically import only the `TypeAnimation` component with named import
const TypeAnimation = dynamic(() => import('react-type-animation').then(mod => mod.TypeAnimation), { ssr: false });

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
        {/* Left Side Text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-12 sm:col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl font-extrabold">
    
          Hello, I'm
            <br />
            <TypeAnimation
              sequence={[
                'Daniyal',
                1000,
                'Web Developer',
                1000,
                'UI/UX Designer',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          Hi, I'm Daniyal, a passionate web and app developer. I create sleek, user-friendly websites and powerful applications that help businesses grow. Let’s bring your ideas to life!
          </p>
          <div>
          <button
    onClick={() => document.getElementById('emailSection').scrollIntoView({ behavior: 'smooth' })}
    className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white hover:text-black"
>
    Hire Me
</button>

            <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-3 sm:mt-0">
              Download CV
            </button>
          </div>
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-12 sm:col-span-4 flex justify-center items-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative flex justify-center items-center overflow-hidden">
            <Image
              src="/images/1712191779774.jpeg"
              alt="hero image"
              width={300}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
