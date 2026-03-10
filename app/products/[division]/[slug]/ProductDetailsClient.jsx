// app/products/[division]/[slug]/ProductDetailsClient.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MessageCircle,
  CheckCircle,
  ArrowRight,
  Award,
  Droplets,
  Package,
  AlertTriangle,
  FlaskConical,
  Settings,
  Wrench,
  TestTube,
  BarChart3,
} from "lucide-react";

const divisionLabels = {
  chemical: "Chemical Water Treatment Division",
  mechanical: "Mechanical Water Treatment Division",
  spares: "Spares & Equipments Division",
};

const divisionBrand = {
  chemical: "UNI-TREAT®",
  mechanical: "UNITREAT®",
  spares: "Unique Aqua",
};

const divisionIconMap = {
  chemical: FlaskConical,
  mechanical: Settings,
  spares: Wrench,
};

export default function ProductDetailsClient({
  product,
  division,
  relatedProducts,
  companyInfo,
}) {
  const [activeTab, setActiveTab] = useState("overview");

  const brand = divisionBrand[division] || "Unique Aqua";
  const phone = companyInfo?.phone1 || "+91-253-6699936";
  const phone2 = companyInfo?.phone2 || "+91-253-6454294";
  const email = companyInfo?.email || "amitrudre@gmail.com";
  const DivIcon = divisionIconMap[division] || Package;

  // Build tabs dynamically based on product data
  const tabs = [
    { id: "overview", label: "Overview" },
    product.problems?.length > 0 && { id: "problems", label: "Problems Addressed" },
    (product.chemicals?.length > 0 ||
      product.models?.length > 0 ||
      product.cartridges?.length > 0 ||
      product.items?.length > 0 ||
      product.testingParameters?.length > 0) && {
      id: "solutions",
      label:
        division === "chemical"
          ? "Chemical Solutions"
          : product.models?.length > 0
          ? "Models & Specs"
          : "Product Range",
    },
    product.microbeDetection?.length > 0 && { id: "microbe", label: "Microbe Detection" },
    { id: "contact", label: "Get Quote" },
  ].filter(Boolean);

  return (
    <div>
      {/* ── Tab Navigation ─────────────────────────────────────── */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto no-scrollbar">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-4 text-sm font-semibold whitespace-nowrap border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? "border-[#0077B6] text-[#0077B6]"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main Content ───────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left: Tab Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* ── OVERVIEW TAB ── */}
            {activeTab === "overview" && (
              <div className="space-y-6">
                {/* Description */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#e0f7ff] rounded-xl flex items-center justify-center">
                      <DivIcon className="w-5 h-5 text-[#0077B6]" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900">Product Overview</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-base">
                    {product.description}
                  </p>

                  {/* Types (mechanical/spares) */}
                  {product.types && product.types.length > 0 && (
                    <div className="mt-6">
                      <h3 className="font-bold text-gray-900 mb-3">Available Types</h3>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {product.types.map((type, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl border border-blue-100"
                          >
                            <CheckCircle className="w-4 h-4 text-[#0077B6] flex-shrink-0" />
                            <span className="text-sm text-gray-700">{type}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Benefits card */}
                <div className="bg-gradient-to-br from-[#03045E] to-[#0077B6] rounded-2xl p-8 text-white">
                  <h2 className="text-xl font-bold mb-5">Why Choose {brand}?</h2>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      "ISO Certified Quality",
                      "Since 2002 — Proven Track Record",
                      "Serving 10+ Industries",
                      "Technical Support & AMC",
                      "Customized Solutions",
                      "Competitive Pricing",
                    ].map((benefit, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#00B4D8] flex-shrink-0" />
                        <span className="text-sm text-white/90">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick summary if has problems */}
                {product.problems?.length > 0 && (
                  <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <AlertTriangle className="w-5 h-5 text-amber-600" />
                      <h3 className="font-bold text-gray-900">
                        Key Problems We Address
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {product.problems.map((p, i) => (
                        <span
                          key={i}
                          className="text-xs bg-white border border-amber-200 text-amber-700 px-3 py-1 rounded-full font-medium"
                        >
                          {p.title}
                        </span>
                      ))}
                    </div>
                    <button
                      onClick={() => setActiveTab("problems")}
                      className="mt-3 text-sm text-[#0077B6] font-semibold flex items-center gap-1 hover:underline"
                    >
                      View detailed analysis <ArrowRight size={14} />
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* ── PROBLEMS TAB ── */}
            {activeTab === "problems" && (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <AlertTriangle className="w-5 h-5 text-red-500" />
                  <h2 className="text-xl font-bold text-gray-900">
                    Common Problems Addressed
                  </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {product.problems?.map((problem, i) => (
                    <div
                      key={i}
                      className="bg-red-50 rounded-xl p-5 border border-red-100"
                    >
                      <h3 className="font-bold text-red-700 mb-2">{problem.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {problem.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Solution teaser */}
                {(product.chemicals?.length > 0 || product.models?.length > 0) && (
                  <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-100">
                    <p className="text-sm text-gray-700 mb-2">
                      {brand} provides proven solutions to all these problems.
                    </p>
                    <button
                      onClick={() => setActiveTab("solutions")}
                      className="text-sm text-[#0077B6] font-semibold flex items-center gap-1 hover:underline"
                    >
                      View our solutions <ArrowRight size={14} />
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* ── SOLUTIONS TAB ── */}
            {activeTab === "solutions" && (
              <div className="space-y-6">
                {/* Chemical solutions */}
                {product.chemicals && product.chemicals.length > 0 && (
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <FlaskConical className="w-5 h-5 text-[#0077B6]" />
                      <h2 className="text-xl font-bold text-gray-900">
                        UNI-TREAT® Solutions for {product.name}
                      </h2>
                    </div>
                    <div className="space-y-3">
                      {product.chemicals.map((chem, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl border border-blue-100 hover:shadow-sm transition-all"
                        >
                          <div className="w-8 h-8 rounded-full bg-[#0077B6] text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                            {String.fromCharCode(65 + i)}
                          </div>
                          <div>
                            <span className="font-bold text-[#0077B6]">
                              {chem.name}
                            </span>
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
                    <div className="flex items-center gap-3 mb-6">
                      <BarChart3 className="w-5 h-5 text-[#0077B6]" />
                      <h2 className="text-xl font-bold text-gray-900">
                        Available Models
                      </h2>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="bg-[#0077B6] text-white">
                            <th className="px-4 py-3 text-left rounded-tl-lg">Model</th>
                            {product.models[0]?.capacity && (
                              <th className="px-4 py-3 text-left">Capacity</th>
                            )}
                            {product.models[0]?.flow && (
                              <th className="px-4 py-3 text-left">Flow Rate</th>
                            )}
                            {product.models[0]?.resinCap && (
                              <th className="px-4 py-3 text-left">Resin Cap.</th>
                            )}
                            {product.models[0]?.flowRate && (
                              <th className="px-4 py-3 text-left">Flow Rate</th>
                            )}
                            {product.models[0]?.chamber && (
                              <th className="px-4 py-3 text-left">Chamber (mm)</th>
                            )}
                            {product.models[0]?.lampPower && (
                              <th className="px-4 py-3 text-left rounded-tr-lg">Lamp Power</th>
                            )}
                          </tr>
                        </thead>
                        <tbody>
                          {product.models.map((model, i) => (
                            <tr
                              key={i}
                              className={`${
                                i % 2 === 0 ? "bg-gray-50" : "bg-white"
                              } hover:bg-blue-50 transition-colors`}
                            >
                              <td className="px-4 py-3 font-semibold text-gray-900">
                                {model.model}
                              </td>
                              {model.capacity && (
                                <td className="px-4 py-3 text-gray-700">{model.capacity}</td>
                              )}
                              {model.flow && (
                                <td className="px-4 py-3 text-gray-700">{model.flow}</td>
                              )}
                              {model.resinCap && (
                                <td className="px-4 py-3 text-gray-700">{model.resinCap}</td>
                              )}
                              {model.flowRate && (
                                <td className="px-4 py-3 text-gray-700">{model.flowRate}</td>
                              )}
                              {model.chamber && (
                                <td className="px-4 py-3 text-gray-700">{model.chamber}</td>
                              )}
                              {model.lampPower && (
                                <td className="px-4 py-3 text-gray-700">{model.lampPower}</td>
                              )}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* Cartridges table */}
                {product.cartridges && product.cartridges.length > 0 && (
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <Package className="w-5 h-5 text-[#0077B6]" />
                      <h2 className="text-xl font-bold text-gray-900">
                        Filter Cartridge Range
                      </h2>
                    </div>
                    <div className="space-y-4">
                      {product.cartridges.map((cart, i) => (
                        <div
                          key={i}
                          className="p-4 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-sm transition-all"
                        >
                          <h3 className="font-bold text-gray-900 mb-2">{cart.name}</h3>
                          <div className="grid sm:grid-cols-3 gap-2 text-sm text-gray-600">
                            {cart.micron && (
                              <span>
                                <span className="font-medium text-[#0077B6]">Micron: </span>
                                {cart.micron}
                              </span>
                            )}
                            {cart.config && (
                              <span className="sm:col-span-2">
                                <span className="font-medium text-[#0077B6]">Size: </span>
                                {cart.config}
                              </span>
                            )}
                            {cart.flow && (
                              <span className="sm:col-span-3">
                                <span className="font-medium text-[#0077B6]">Flow: </span>
                                {cart.flow}
                              </span>
                            )}
                            {cart.media && (
                              <span>
                                <span className="font-medium text-[#0077B6]">Media: </span>
                                {cart.media}
                              </span>
                            )}
                            {cart.note && (
                              <span className="sm:col-span-3 text-gray-500 italic">{cart.note}</span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Items (plant spares) */}
                {product.items && product.items.length > 0 && (
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <Wrench className="w-5 h-5 text-[#0077B6]" />
                      <h2 className="text-xl font-bold text-gray-900">
                        Product Categories
                      </h2>
                    </div>
                    <div className="space-y-4">
                      {product.items.map((item, i) => (
                        <div
                          key={i}
                          className="p-5 bg-blue-50 rounded-xl border border-blue-100"
                        >
                          <h3 className="font-bold text-[#0077B6] mb-2">{item.category}</h3>
                          <p className="text-sm text-gray-700 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Testing parameters */}
                {product.testingParameters && product.testingParameters.length > 0 && (
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <TestTube className="w-5 h-5 text-[#0077B6]" />
                      <h2 className="text-xl font-bold text-gray-900">
                        Testing Parameters ({product.testingParameters.length}+)
                      </h2>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {product.testingParameters.map((param, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-[#0077B6] flex-shrink-0" />
                          <span className="text-xs text-gray-700">{param}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* ── MICROBE DETECTION TAB ── */}
            {activeTab === "microbe" && product.microbeDetection && (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <TestTube className="w-5 h-5 text-[#0077B6]" />
                  <h2 className="text-xl font-bold text-gray-900">
                    BACTASLYDE Microbe Detection
                  </h2>
                </div>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  Unique Aqua supplies BACTASLYDE — a rapid microbiological detection
                  device for industrial and commercial applications.
                </p>
                <div className="space-y-4">
                  {product.microbeDetection.map((item, i) => (
                    <div
                      key={i}
                      className="p-5 bg-gray-50 rounded-xl border border-gray-100"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs bg-[#0077B6] text-white px-2 py-1 rounded font-bold">
                          {item.code}
                        </span>
                        <h3 className="font-bold text-gray-900 text-sm">{item.type}</h3>
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        <span className="font-medium text-[#0077B6]">Industries: </span>
                        {item.industries}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ── CONTACT TAB ── */}
            {activeTab === "contact" && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-3">Request a Quote</h2>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                    Contact our technical team for pricing, specifications, and
                    customized recommendations for{" "}
                    <strong>{product.name}</strong>.
                  </p>

                  <div className="space-y-3">
                    <a
                      href={`tel:${phone}`}
                      className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors"
                    >
                      <div className="w-10 h-10 bg-[#0077B6] rounded-xl flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">Call Us (Line 1)</div>
                        <div className="font-bold text-gray-900">{phone}</div>
                      </div>
                    </a>

                    <a
                      href={`tel:${phone2}`}
                      className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors"
                    >
                      <div className="w-10 h-10 bg-[#0096C7] rounded-xl flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">Call Us (Line 2)</div>
                        <div className="font-bold text-gray-900">{phone2}</div>
                      </div>
                    </a>

                    <a
                      href={`mailto:${email}?subject=Enquiry for ${product.name}`}
                      className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors"
                    >
                      <div className="w-10 h-10 bg-[#00B4D8] rounded-xl flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">Email Us</div>
                        <div className="font-bold text-gray-900">{email}</div>
                      </div>
                    </a>

                    <a
                      href={`https://wa.me/912536699936?text=Hi%2C%20I'm%20interested%20in%20${encodeURIComponent(product.name)}%20from%20Unique%20Aqua%20Systems.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors"
                    >
                      <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">WhatsApp</div>
                        <div className="font-bold text-gray-900">Chat with our team</div>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Company info */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#0077B6]" />
                    Our Certifications & Credentials
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { label: "ISO Certified", sub: "Quality Systems" },
                      { label: "Since 2002", sub: "22+ Years Experience" },
                      { label: "100+ Products", sub: "Comprehensive Range" },
                      { label: "35+ Clients", sub: "Across Industries" },
                    ].map((cert, i) => (
                      <div key={i} className="bg-blue-50 rounded-xl p-3 text-center">
                        <div className="text-sm font-bold text-[#0077B6]">{cert.label}</div>
                        <div className="text-xs text-gray-500 mt-0.5">{cert.sub}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ── Sidebar ──────────────────────────────────────────── */}
          <div className="space-y-6">
            {/* Quote CTA Card */}
            <div className="bg-gradient-to-br from-[#0077B6] to-[#00B4D8] rounded-2xl p-6 text-white">
              <div className="flex items-center gap-2 mb-2">
                <Droplets className="w-5 h-5" />
                <h3 className="font-bold text-lg">Get a Quote</h3>
              </div>
              <p className="text-white/80 text-sm mb-4 leading-relaxed">
                Contact our experts for pricing and technical consultation.
              </p>
              <Link href="/contact">
                <div className="w-full bg-white text-[#0077B6] rounded-xl px-4 py-3 font-bold text-center hover:bg-gray-100 transition-colors cursor-pointer text-sm">
                  Request Quote →
                </div>
              </Link>
              <div className="mt-4 space-y-2 pt-4 border-t border-white/20">
                <a
                  href={`tel:${phone}`}
                  className="flex items-center gap-2 text-white/80 text-xs hover:text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" /> {phone}
                </a>
                <a
                  href={`tel:${phone2}`}
                  className="flex items-center gap-2 text-white/80 text-xs hover:text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" /> {phone2}
                </a>
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-2 text-white/80 text-xs hover:text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" /> {email}
                </a>
              </div>
            </div>

            {/* Certification badge */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Award className="w-4 h-4 text-[#0077B6]" />
                Certifications
              </h3>
              <div className="space-y-2">
                {[
                  "ISO Certified Quality",
                  "Since 2002 — Proven",
                  "Total Water Management",
                  "24/7 Technical Support",
                ].map((c, i) => (
                  <div key={i} className="flex items-center gap-2 p-2 bg-blue-50 rounded-lg">
                    <CheckCircle className="w-4 h-4 text-[#0077B6] flex-shrink-0" />
                    <span className="text-xs font-medium text-gray-700">{c}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Products */}
            {relatedProducts.length > 0 && (
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h3 className="font-bold text-gray-900 mb-4">More Products</h3>
                <div className="space-y-1">
                  {relatedProducts.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/products/${division}/${p.slug}`}
                      className="block text-sm text-gray-600 hover:text-[#0077B6] hover:bg-blue-50 rounded-lg px-3 py-2 transition-colors"
                    >
                      {p.name}
                    </Link>
                  ))}
                  <Link
                    href={`/products/${division}`}
                    className="flex items-center gap-1 text-sm text-[#0077B6] font-semibold mt-3 px-3"
                  >
                    View All <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            )}

            {/* Application areas quick link */}
            <div className="bg-gradient-to-br from-gray-900 to-[#03045E] rounded-2xl p-6 text-white">
              <h3 className="font-bold mb-2">Application Areas</h3>
              <p className="text-white/70 text-xs mb-4 leading-relaxed">
                See how our products are used across different industries.
              </p>
              <Link href="/application-areas">
                <div className="text-xs bg-white/10 hover:bg-white/20 rounded-xl px-4 py-2.5 text-center font-semibold transition-colors cursor-pointer">
                  View All Industries →
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
