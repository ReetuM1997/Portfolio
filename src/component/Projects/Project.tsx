"use client";

import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "DuPay",
    category: "Fintech",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",
    description:
      "Fintech application supporting multi-transaction systems and payment workflows at scale.",
    tech: "React.js · TypeScript · Kafka · Docker",
    github: "#",
    demo: "#",
  },
  {
    title: "GRC Platform",
    category: "Governance",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
    description:
      "Governance, Risk & Compliance platform built for regulatory oversight and automation.",
    tech: "Next.js · Python · PostgreSQL",
    github: "#",
    demo: "#",
  },
  {
    title: "Shopping Cart App",
    category: "Frontend",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800",
    description:
      "React + Redux project demonstrating real-time cart management and checkout flows.",
    tech: "React · Redux · Material UI",
    github: "#",
    demo: "#",
  },
  {
    title: "Material UI Dashboard",
    category: "Dashboard",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800",
    description:
      "Admin dashboard with CRUD operations, charts, analytics and responsive tables.",
    tech: "React · Material UI · Chart.js",
    github: "#",
    demo: "#",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
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
      duration: 0.6,
    },
  },
};

const cardVariant = {
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
    },
  },
};

const Project = () => {
  return (
    <section
      id="projects"
      className="py-16 px-6 bg-gradient-to-r from-[#2d0b52] via-[#05082b] to-[#001d46] text-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-6"
        >
          <div>
            <motion.p
              variants={fadeUp}
              className="uppercase tracking-[6px] text-gray-400 text-xs"
            >
              Projects
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="text-4xl font-bold mt-2"
            >
              Featured Work
            </motion.h2>
          </div>

          <motion.div
            variants={fadeUp}
            className="flex flex-wrap gap-3"
          >
            {["All", "Frontend", "Full Stack", "Enterprise"].map(
              (item, index) => (
                <button
                  key={item}
                  className={`px-4 py-2 rounded-full border text-sm transition ${
                    index === 0
                      ? "bg-purple-600 border-purple-500"
                      : "border-white/10 hover:border-purple-500"
                  }`}
                >
                  {item}
                </button>
              )
            )}
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariant}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="bg-[#071633]/80 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-lg"
            >
              <div className="p-5">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-xl">
                    {project.title}
                  </h3>

                  <span className="text-xs px-3 py-1 rounded-full bg-white/10">
                    {project.category}
                  </span>
                </div>

                <div className="overflow-hidden rounded-2xl">
                  <motion.img
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.4 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-52 object-cover"
                  />
                </div>

                <p className="text-gray-300 text-sm mt-5 leading-7">
                  {project.description}
                </p>

                <div className="mt-4">
                  <p className="text-[11px] uppercase tracking-[4px] text-gray-500">
                    Tech Stack
                  </p>

                  <p className="text-sm text-gray-300 mt-2">
                    {project.tech}
                  </p>
                </div>

                <div className="flex gap-5 mt-5">
                  <a
                    href={project.github}
                    className="text-sm text-purple-400 hover:text-purple-300"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    className="text-sm text-purple-400 hover:text-purple-300"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Project;