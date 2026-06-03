import React from "react";
import Navbar from "../Navbar/Navbar";

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#2d0b52] via-[#05082b] to-[#001d46] text-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 pt-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Section */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/40 border border-purple-500/30 text-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-green-400"></span>
            Currently @ GTPL · Supporting Moneyverse.ai
            </div>

            <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
              Reetu M{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                Tambre
              </span>
            </h1>

            <h2 className="text-3xl font-semibold text-gray-200 mt-4">
              Software Engineer • React Developer • Full Stack Developer
            </h2>

            <p className="mt-8 text-lg text-gray-300 leading-relaxed max-w-xl">
              Software Engineer with 2.5+ years of experience building scalable
              fintech, GRC, ERPNext, and full stack applications using React.js,
              TypeScript, JavaScript, Python, Docker, Kafka, and GCP.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-10">
              <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 font-semibold hover:scale-105 transition">
                Download Resume
              </button>

              <button className="px-8 py-4 rounded-xl border border-gray-600 hover:bg-white/10 transition">
                Contact Me
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8">
              <button className="px-5 py-2 rounded-lg border border-purple-500/30 bg-purple-900/20">
                GitHub
              </button>

              <button className="px-5 py-2 rounded-lg border border-purple-500/30 bg-purple-900/20">
                LinkedIn
              </button>

              <button className="px-5 py-2 rounded-lg border border-purple-500/30 bg-purple-900/20">
                Email
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md p-5 rounded-[30px] border border-white/10 bg-[#071633]/70 backdrop-blur-md shadow-2xl">
              
              {/* Profile Card */}
              <div className="rounded-[24px] bg-gradient-to-b from-purple-900 to-blue-900 p-8 flex flex-col items-center">
                <div className="w-24 h-24 rounded-full border border-white/20 bg-white/10 flex items-center justify-center text-4xl font-bold">
                  RM
                </div>

                <h3 className="text-3xl font-bold mt-6">
                  Reetu M Tambre
                </h3>

                <p className="text-gray-300 mt-2">
                  Software Engineer
                </p>

                <div className="flex flex-wrap justify-center gap-2 mt-6">
                  {["React.js", "TypeScript", "Python", "Full Stack"].map(
                    (skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-sm rounded-full bg-white/10 border border-white/10"
                      >
                        {skill}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 mt-4">
                <div className="rounded-2xl border border-white/10 bg-[#071633] p-5 text-center">
                  <h4 className="text-3xl font-bold text-blue-400">
                    2.5+
                  </h4>
                  <p className="text-gray-400 text-sm mt-1">
                    Years
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#071633] p-5 text-center">
                  <h4 className="text-3xl font-bold text-blue-400">
                    6+
                  </h4>
                  <p className="text-gray-400 text-sm mt-1">
                    Projects
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#071633] p-5 text-center">
                  <h4 className="text-3xl font-bold text-blue-400">
                    Prod
                  </h4>
                  <p className="text-gray-400 text-sm mt-1">
                    Deployments
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeroSection;