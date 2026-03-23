import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="px-5 lg:px-28 flex justify-between flex-col lg:flex-row" id="about">
      <motion.div
        className="lg:w-1/2 h-[370px] lg:h-[510px] overflow-hidden rounded-2xl"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
        viewport={{ once: true }}
      >
        <img className="h-full w-full object-cover object-[center_20%]" src="/assets/page1.png" alt="Developer illustration" />
      </motion.div>

      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="lg:text-4xl text-2xl mt-4 lg:mt-0">
          About <span className="font-extrabold">Me</span>
        </h2>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-5 lg:mt-10">
          A full stack developer based in Bangalore, India. I enjoy building
          scalable applications with clean architecture and reliable backend
          services.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          I have 2.5+ years of professional experience at Accenture, where I
          have worked across the full stack using React, Angular, Node.js,
          Express.js, and MongoDB while collaborating in Agile teams.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          I completed my B.Tech in Computer Science and Engineering from
          Vellore Institute of Technology (2018 - 2022) with a CGPA of 8.6/10,
          and I am currently open to new opportunities.
        </p>
        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          Certifications include IIT-M Pravartak Full Stack Development, React.js,
          Node.js, Advanced JavaScript, JS Basics, HTML/CSS/Tailwind CSS, and Database.
        </p>
      </motion.div>
    </div>
  );
}
