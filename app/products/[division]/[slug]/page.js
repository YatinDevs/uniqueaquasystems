import { notFound } from "next/navigation";
import Link from "next/link";
import { getProductBySlug, getProductsByDivision } from "@/lib/data";
import { buildProductMetadata } from "@/utils/seoConfig";
import { CheckCircle, ArrowRight } from "lucide-react";

export async function generateStaticParams() {
  const { chemicalProducts, mechanicalProducts, sparesProducts } = await import("@/lib/data");
  const params = [];
  chemicalProducts.forEach((p) => params.push({ division: "chemical", slug: p.slug }));
  mechanicalProducts.forEach((p) => params.push({ division: "mechanical", slug: p.slug }));
  sparesProducts.forEach((p) => params.push({ division: "spares", slug: p.slug }));
  return params;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return buildProductMetadata(slug);
}

export default async function ProductDetailPage({ params }) {
  const { division, slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const divisionLabels = {
    chemical: "Chemical Water Treatment Division",
    mechanical: "Mechanical Water Treatment Division",
    spares: "Spares & Equipments Division",
  };

  return (
    <div className="min-h-screen pt-32 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-gray-500 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-[#0077B6]">Home</Link> /
          <Link href="/products" className="hover:text-[#0077B6]">Products</Link> /
          <Link href={`/products/${division}`} className="hover:text-[#0077B6]">{divisionLabels[division]}</Link> /
          <span className="text-gray-900">{product.name}</span>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <div
                className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4"
                style={{ backgroundColor: (product.color || "#0077B6") + "20", color: product.color || "#0077B6" }}
              >
                {divisionLabels[division]}
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              {product.subtitle && <p className="text-gray-500 text-lg mb-4">{product.subtitle}</p>}
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>

            {/* Problems (if any) */}
            {product.problems && product.problems.length > 0 && (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Common Problems Addressed</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {product.problems.map((problem, i) => (
                    <div key={i} className="bg-red-50 rounded-xl p-4 border border-red-100">
                      <h3 className="font-bold text-red-700 mb-2">{problem.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{problem.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Chemicals / Solutions */}
            {product.chemicals && product.chemicals.length > 0 && (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  UNI-TREAT® Series of {product.name} Chemical Solutions
                </h2>
                <div className="space-y-3">
                  {product.chemicals.map((chem, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl border border-blue-100">
                      <div className="w-8 h-8 rounded-full bg-[#0077B6] text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {String.fromCharCode(97 + i).toUpperCase()}
                      </div>
                      <div>
                        <span className="font-bold text-[#0077B6]">{chem.name}</span>
                        <span className="text-gray-700"> — {chem.type}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Models table */}
            {product.models && product.models.length > 0 && (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Available Models</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-[#0077B6] text-white rounded-lg">
                        <th className="px-4 py-3 text-left rounded-tl-lg">Model</th>
                        {product.models[0].capacity && <th className="px-4 py-3 text-left">Capacity</th>}
                        {product.models[0].flow && <th className="px-4 py-3 text-left">Flow Rate</th>}
                        {product.models[0].resinCap && <th className="px-4 py-3 text-left rounded-tr-lg">Resin Capacity</th>}
                        {product.models[0].flowRate && <th className="px-4 py-3 text-left rounded-tr-lg">Flow Rate</th>}
                      </tr>
                    </thead>
                    <tbody>
                      {product.models.map((model, i) => (
                        <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                          <td className="px-4 py-3 font-semibold text-gray-900">{model.model}</td>
                          {model.capacity && <td className="px-4 py-3 text-gray-700">{model.capacity}</td>}
                          {model.flow && <td className="px-4 py-3 text-gray-700">{model.flow}</td>}
                          {model.resinCap && <td className="px-4 py-3 text-gray-700">{model.resinCap}</td>}
                          {model.flowRate && <td className="px-4 py-3 text-gray-700">{model.flowRate}</td>}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* CTA Card */}
            <div className="bg-gradient-to-br from-[#0077B6] to-[#00B4D8] rounded-2xl p-6 text-white">
              <h3 className="font-bold text-lg mb-3">Get a Quote</h3>
              <p className="text-white/80 text-sm mb-4">Contact our experts for pricing and technical consultation.</p>
              <Link href="/contact">
                <div className="w-full bg-white text-[#0077B6] rounded-xl px-4 py-3 font-bold text-center hover:bg-gray-100 transition-colors cursor-pointer">
                  Request Quote →
                </div>
              </Link>
            </div>

            {/* Division quick links */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h3 className="font-bold text-gray-900 mb-4">More Products</h3>
              <div className="space-y-2">
                {getProductsByDivision(division).filter((p) => p.slug !== product.slug).slice(0, 5).map((p) => (
                  <Link key={p.slug} href={`/products/${division}/${p.slug}`} className="block text-sm text-gray-600 hover:text-[#0077B6] hover:bg-blue-50 rounded-lg px-3 py-2 transition-colors">
                    {p.name}
                  </Link>
                ))}
                <Link href={`/products/${division}`} className="flex items-center gap-1 text-sm text-[#0077B6] font-semibold mt-3">
                  View All <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
