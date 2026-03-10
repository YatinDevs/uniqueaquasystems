"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FlaskConical, Settings, Wrench, ArrowRight } from "lucide-react";
import { aboutData } from "@/lib/data";

const iconMap = { FlaskConical, Settings, Wrench };
const divisionLinks = ["/products/chemical", "/products/mechanical", "/products/spares"];

export default function DivisionsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#0077B6] font-semibold text-sm uppercase tracking-wider">Our Divisions</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Complete Water Treatment Under One Roof
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Unique Aqua Systems & Chemical Industries operates through three specialized divisions, making us your one-stop solution for all water treatment needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {aboutData.divisions.map((division, i) => {
            const Icon = iconMap[division.icon] || FlaskConical;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -8 }}
              >
                <Link href={divisionLinks[i]}>
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all p-8 h-full border border-gray-100 group">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: division.color + "20" }}
                    >
                      <Icon size={32} style={{ color: division.color }} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{division.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{division.description}</p>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: division.color }}>
                      View Products <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
