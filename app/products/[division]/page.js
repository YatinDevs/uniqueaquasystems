import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getProductsByDivision } from "@/lib/data";
import { buildDivisionMetadata } from "@/utils/seoConfig";

export function generateStaticParams() {
  return [{ division: "chemical" }, { division: "mechanical" }, { division: "spares" }];
}

export async function generateMetadata({ params }) {
  const { division } = await params;
  return buildDivisionMetadata(division);
}

const divisionTitles = {
  chemical: "Chemical Water Treatment Division",
  mechanical: "Mechanical Water Treatment Division",
  spares: "Spares & Equipments Division",
};

export default async function DivisionPage({ params }) {
  const { division } = await params;
  const products = getProductsByDivision(division);
  if (!products.length && !divisionTitles[division]) notFound();

  return (
    <div className="min-h-screen pt-32 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-4 text-sm text-gray-500">
          <Link href="/" className="hover:text-[#0077B6]">Home</Link> /{" "}
          <Link href="/products" className="hover:text-[#0077B6]">Products</Link> /{" "}
          <span className="text-gray-900">{divisionTitles[division]}</span>
        </div>
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{divisionTitles[division]}</h1>
          <p className="text-gray-600 max-w-3xl">
            {division === "chemical" && "Complete UNI-TREAT® series of water treatment chemicals for every industrial application."}
            {division === "mechanical" && "UNITREAT® branded mechanical water treatment systems designed for reliable, long-term operation."}
            {division === "spares" && "Complete range of water treatment accessories, testing equipment, and plant spares."}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link key={product.slug} href={`/products/${division}/${product.slug}`}>
              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-6 border border-gray-100 group h-full">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: (product.color || "#0077B6") + "20" }}>
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: product.color || "#0077B6" }} />
                </div>
                <h2 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h2>
                {product.subtitle && <p className="text-sm text-gray-500 mb-2">{product.subtitle}</p>}
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{product.shortDescription}</p>
                <span className="inline-flex items-center gap-1 text-[#0077B6] font-semibold text-sm">
                  View Details <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
