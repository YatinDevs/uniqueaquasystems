"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";
import { aboutData } from "@/lib/data";

export default function AboutSection() {
  const { whoWeAre, qualityPolicy, mission } = aboutData;
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#0077B6] font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
              {whoWeAre.title}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {whoWeAre.paragraphs[0]}
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              {whoWeAre.paragraphs[2]}
            </p>
            <div className="space-y-3 mb-8">
              {[qualityPolicy.title, mission.title, "ISO Certified Company", "Asian Region Service"].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-[#0077B6] flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
            <Link href="/company/about-us">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-[#0077B6] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#023E8A] transition-colors cursor-pointer"
              >
                Learn More About Us <ArrowRight size={18} />
              </motion.div>
            </Link>
          </motion.div>

          {/* Right - Stats + Mission */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {whoWeAre.highlights.map((h, i) => (
                <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center">
                  <div className="text-3xl font-bold text-[#0077B6] mb-1">{h.value}</div>
                  <div className="text-sm text-gray-500">{h.description}</div>
                </div>
              ))}
            </div>

            {/* Mission Card */}
            <div className="bg-gradient-to-br from-[#0077B6] to-[#00B4D8] rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-3">{mission.title}</h3>
              <p className="text-white/90 leading-relaxed text-sm">{mission.description}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
