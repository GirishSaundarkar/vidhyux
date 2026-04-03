"use client";

export default function UploadPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Upload Coming Soon
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Face detection feature temporarily disabled. 
            Check back later for AI-powered photo analysis!
          </p>
          <a href="/portfolio" className="mt-8 inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-12 py-4 rounded-2xl font-bold text-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-xl hover:shadow-2xl">
            ← View Portfolio
          </a>
        </div>
      </div>
    </main>
  );
}
