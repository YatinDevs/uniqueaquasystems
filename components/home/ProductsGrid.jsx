"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, FlaskConical, Settings, Wrench } from "lucide-react";
import { chemicalProducts, mechanicalProducts, sparesProducts } from "@/lib/data";

const featured = [
  { product: chemicalProducts[0], division: "chemical" },
  { product: chemicalProducts[2], division: "chemical" },
  { product: chemicalProducts[4], division: "chemical" },
  { product: mechanicalProducts[1], division: "mechanical" },
  { product: mechanicalProducts[3], division: "mechanical" },
  { product: sparesProducts[0], division: "spares" },
];

export default function ProductsGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#0077B6] font-semibold text-sm uppercase tracking-wider">Featured Products</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Our Product Range
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From chemical treatments to complete mechanical systems — everything you need for total water management.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featured.map(({ product, division }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Link href={`/products/${division}/${product.slug}`}>
                <div className="bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all p-6 h-full">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: (product.color || "#0077B6") + "20" }}
                  >
                    <div style={{ color: product.color || "#0077B6" }}>●</div>
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                    {division === "chemical" ? "Chemical Division" : division === "mechanical" ? "Mechanical Division" : "Spares & Equipments"}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{product.shortDescription}</p>
                  <span className="inline-flex items-center gap-1 text-[#0077B6] font-semibold text-sm">
                    View Details <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/products">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 bg-[#0077B6] text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-[#023E8A] transition-colors cursor-pointer"
            >
              View All Products <ArrowRight size={20} />
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  );
}
