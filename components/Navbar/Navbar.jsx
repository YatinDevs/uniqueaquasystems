"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu, X, Phone, ChevronDown, Mail, ArrowRight,
  FlaskConical, Settings, Wrench, Droplets, Wind, Flame,
  Pill, Factory, Coffee, Shirt, Zap, Building2, Home,
  ChevronRight, Info, Package, Users, MailOpen
} from "lucide-react";
import { navItems } from "@/lib/data";

const companyInfo = {
  phone: "+91-253-6699936",
  email: "amitrudre@gmail.com",
};

const divisionIcons = { FlaskConical, Settings, Wrench };
const industryIcons = { Wind, Flame, Pill, Factory, Coffee, Shirt, Zap, Building2, Home };

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const closeTimeout = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMouseEnter = (key) => {
    clearTimeout(closeTimeout.current);
    setActiveDropdown(key);
  };
  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-lg" : "bg-transparent"}`}>
      {/* Top bar */}
      <div className={`hidden md:block transition-all duration-300 ${scrolled ? "bg-[#0077B6]" : "bg-[#03045E]/80 backdrop-blur-sm"}`}>
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center text-white text-xs">
          <div className="flex items-center gap-1">
            <Droplets size={12} />
            <span>Unique Aqua Systems & Chemical Industries — Total Water Management Since 2002</span>
          </div>
          <div className="flex items-center gap-4">
            <a href={`tel:${companyInfo.phone}`} className="flex items-center gap-1 hover:text-[#90E0EF] transition-colors">
              <Phone size={12} /> {companyInfo.phone}
            </a>
            <a href={`mailto:${companyInfo.email}`} className="flex items-center gap-1 hover:text-[#90E0EF] transition-colors">
              <Mail size={12} /> {companyInfo.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav className={`transition-all duration-300 ${scrolled ? "bg-white" : "bg-[#03045E]/70 backdrop-blur-md"}`}>
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#0077B6] rounded-xl flex items-center justify-center">
              <Droplets size={22} className="text-white" />
            </div>
            <div>
              <div className={`font-bold text-lg leading-tight ${scrolled ? "text-[#03045E]" : "text-white"}`}>
                Unique Aqua
              </div>
              <div className={`text-xs leading-tight ${scrolled ? "text-gray-500" : "text-white/70"}`}>
                Systems & Chemical Industries
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Home */}
            <Link href="/" className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${scrolled ? "text-gray-700 hover:text-[#0077B6] hover:bg-blue-50" : "text-white hover:bg-white/20"}`}>
              Home
            </Link>

            {/* Company */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("company")}
              onMouseLeave={handleMouseLeave}
            >
              <button className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${scrolled ? "text-gray-700 hover:text-[#0077B6] hover:bg-blue-50" : "text-white hover:bg-white/20"}`}>
                Company <ChevronDown size={14} />
              </button>
              <AnimatePresence>
                {activeDropdown === "company" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50"
                  >
                    {navItems.company.dropdown.map((item) => (
                      <Link key={item.href} href={item.href} className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#0077B6] transition-colors">
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Products mega-menu */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("products")}
              onMouseLeave={handleMouseLeave}
            >
              <button className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${scrolled ? "text-gray-700 hover:text-[#0077B6] hover:bg-blue-50" : "text-white hover:bg-white/20"}`}>
                Products <ChevronDown size={14} />
              </button>
              <AnimatePresence>
                {activeDropdown === "products" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[800px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50"
                  >
                    <div className="grid grid-cols-3 divide-x divide-gray-100">
                      {navItems.products.megaMenu.map((division) => (
                        <div key={division.slug} className="p-5">
                          <div className="flex items-center gap-2 mb-3">
                            <div className="w-2 h-2 rounded-full bg-[#0077B6]" />
                            <Link href={`/products/${division.slug}`} className="text-xs font-bold text-[#0077B6] uppercase tracking-wider hover:underline">
                              {division.division}
                            </Link>
                          </div>
                          <div className="space-y-1">
                            {division.items.map((item) => (
                              <Link key={item.href} href={item.href} className="block text-sm text-gray-600 hover:text-[#0077B6] hover:bg-blue-50 rounded-lg px-2 py-1.5 transition-colors">
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="bg-gradient-to-r from-[#0077B6] to-[#00B4D8] px-6 py-3 flex items-center justify-between">
                      <span className="text-white text-sm font-medium">Explore all products across 3 divisions</span>
                      <Link href="/products" className="flex items-center gap-1 text-white text-sm font-bold hover:underline">
                        View All <ArrowRight size={14} />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Application Areas */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("applications")}
              onMouseLeave={handleMouseLeave}
            >
              <button className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${scrolled ? "text-gray-700 hover:text-[#0077B6] hover:bg-blue-50" : "text-white hover:bg-white/20"}`}>
                Application Areas <ChevronDown size={14} />
              </button>
              <AnimatePresence>
                {activeDropdown === "applications" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50"
                  >
                    {navItems.applicationAreas.dropdown.map((item) => (
                      <Link key={item.href} href={item.href} className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#0077B6] transition-colors">
                        {item.label}
                      </Link>
                    ))}
                    <div className="border-t border-gray-100">
                      <Link href="/application-areas" className="flex items-center gap-2 px-4 py-3 text-sm text-[#0077B6] font-semibold hover:bg-blue-50">
                        View All Industries <ArrowRight size={14} />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Clients */}
            <Link href="/clients" className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${scrolled ? "text-gray-700 hover:text-[#0077B6] hover:bg-blue-50" : "text-white hover:bg-white/20"}`}>
              Clients
            </Link>

            {/* News & Events */}
            <Link href="/news-events" className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${scrolled ? "text-gray-700 hover:text-[#0077B6] hover:bg-blue-50" : "text-white hover:bg-white/20"}`}>
              News & Events
            </Link>

            {/* Contact CTA */}
            <Link href="/contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="ml-2 bg-[#0077B6] text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-[#023E8A] transition-colors cursor-pointer"
              >
                Contact Us
              </motion.div>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className={`lg:hidden p-2 rounded-lg ${scrolled ? "text-gray-700" : "text-white"}`}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-100 overflow-y-auto max-h-[80vh]"
            >
              <div className="px-4 py-4 space-y-1">
                <Link href="/" onClick={() => setMobileOpen(false)} className="block px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-blue-50">Home</Link>

                {/* Company mobile */}
                <div>
                  <button
                    className="w-full flex items-center justify-between px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-blue-50"
                    onClick={() => setMobileExpanded(mobileExpanded === "company" ? null : "company")}
                  >
                    Company <ChevronDown size={16} className={`transition-transform ${mobileExpanded === "company" ? "rotate-180" : ""}`} />
                  </button>
                  {mobileExpanded === "company" && (
                    <div className="pl-4 space-y-1">
                      {navItems.company.dropdown.map((item) => (
                        <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="block px-4 py-2 text-sm text-gray-600 rounded-lg hover:bg-blue-50 hover:text-[#0077B6]">
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Products mobile */}
                <div>
                  <button
                    className="w-full flex items-center justify-between px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-blue-50"
                    onClick={() => setMobileExpanded(mobileExpanded === "products" ? null : "products")}
                  >
                    Products <ChevronDown size={16} className={`transition-transform ${mobileExpanded === "products" ? "rotate-180" : ""}`} />
                  </button>
                  {mobileExpanded === "products" && (
                    <div className="pl-4 space-y-3">
                      {navItems.products.megaMenu.map((division) => (
                        <div key={division.slug}>
                          <Link href={`/products/${division.slug}`} onClick={() => setMobileOpen(false)} className="block text-xs font-bold text-[#0077B6] px-4 py-1 uppercase tracking-wider">
                            {division.division}
                          </Link>
                          {division.items.map((item) => (
                            <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-[#0077B6] rounded-lg">
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Application Areas mobile */}
                <div>
                  <button
                    className="w-full flex items-center justify-between px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-blue-50"
                    onClick={() => setMobileExpanded(mobileExpanded === "applications" ? null : "applications")}
                  >
                    Application Areas <ChevronDown size={16} className={`transition-transform ${mobileExpanded === "applications" ? "rotate-180" : ""}`} />
                  </button>
                  {mobileExpanded === "applications" && (
                    <div className="pl-4 space-y-1">
                      {navItems.applicationAreas.dropdown.map((item) => (
                        <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="block px-4 py-2 text-sm text-gray-600 rounded-lg hover:bg-blue-50 hover:text-[#0077B6]">
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link href="/clients" onClick={() => setMobileOpen(false)} className="block px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-blue-50">Clients</Link>
                <Link href="/news-events" onClick={() => setMobileOpen(false)} className="block px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-blue-50">News & Events</Link>
                <Link href="/contact" onClick={() => setMobileOpen(false)} className="block px-4 py-3 bg-[#0077B6] text-white font-bold rounded-lg text-center">Contact Us</Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
