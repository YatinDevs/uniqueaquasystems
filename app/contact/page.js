import { buildMetadata } from "@/utils/seoConfig";
import { companyInfo } from "@/lib/data";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata = buildMetadata("contact");

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">Get in touch with our water treatment experts</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>
              <div className="space-y-4">
                <div className="flex gap-4 items-start bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-[#0077B6]" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">Works & Office</div>
                    <div className="text-gray-600 text-sm">{companyInfo.address}</div>
                  </div>
                </div>
                <div className="flex gap-4 items-center bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-[#0077B6]" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">Telephone</div>
                    <a href={`tel:${companyInfo.phone1}`} className="text-[#0077B6] hover:underline block">{companyInfo.phone1}</a>
                    <a href={`tel:${companyInfo.phone2}`} className="text-[#0077B6] hover:underline block">{companyInfo.phone2}</a>
                  </div>
                </div>
                <div className="flex gap-4 items-center bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-[#0077B6]" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">Email</div>
                    <a href={`mailto:${companyInfo.email}`} className="text-[#0077B6] hover:underline">{companyInfo.email}</a>
                  </div>
                </div>
                <div className="flex gap-4 items-center bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock size={20} className="text-[#0077B6]" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">Business Hours</div>
                    <div className="text-gray-600 text-sm">Monday – Saturday: 9:00 AM – 6:00 PM</div>
                    <div className="text-gray-500 text-xs">Sunday: Closed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
            <form className="space-y-4" action="mailto:amitrudre@gmail.com" method="GET">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                  <input type="text" required className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0077B6] focus:border-transparent" placeholder="Your first name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input type="text" className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0077B6] focus:border-transparent" placeholder="Your last name" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                <input type="email" required className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0077B6] focus:border-transparent" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input type="tel" className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0077B6] focus:border-transparent" placeholder="+91 XXXXX XXXXX" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Product/Service of Interest</label>
                <select className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0077B6] focus:border-transparent">
                  <option value="">Select a product/service</option>
                  <option>Cooling Tower Chemicals</option>
                  <option>Boiler Water Treatment</option>
                  <option>RO Plant</option>
                  <option>DM Plant</option>
                  <option>Water Softener</option>
                  <option>UV Disinfection System</option>
                  <option>Descaling Products</option>
                  <option>Sugar Process Chemicals</option>
                  <option>Water Testing Kits</option>
                  <option>Filter Cartridges</option>
                  <option>General Enquiry</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                <textarea required rows={4} className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0077B6] focus:border-transparent" placeholder="Tell us about your water treatment requirements..." />
              </div>
              <button type="submit" className="w-full bg-[#0077B6] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#023E8A] transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
