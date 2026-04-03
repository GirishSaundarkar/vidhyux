import HeroSlider from "@/components/HeroSlider";

export default function Home() {
  return (
    <main>
      <HeroSlider />
      
      <section className="py-24 px-6 lg:px-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional face identification for every occasion
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Multi-Face Detection</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Automatically identifies multiple individuals in group photos
              </p>
              <a href="/upload" className="text-blue-600 font-semibold hover:text-blue-800 transition">
                Try Now →
              </a>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl">🔗</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Share Links</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Generate unique shareable links for your results
              </p>
              <a href="/upload" className="text-blue-600 font-semibold hover:text-blue-800 transition">
                Try Now →
              </a>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl">💾</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Instant Download</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Download annotated results immediately
              </p>
              <a href="/upload" className="text-blue-600 font-semibold hover:text-blue-800 transition">
                Try Now →
              </a>
            </div>
          </div>

          <div className="text-center">
            <a href="/upload" className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-12 py-6 rounded-3xl text-xl font-bold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl">
              Upload Your First Photo
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
