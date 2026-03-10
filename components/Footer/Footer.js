import Link from "next/link";
import { Phone, Mail, MapPin, Droplets } from "lucide-react";
import { companyInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#03045E] to-[#023E8A] text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#0077B6] rounded-xl flex items-center justify-center">
                <Droplets size={22} className="text-white" />
              </div>
              <div>
                <div className="font-bold text-lg leading-tight">Unique Aqua</div>
                <div className="text-xs text-white/60 leading-tight">Systems & Chemical Industries</div>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              ISO certified water treatment specialists since 2002. Chemical, mechanical & spares — total water management under one roof.
            </p>
            <div className="text-xs text-white/50">Formerly known as: Unique Chemicals</div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-[#90E0EF]">Products</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link href="/products/chemical" className="hover:text-white transition-colors">Chemical Division</Link></li>
              <li><Link href="/products/chemical/cooling-towers-open-loop" className="hover:text-white transition-colors">Cooling Tower Chemicals</Link></li>
              <li><Link href="/products/chemical/boiler-water-treatment" className="hover:text-white transition-colors">Boiler Water Treatment</Link></li>
              <li><Link href="/products/mechanical" className="hover:text-white transition-colors">Mechanical Division</Link></li>
              <li><Link href="/products/mechanical/reverse-osmosis-ro-plant" className="hover:text-white transition-colors">RO Plant</Link></li>
              <li><Link href="/products/mechanical/water-softening-plant" className="hover:text-white transition-colors">Water Softener</Link></li>
              <li><Link href="/products/spares" className="hover:text-white transition-colors">Spares & Equipments</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-[#90E0EF]">Company</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link href="/company/about-us" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/company/quality-policy" className="hover:text-white transition-colors">Quality Policy</Link></li>
              <li><Link href="/company/our-mission" className="hover:text-white transition-colors">Our Mission</Link></li>
              <li><Link href="/application-areas" className="hover:text-white transition-colors">Application Areas</Link></li>
              <li><Link href="/clients" className="hover:text-white transition-colors">Our Clients</Link></li>
              <li><Link href="/news-events" className="hover:text-white transition-colors">News & Events</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-[#90E0EF]">Contact</h4>
            <div className="space-y-3 text-sm text-white/70">
              <div className="flex gap-3">
                <MapPin size={16} className="text-[#90E0EF] flex-shrink-0 mt-0.5" />
                <span>{companyInfo.address}</span>
              </div>
              <a href={`tel:${companyInfo.phone1}`} className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone size={16} className="text-[#90E0EF]" /> {companyInfo.phone1}
              </a>
              <a href={`tel:${companyInfo.phone2}`} className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone size={16} className="text-[#90E0EF]" /> {companyInfo.phone2}
              </a>
              <a href={`mailto:${companyInfo.email}`} className="flex items-center gap-3 hover:text-white transition-colors">
                <Mail size={16} className="text-[#90E0EF]" /> {companyInfo.email}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <div>© {new Date().getFullYear()} Unique Aqua Systems & Chemical Industries. All rights reserved.</div>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
