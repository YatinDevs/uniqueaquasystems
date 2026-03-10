"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Droplets, ArrowRight, Award, Package, Calendar } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#03045E] via-[#0077B6] to-[#00B4D8]">
      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-white/10"
            style={{
              width: `${200 + i * 150}px`,
              height: `${200 + i * 150}px`,
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.1, 0.3] }}
            transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.5 }}
          />
        ))}
      </div>

      {/* Floating droplets */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`drop-${i}`}
          className="absolute text-white/20"
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{ y: [-20, 20, -20], rotate: [0, 10, 0] }}
          transition={{ duration: 3 + i * 0.5, repeat: Infinity }}
        >
          <Droplets size={20 + i * 4} />
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm font-medium mb-8"
        >
          <Droplets size={16} />
          <span>ISO Certified Water Treatment Specialists</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold leading-tight mb-4"
        >
          Total Water Management
          <span className="block text-[#90E0EF]">Solutions</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-white/80 mb-3 font-medium"
        >
          UNI-TREAT® Chemicals • Mechanical Systems • Spares & Equipments
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-base text-white/70 mb-10 max-w-2xl mx-auto"
        >
          ISO certified water treatment specialists since 2002. Serving industries across the Asian region from Nashik, India.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Link href="/products">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-white text-[#0077B6] px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all cursor-pointer"
            >
              Explore Products <ArrowRight size={20} />
            </motion.div>
          </Link>
          <Link href="/contact">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#0077B6] transition-all cursor-pointer"
            >
              Contact Us
            </motion.div>
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="grid grid-cols-3 gap-4 max-w-2xl mx-auto"
        >
          {[
            { icon: <Calendar size={20} />, value: "Since 2002", label: "Established" },
            { icon: <Package size={20} />, value: "100+", label: "Products" },
            { icon: <Award size={20} />, value: "ISO", label: "Certified" },
          ].map((stat, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4">
              <div className="flex justify-center mb-2 text-[#90E0EF]">{stat.icon}</div>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-sm text-white/70">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
