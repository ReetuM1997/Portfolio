"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";
import { experienceData } from "./data";
export interface ExperienceItem {
  year: string;
  title: string;
  location: string;
  years: string;
  desc: string[];
}
const Experience = () => {
  const containerVariant = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariant = {
    hidden: (index: number) => ({
      opacity: 0,
      x: index % 2 === 0 ? -80 : 80,
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const statVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="about"
      className="py-4 px-6 min-h-screen bg-gradient-to-r from-[#2d0b52] via-[#05082b] to-[#001d46] text-white"
    >
      <div className="w-full h-[1px] bg-white/10 mb-4"></div>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-6xl font-bold text-center mb-4 text-purple-500"
      >
         
        Career Journey
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="text-3xl md:text-3xl font-bold  sm:text-base max-w-3xl mx-auto text-center px-4 font-bold mb-8 md:mb-10"
      >
       Experience Timeline
      </motion.p>

      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative max-w-6xl mx-auto"
      >
        {/* Timeline Line */}
        <div
          className="
                absolute
                left-5 md:left-1/2
                top-0
                h-full
                w-[2px]
                bg-white/20
                md:-translate-x-1/2
            "
        />

        {experienceData.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariant}
            custom={index}
            className={`
              relative mb-7 flex flex-col md:flex-row
              ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}
            `}
          >
            {/* Background Year */}
            <h1
              className={`
                hidden md:block absolute
                top-1/2 -translate-y-1/2
                text-[90px]
                font-bold
                text-white/5
                pointer-events-none
                ${index % 2 === 0 ? "left-[56%]" : "right-[56%]"}
              `}
            >
              {item.year}
            </h1>

            <div className="w-full md:w-1/2 pl-12 md:px-6">
              {" "}
              {/* Timeline Dot */}
              <span
                className="
                    absolute
                    left-5
                    md:left-1/2
                    top-8
                    w-4
                    h-4
                    bg-purple-500
                    rounded-full
                    -translate-x-1/2
                    shadow-lg
                    shadow-purple-500/50
                "
              />
              <div
                className="
                    bg-[#071633]/80
                    backdrop-blur-lg
                    border border-white/10
                    rounded-3xl
                    p-5 sm:p-6 lg:p-8
                    shadow-xl
                    hover:-translate-y-2
                    transition-all
                    duration-300
                "
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-purple-500/20 p-3 rounded-full">
                    <FaBriefcase className="text-purple-400 text-xl" />
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="text-purple-400 text-xs sm:text-sm">
                      {item.location}
                    </p>
                    <h3 className="text-sm sm:text-md font-bold text-white">
                      {item.years}
                    </h3>
                  </div>
                </div>

                <ul className="mt-4 space-y-3">
                  {item.desc.map((point, idx) => (
                    <li
                      key={idx}
                      className="text-sm sm:text-base text-gray-300 flex items-start gap-3 leading-7"
                    >
                      <span className="text-purple-400 mt-1">▹</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <p className="md:hidden text-right text-2xl font-bold text-white/20 mt-4">
                  {item.year}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Stats */}
      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto mt-8 px-4 md:px-6"
      >
        {[
          { value: "2.7+", label: "Years Experience" },
          { value: "6+", label: "Projects Delivered" },
          { value: "3+", label: "Production Products" },
        ].map((item, i) => (
          <motion.div
            key={i}
            variants={statVariant}
            className="
                bg-[#071633]/80
                border border-white/10
                rounded-2xl
                p-5 sm:p-6
                text-center
                hover:scale-105
                transition
            "
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-purple-400">
              {item.value}
            </h2>

            <p className="text-gray-400 mt-2">{item.label}</p>
          </motion.div>
        ))}
      </motion.div>

      <div className="w-full h-[1px] bg-white/10 mt-16"></div>
    </section>
  );
};

export default Experience;
