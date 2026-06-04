import React from "react";
import { motion } from "framer-motion";
import { del } from "framer-motion/client";
import Experience from "./Experience";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const card = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: 0.25,
      ease: "easeOut",
    },
  },
};

const About = () => {
  return (
    <section
      id="about"
      className="py-16 px-6 min-h-screen bg-gradient-to-r from-[#2d0b52] via-[#05082b] to-[#001d46]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center max-w-5xl mx-auto"
        >
          <motion.p
            variants={fadeUp}
            className="text-purple-500 font-semibold text-3xl sm:text-4xl md:text-6xl mb-2"
          >
            About Me
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-3xl font-bold text-white leading-tight"
          >
            Building reliable products with modern web technologies
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-3 text-gray-300 text-lg leading-8"
          >
            I am a Software Engineer with 2.7+ years of experience in
            React.js, TypeScript, JavaScript, Python, ERPNext, and
            full-stack application development. I currently work at GTPL,
            contributing to FinTech and GRC platforms by building scalable,
            secure, and user-focused solutions. Passionate about clean code,
            modern web technologies, and continuous learning, I enjoy
            transforming complex business requirements into reliable software
            products.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 bg-[#071633]/70 border border-white/10 rounded-3xl p-8 backdrop-blur-lg"
        >
          {/* Card 1 */}
          <motion.div
            variants={card}
            whileHover={{ y: -10, scale: 1.02 }}
            className=""
          >
            <motion.h3
              variants={fadeUp}
              className="text-sm tracking-[3px] uppercase text-gray-400 mb-4"
            >
              Background
            </motion.h3>

            <motion.p
              variants={fadeUp}
              className="text-gray-300 leading-7"
            >
              Software Engineer with a strong foundation in modern web
              technologies and a passion for building scalable applications
              that solve real-world business challenges.
            </motion.p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={card}
            whileHover={{ y: -10, scale: 1.02 }}
         
          >
            <motion.h3
              variants={fadeUp}
              className="text-sm tracking-[3px] uppercase text-gray-400 mb-4"
            >
              Experience Summary
            </motion.h3>

            <motion.p
              variants={fadeUp}
              className="text-gray-300 leading-7"
            >
              2.7+ years of experience delivering production-ready
              applications across FinTech, ERPNext, Governance, Risk &
              Compliance (GRC), and enterprise software development.
            </motion.p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={card}
            whileHover={{ y: -10, scale: 1.02 }}
         
          >
            <motion.h3
              variants={fadeUp}
              className="text-sm tracking-[3px] uppercase text-gray-400 mb-4"
            >
              Current Focus
            </motion.h3>

            <motion.p
              variants={fadeUp}
              className="text-gray-300 leading-7"
            >
              Building scalable React, TypeScript, Python, Docker, Kafka,
              and cloud-native applications with a focus on performance,
              maintainability, and security.
            </motion.p>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            variants={card}
            whileHover={{ y: -10, scale: 1.02 }}
         
          >
            <motion.h3
              variants={fadeUp}
              className="text-sm tracking-[3px] uppercase text-gray-400 mb-4"
            >
              Career Journey
            </motion.h3>

            <motion.p
              variants={fadeUp}
              className="text-gray-300 leading-7"
            >
              Started with internship projects and ERPNext customization,
              progressing to building enterprise-grade FinTech and GRC
              platforms used by organizations in production environments.
            </motion.p>
          </motion.div>

          {/* Card 5 */}
          <motion.div
            variants={card}
            whileHover={{ y: -10, scale: 1.02 }}
         
          >
            <motion.h3
              variants={fadeUp}
              className="text-sm tracking-[3px] uppercase text-gray-400 mb-4"
            >
              Key Projects
            </motion.h3>

            <motion.p
              variants={fadeUp}
              className="text-gray-300 leading-7"
            >
              Developed DuPay, a FinTech platform supporting payment
              workflows, notifications, and transaction management. Also
              contributed to a GRC platform covering risk, audit, policy,
              mitigation, issue, and compliance management.
            </motion.p>
          </motion.div>

          {/* Card 6 */}
          <motion.div
            variants={card}
            whileHover={{ y: -10, scale: 1.02 }}
         
          >
            <motion.h3
              variants={fadeUp}
              className="text-sm tracking-[3px] uppercase text-gray-400 mb-4"
            >
              Professional Strengths
            </motion.h3>

            <motion.p
              variants={fadeUp}
              className="text-gray-300 leading-7"
            >
              Strong problem-solving skills, ownership mindset, debugging,
              performance optimization, API integration, teamwork,
              documentation, and end-to-end feature delivery.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
      <Experience/>
    </section>
  );
};

export default About;