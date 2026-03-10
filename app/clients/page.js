import { buildMetadata } from "@/utils/seoConfig";
import { clientsData } from "@/lib/data";

export const metadata = buildMetadata("clients");

export default function ClientsPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{clientsData.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{clientsData.description}</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {clientsData.clients.map((client, i) => (
            <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex items-center justify-center text-center hover:shadow-md transition-shadow">
              <span className="text-gray-700 font-semibold text-sm">{client}</span>
            </div>
          ))}
        </div>
        <div className="mt-16 bg-gradient-to-br from-[#0077B6] to-[#00B4D8] rounded-3xl p-10 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Growing Client Family</h2>
          <p className="text-white/90 text-lg mb-6">Be part of 35+ leading companies who trust Unique Aqua for their water treatment needs.</p>
          <a href="/contact" className="inline-block bg-white text-[#0077B6] px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors">
            Get Started Today →
          </a>
        </div>
      </div>
    </div>
  );
}
