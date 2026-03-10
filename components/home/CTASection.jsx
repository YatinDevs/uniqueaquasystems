"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Mail, ArrowRight, Droplets } from "lucide-react";
import { companyInfo } from "@/lib/data";

export default function CTASection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#0077B6] to-[#00B4D8] rounded-3xl p-12 text-white shadow-2xl"
        >
          <Droplets size={48} className="mx-auto mb-6 text-white/80" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Solve Your Water Treatment Challenges?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Get in touch with our water treatment experts. We provide tailored solutions for every industry and every scale — from domestic to large industrial plants.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/contact">
              <motion.div whileHover={{ scale: 1.05 }} className="inline-flex items-center gap-2 bg-white text-[#0077B6] px-8 py-4 rounded-full font-bold text-lg cursor-pointer">
                Get a Quote <ArrowRight size={20} />
              </motion.div>
            </Link>
            <Link href="/products">
              <motion.div whileHover={{ scale: 1.05 }} className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#0077B6] transition-all cursor-pointer">
                Browse Products
              </motion.div>
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center text-white/90">
            <a href={`tel:${companyInfo.phone1}`} className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone size={18} /> {companyInfo.phone1}
            </a>
            <a href={`mailto:${companyInfo.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail size={18} /> {companyInfo.email}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
