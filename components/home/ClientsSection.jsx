"use client";
import { motion } from "framer-motion";
import { clientsData } from "@/lib/data";

export default function ClientsSection() {
  const doubledClients = [...clientsData.clients, ...clientsData.clients];
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-[#0077B6] font-semibold text-sm uppercase tracking-wider">Our Clients</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">{clientsData.title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{clientsData.description}</p>
        </motion.div>
      </div>

      {/* Scrolling ticker */}
      <div className="overflow-hidden">
        <motion.div
          className="flex gap-6 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {doubledClients.map((client, i) => (
            <div
              key={i}
              className="inline-flex items-center bg-white rounded-xl px-6 py-3 shadow-sm border border-gray-100 min-w-max"
            >
              <span className="text-gray-700 font-semibold text-sm">{client}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="text-center mt-10">
        <a href="/clients" className="inline-flex items-center gap-2 text-[#0077B6] font-semibold hover:underline">
          View All Clients →
        </a>
      </div>
    </section>
  );
}
