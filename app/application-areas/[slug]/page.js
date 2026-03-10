import { notFound } from "next/navigation";
import Link from "next/link";
import { applicationAreas, getApplicationAreaBySlug, getProductBySlug } from "@/lib/data";
import { siteSEO } from "@/utils/seoConfig";
import { CheckCircle, ArrowRight, AlertCircle } from "lucide-react";

export function generateStaticParams() {
  return applicationAreas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const area = getApplicationAreaBySlug(slug);
  if (!area) return {};
  return {
    title: `${area.name} Water Treatment Solutions | Unique Aqua`,
    description: area.description,
    alternates: { canonical: `${siteSEO.baseUrl}/application-areas/${slug}` },
    openGraph: {
      title: `${area.name} Water Treatment Solutions | Unique Aqua`,
      description: area.description,
      url: `${siteSEO.baseUrl}/application-areas/${slug}`,
      siteName: siteSEO.siteName,
      type: "website",
    },
  };
}

export default async function ApplicationAreaPage({ params }) {
  const { slug } = await params;
  const area = getApplicationAreaBySlug(slug);
  if (!area) notFound();

  const relatedProducts = (area.products || [])
    .map((pSlug) => {
      const p = getProductBySlug(pSlug);
      if (!p) return null;
      const div = p.division;
      return { ...p, division: div };
    })
    .filter(Boolean);

  return (
    <div className="min-h-screen pt-32 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-[#0077B6]">Home</Link> /{" "}
          <Link href="/application-areas" className="hover:text-[#0077B6]">Application Areas</Link> /{" "}
          <span className="text-gray-900">{area.name}</span>
        </div>

        {/* Hero */}
        <div
          className="rounded-3xl p-10 text-white mb-10"
          style={{ background: `linear-gradient(135deg, ${area.color}, #00B4D8)` }}
        >
          <h1 className="text-4xl font-bold mb-4">{area.name} Water Treatment</h1>
          <p className="text-white/90 text-lg max-w-2xl leading-relaxed">{area.description}</p>
          {area.stats && (
            <div className="mt-6 inline-block bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2 text-sm font-medium">
              {area.stats}
            </div>
          )}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Problems */}
            {area.problems && (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Common Challenges</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {area.problems.map((problem, i) => (
                    <div key={i} className="flex items-center gap-3 bg-red-50 rounded-xl p-3 border border-red-100">
                      <AlertCircle size={16} className="text-red-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{problem}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Solutions */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Our Solutions</h2>
              <div className="space-y-3">
                {area.solutions.map((solution, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl border border-blue-100">
                    <CheckCircle size={18} className="text-[#0077B6] flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{solution}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Products */}
            {relatedProducts.length > 0 && (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Recommended Products</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {relatedProducts.map((product, i) => (
                    <Link key={i} href={`/products/${product.division}/${product.slug}`}>
                      <div className="border border-gray-200 rounded-xl p-4 hover:border-[#0077B6] hover:bg-blue-50 transition-all group">
                        <div className="text-xs text-gray-400 mb-1">
                          {product.division === "chemical" ? "Chemical Division" : product.division === "mechanical" ? "Mechanical Division" : "Spares"}
                        </div>
                        <h3 className="font-bold text-gray-900 text-sm mb-1">{product.name}</h3>
                        <p className="text-xs text-gray-500 line-clamp-2 mb-2">{product.shortDescription}</p>
                        <span className="text-xs text-[#0077B6] font-semibold flex items-center gap-1">
                          View Details <ArrowRight size={12} />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#0077B6] to-[#00B4D8] rounded-2xl p-6 text-white">
              <h3 className="font-bold text-lg mb-3">Need a Custom Solution?</h3>
              <p className="text-white/80 text-sm mb-4">Our experts will design a complete water treatment program for your facility.</p>
              <Link href="/contact">
                <div className="w-full bg-white text-[#0077B6] rounded-xl px-4 py-3 font-bold text-center hover:bg-gray-100 transition-colors cursor-pointer">
                  Get Expert Consultation →
                </div>
              </Link>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h3 className="font-bold text-gray-900 mb-4">Other Industries</h3>
              <div className="space-y-1">
                {applicationAreas.filter((a) => a.slug !== slug).slice(0, 6).map((a) => (
                  <Link key={a.slug} href={`/application-areas/${a.slug}`} className="block text-sm text-gray-600 hover:text-[#0077B6] hover:bg-blue-50 rounded-lg px-3 py-2 transition-colors">
                    {a.name}
                  </Link>
                ))}
                <Link href="/application-areas" className="flex items-center gap-1 text-sm text-[#0077B6] font-semibold mt-2">
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
