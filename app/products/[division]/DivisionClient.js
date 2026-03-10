// app/products/[division]/DivisionClient.js
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Droplets, Settings, Wrench, FlaskConical, Package } from "lucide-react";

const divisionIconMap = {
  chemical: FlaskConical,
  mechanical: Settings,
  spares: Wrench,
};

const divisionBrand = {
  chemical: "UNI-TREAT®",
  mechanical: "UNITREAT®",
  spares: "Spares",
};

export default function DivisionClient({ products, division }) {
  const Icon = divisionIconMap[division] || Package;
  const brand = divisionBrand[division] || "";

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product, index) => (
        <motion.div
          key={product.slug}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Link href={`/products/${division}/${product.slug}`}>
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all p-6 h-full flex flex-col group border border-gray-100 hover:border-[#0077B6]/30">
              <div className="w-12 h-12 bg-[#e0f7ff] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#0077B6] transition-colors">
                <Icon className="w-6 h-6 text-[#0077B6] group-hover:text-white transition-colors" />
              </div>

              <h2 className="text-lg font-bold text-gray-900 mb-1 leading-snug">
                {product.name}
              </h2>

              {product.subtitle && (
                <p className="text-xs text-[#0077B6] font-semibold mb-2">{product.subtitle}</p>
              )}

              <p className="text-gray-600 text-sm mb-4 flex-grow leading-relaxed line-clamp-3">
                {product.shortDescription}
              </p>

              {/* Quick info badge */}
              <div className="flex items-center gap-2 mb-4">
                {product.chemicals && (
                  <span className="text-xs bg-blue-50 text-[#0077B6] px-2 py-1 rounded-full font-medium">
                    {product.chemicals.length} solutions
                  </span>
                )}
                {product.models && (
                  <span className="text-xs bg-blue-50 text-[#0077B6] px-2 py-1 rounded-full font-medium">
                    {product.models.length} models
                  </span>
                )}
                {product.cartridges && (
                  <span className="text-xs bg-blue-50 text-[#0077B6] px-2 py-1 rounded-full font-medium">
                    {product.cartridges.length} types
                  </span>
                )}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="text-[#0077B6] font-semibold flex items-center gap-1 text-sm group-hover:gap-2 transition-all">
                  View Details <ArrowRight size={14} />
                </span>
                <span className="text-xs bg-[#0077B6]/10 text-[#0077B6] px-2 py-1 rounded-full font-semibold">
                  {brand}
                </span>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}

      {products.length === 0 && (
        <div className="text-center py-12 col-span-full">
          <Droplets className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500">No products found in this division.</p>
        </div>
      )}
    </div>
  );
}
