import { buildMetadata } from "@/utils/seoConfig";

export const metadata = buildMetadata("news-events");

export default function NewsEventsPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">News & Events</h1>
          <p className="text-xl text-gray-600">Stay updated with the latest from Unique Aqua</p>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 text-center">
          <div className="text-6xl mb-4">📰</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Coming Soon</h2>
          <p className="text-gray-600 max-w-md mx-auto">We're working on bringing you the latest news and events from Unique Aqua Systems & Chemical Industries.</p>
        </div>
      </div>
    </div>
  );
}
