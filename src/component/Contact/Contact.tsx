"use client";

import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
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
      },
    },
  };

  return (
    <section
      id="contact"
      className=" px-6 bg-gradient-to-r from-[#2d0b52] via-[#05082b] to-[#001d46]"
    >
       <div className="max-w-7xl mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-[#071633]/80 border border-white/10 rounded-[30px] p-6 md:p-10 backdrop-blur-lg text-white"
        >
          {/* Header */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col md:flex-row md:justify-between gap-4 mb-10"
          >
            <div>
              <p className="uppercase tracking-[6px] text-xs text-purple-500 font-bold mb-2">
                Contact
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Let&apos;s build exceptional products together
              </h2>
           <p className="text-xl md:text-xl text-gray-400 mt-4 max-w-3xl">
                I’m open to software engineering, React, and full stack opportunities. Feel free to connect for collaborations, interviews, or freelance projects.
              </p>
            </div>

            
          </motion.div>

          {/* Contact Cards */}
          <motion.div
            variants={container}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
          >
            {[
              {
                label: "PHONE",
                value: "+91 9326177767",
              },
              {
                label: "EMAIL",
                value: "reetu.tambre@gmail.com",
              },
              {
                label: "LINKEDIN",
                value: "linkedin.com/in/reetu",
              },
              {
                label: "GITHUB",
                value: "github.com/reetu",
              },
            ].map((item) => (
              <motion.div
                key={item.label}
                variants={fadeUp}
                whileHover={{
                  y: -5,
                  scale: 1.02,
                }}
                className="border border-white/10 rounded-2xl p-4 bg-white/5"
              >
                <p className="text-[10px] tracking-[4px] text-gray-400 mb-2">
                  {item.label}
                </p>

                <p className="text-white font-semibold break-words">
                  {item.value}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            variants={container}
            className="space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <motion.div variants={fadeUp}>
                <label className="block text-xs tracking-[4px] text-gray-400 mb-2">
                  NAME
                </label>

                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-transparent border border-white/20 rounded-xl px-4 py-4 outline-none focus:border-purple-500"
                />
              </motion.div>

              <motion.div variants={fadeUp}>
                <label className="block text-xs tracking-[4px] text-gray-400 mb-2">
                  EMAIL
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full bg-transparent border border-white/20 rounded-xl px-4 py-4 outline-none focus:border-purple-500"
                />
              </motion.div>
            </div>

            <motion.div variants={fadeUp}>
              <label className="block text-xs tracking-[4px] text-gray-400 mb-2">
                COMPANY / ROLE
              </label>

              <input
                type="text"
                placeholder="Company or Role"
                className="w-full bg-transparent border border-white/20 rounded-xl px-4 py-4 outline-none focus:border-purple-500"
              />
            </motion.div>

            <motion.div variants={fadeUp}>
              <label className="block text-xs tracking-[4px] text-gray-400 mb-2">
                MESSAGE
              </label>

              <textarea
                rows={5}
                placeholder="Tell me about your project and needs"
                className="w-full bg-transparent border border-white/20 rounded-xl px-4 py-4 outline-none resize-none focus:border-purple-500"
              />
            </motion.div>

            <motion.button
              variants={fadeUp}
              whileHover={{
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
              type="submit"
              className="w-full py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-500"
            >
              Send Message
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;