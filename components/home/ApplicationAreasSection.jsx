"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Wind, Flame, Pill, Factory, Coffee, Shirt, Zap, Building2, Building, Cog, ArrowRight } from "lucide-react";
import { applicationAreas } from "@/lib/data";

const iconMap = { Wind, Flame, Pill, Factory, Coffee, Shirt, Zap, Building2, Building, Cog };

export default function ApplicationAreasSection() {
  const featured = applicationAreas.slice(0, 6);
  return (
    <section className="py-20 bg-gradient-to-br from-[#03045E] to-[#0077B6] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#90E0EF] font-semibold text-sm uppercase tracking-wider">Application Areas</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Industries We Serve
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Tailored water treatment solutions for every industry — from cooling towers to pharmaceutical pure water systems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featured.map((area, i) => {
            const Icon = iconMap[area.icon] || Factory;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Link href={`/application-areas/${area.slug}`}>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all group h-full">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{area.name}</h3>
                    <p className="text-white/70 text-sm mb-4 line-clamp-2">{area.description}</p>
                    <div className="space-y-1">
                      {area.solutions.slice(0, 2).map((s, j) => (
                        <div key={j} className="text-xs text-[#90E0EF] flex items-center gap-1">
                          <span>→</span> {s}
                        </div>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center">
          <Link href="/application-areas">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 bg-white text-[#0077B6] px-8 py-4 rounded-full font-bold text-lg shadow-lg cursor-pointer"
            >
              View All Application Areas <ArrowRight size={20} />
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  );
}
