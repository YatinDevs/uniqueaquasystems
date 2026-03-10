// app/products/[division]/[slug]/page.js
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  chemicalProducts,
  mechanicalProducts,
  sparesProducts,
  getProductBySlug,
  getProductsByDivision,
  companyInfo,
} from "@/lib/data";
import { buildProductMetadata } from "@/utils/seoConfig";
import ProductDetailsClient from "./ProductDetailsClient";

export async function generateStaticParams() {
  const params = [];
  chemicalProducts.forEach((p) =>
    params.push({ division: "chemical", slug: p.slug })
  );
  mechanicalProducts.forEach((p) =>
    params.push({ division: "mechanical", slug: p.slug })
  );
  sparesProducts.forEach((p) =>
    params.push({ division: "spares", slug: p.slug })
  );
  return params;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return buildProductMetadata(slug);
}

const divisionLabels = {
  chemical: "Chemical Water Treatment Division",
  mechanical: "Mechanical Water Treatment Division",
  spares: "Spares & Equipments Division",
};

export default async function ProductDetailPage({ params }) {
  const { division, slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const relatedProducts = getProductsByDivision(division)
    .filter((p) => p.slug !== slug)
    .slice(0, 5);

  return (
    <main className="min-h-screen bg-gray-50 pt-1 lg:pt-6">
      {/* ── Hero Section ─────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-[#03045E] via-[#023E8A] to-[#0077B6] text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-[#00B4D8] rounded-full blur-3xl" />
          <div className="absolute bottom-5 right-10 w-64 h-64 bg-[#0096C7] rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-white/60 mb-6 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/products" className="hover:text-white transition-colors">
              Products
            </Link>
            <span>/</span>
            <Link
              href={`/products/${division}`}
              className="hover:text-white transition-colors"
            >
              {divisionLabels[division]}
            </Link>
            <span>/</span>
            <span className="text-white font-medium">{product.name}</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 bg-white/10 backdrop-blur text-white">
              {divisionLabels[division]}
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 leading-tight">
              {product.name}
            </h1>
            {product.subtitle && (
              <p className="text-lg text-blue-200 mb-3 font-medium">{product.subtitle}</p>
            )}
            <p className="text-base text-blue-100 leading-relaxed max-w-2xl">
              {product.shortDescription}
            </p>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-3 mt-6">
              {product.chemicals?.length > 0 && (
                <span className="bg-white/10 backdrop-blur text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                  {product.chemicals.length} UNI-TREAT® Solutions
                </span>
              )}
              {product.models?.length > 0 && (
                <span className="bg-white/10 backdrop-blur text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                  {product.models.length} Models Available
                </span>
              )}
              {product.problems?.length > 0 && (
                <span className="bg-white/10 backdrop-blur text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                  {product.problems.length} Problems Addressed
                </span>
              )}
              <span className="bg-white/10 backdrop-blur text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                ISO Certified
              </span>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0 mb-[-1px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 60"
            className="fill-gray-50 w-full h-auto"
          >
            <path d="M0,30L80,33C160,37,320,43,480,40C640,37,800,27,960,24C1120,21,1280,27,1360,30L1440,33L1440,60L1360,60C1280,60,1120,60,960,60C800,60,640,60,480,60C320,60,160,60,80,60L0,60Z" />
          </svg>
        </div>
      </section>

      {/* ── Product Details (Client) ──────────────────────────────── */}
      <ProductDetailsClient
        product={product}
        division={division}
        relatedProducts={relatedProducts}
        companyInfo={companyInfo}
      />
    </main>
  );
}

export const revalidate = 3600;
