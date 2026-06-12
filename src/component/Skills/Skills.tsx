"use client";
import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = {
    frontend: [
      { name: "React.js", level: 75 },
      { name: "Next.js", level: 50},
      { name: "TypeScript", level: 70 },
      { name: "JavaScript", level: 85 },
      { name: "HTML/CSS", level: 98 },
    ],
    backend: [
      { name: "Python", level: 70 },
      { name: "Java", level: 80 },
      { name: "Django", level: 60 },
      { name: "ERPNext", level: 90 },
      { name: "Frappe Framework", level: 85 },
    ],
  };

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
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
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

  const badgeContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const badgeVariant = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const skillRow = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
      },
    },
  };
  const Badge = ({ text }: { text: string }) => (
    <span className="px-3 py-1 text-xs border border-purple-500/30 bg-purple-500/10 rounded-lg text-gray-200">
      {text}
    </span>
  );

  return (
    <section
      id="skills"
      className="py-4 px-6 min-h-screen bg-gradient-to-r from-[#2d0b52] via-[#05082b] to-[#001d46] text-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center "
        >
          <motion.p variants={fadeUp} className="text-3xl sm:text-4xl md:text-6xl font-bold text-center mb-2 text-purple-500">
            Technical Expertise
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-3xl font-bold  sm:text-base max-w-3xl mx-auto text-center px-4 font-bold mb-8 md:mb-10"
          >
            Skills & Technologies
          </motion.h2>
        </motion.div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* Frontend */}
          <motion.div
            variants={cardVariant}
            className="bg-[#071633]/80 border border-white/10 rounded-3xl p-6 backdrop-blur-lg"
          >
            <motion.h3 variants={fadeUp} className="font-bold mb-6">
              Frontend
            </motion.h3>

            <motion.div variants={container} className="space-y-5">
              {skills.frontend.map((skill) => (
                <motion.div key={skill.name} variants={skillRow}>
                  <div className="flex justify-between text-sm mb-2">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>

                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1,
                        delay: 0.2,
                      }}
                      className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Backend */}
          <motion.div
            variants={cardVariant}
            whileHover={{ y: -8, scale: 1.02 }}
            className="bg-[#071633]/80 border border-white/10 rounded-3xl p-6 backdrop-blur-lg"
          >
            <motion.h3 variants={fadeUp} className="font-bold mb-6">
              Backend
            </motion.h3>

            <motion.div variants={container} className="space-y-5">
              {skills.backend.map((skill) => (
                <motion.div key={skill.name} variants={skillRow}>
                  <div className="flex justify-between text-sm mb-2">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>

                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1,
                        delay: 0.2,
                      }}
                      className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          {/* Database */}
          <motion.div
            variants={cardVariant}
            className="bg-[#071633]/80 border border-white/10 rounded-3xl p-6"
          >
            <motion.h3 variants={fadeUp} className="font-bold mb-6">
              Database
            </motion.h3>

            <motion.div
              variants={badgeContainer}
              className="flex flex-wrap gap-3"
            >
              {["MySQL", "PostgreSQL", "CockroachDB", "SQL"].map((item) => (
                <motion.div key={item} variants={badgeVariant}>
                  <Badge text={item} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* DevOps */}
          <motion.div
            variants={cardVariant}
            whileHover={{ y: -8, scale: 1.02 }}
            className="bg-[#071633]/80 border border-white/10 rounded-3xl p-6"
          >
            <motion.h3 variants={fadeUp} className="font-bold mb-6">
              DevOps & Cloud
            </motion.h3>

            <motion.div
              variants={badgeContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap gap-3"
            >
              {["Docker", "GCP", "CI/CD"].map((item) => (
                <motion.div key={item} variants={badgeVariant}>
                  <Badge text={item} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          {/* Other */}
          <motion.div
            variants={cardVariant}
            whileHover={{ y: -8, scale: 1.02 }}
            className="bg-[#071633]/80 border border-white/10 rounded-3xl p-6"
          >
            <motion.h3 variants={fadeUp} className="font-bold mb-6">
             Tools & Technologies
            </motion.h3>

            <motion.div
              variants={badgeContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap gap-3"
            >
              {[
                "Kafka",
                "Git",
                "GitHub",
                "Postman",
                "React Native",
                "Material UI",
                "Tailwind CSS",
              ].map((item) => (
                <motion.div key={item} variants={badgeVariant}>
                  <Badge text={item} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          {/* Focus Card */}
          <motion.div
            variants={cardVariant}
            className="rounded-3xl p-6 bg-gradient-to-br from-purple-500 via-purple-400 to-blue-500"
          >
            <motion.h3 variants={fadeUp} className="font-bold text-xl mb-4">
              Core Focus
            </motion.h3>

            <motion.p variants={fadeUp} className="text-white/90 leading-7">
              Creating polished user interfaces, scalable web applications,
              enterprise platforms, fintech solutions, and production-ready
              software using modern technologies.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
