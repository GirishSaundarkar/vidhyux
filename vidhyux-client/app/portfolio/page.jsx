"use client";
import Image from 'next/image';
import { Camera, CameraOff, Video, Film, Clapperboard } from 'lucide-react';

const portfolioItems = [
  {
    title: 'Group Photo Analysis',
    image: '/DSC05516.jpg',
    description: 'Identified 4 individuals from corporate event photo',
    link: '/upload'
  },
    {
      title: 'Wedding Face ID',
      image: '/saptapadi/DSC05292-1.jpg',
      description: 'Detected bride, groom, and family members',
      link: '/upload'
    },
  {
    title: 'Social Media Ready',
    image: '/DSC00886.jpg',
    description: 'Quick face detection for influencer content',
    link: '/upload'
  },
  {
    title: 'Event Photography',
    image: '/wedding/DSC09100a.jpg',
    description: 'Multiple faces identified from conference',
    link: '/upload'
  }
];

export default function Portfolio() {
  return (
    <main className="min-h-[calc(100vh-160px)]">
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900 bg-clip-text text-transparent mb-6">
              Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Real-world examples of our face identification technology in action
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-24">
            {portfolioItems.map((item, index) => (
              <div key={index} className="group relative overflow-hidden rounded-3xl bg-white shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-4 hover:scale-[1.02]">
                <div className="relative h-96">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <h3 className="text-2xl font-bold text-white mb-3 drop-shadow-lg">{item.title}</h3>
                    <p className="text-blue-100 text-lg mb-6 drop-shadow-md">{item.description}</p>
                    <a
                      href={item.link}
                      className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all group-hover:translate-x-2"
                    >
                      Try Similar →
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Complete Wedding Planning */}
          <div className="text-center py-24">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-rose-500 via-pink-500 to-orange-500 bg-clip-text text-transparent mb-12">
              Complete Wedding Planning
            </h2>
            <div className="flex overflow-x-auto gap-4 pb-8 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 snap-x snap-mandatory">
              <div className="flex-none w-64 h-48 rounded-2xl overflow-hidden shadow-xl snap-center hover:scale-105 transition-transform relative">
                <Image
                  src="/engagement/image.png"
                  alt="Haldi Ceremony"
                  fill
                  className="object-cover w-full h-full hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-2 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  1. Haldi
                </div>
              </div>
              <div className="flex-none w-64 h-48 rounded-2xl overflow-hidden shadow-xl snap-center hover:scale-105 transition-transform relative">
                <Image
                  src="/engagement/mehendi.png"
                  alt="Mehndi"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-2 left-4 bg-gradient-to-r from-orange-400 to-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  2. Mehndi
                </div>
              </div>
              <div className="flex-none w-64 h-48 rounded-2xl overflow-hidden shadow-xl snap-center hover:scale-105 transition-transform relative">
                <Image
                  src="/engagement/DSC02962.jpg"
                  alt="Shaadi"
                  fill
                  className="object-cover w-full h-full hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-2 left-4 bg-gradient-to-r from-red-400 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  3. Shaadi
                </div>
              </div>
              <div className="flex-none w-64 h-48 rounded-2xl overflow-hidden shadow-xl snap-center hover:scale-105 transition-transform relative">
                <Image
                  src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=300&fit=crop"
                  alt="Reception"
                  fill
                  className="object-cover w-full h-full hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-2 left-4 bg-gradient-to-r from-purple-400 to-indigo-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  4. Reception
                </div>
              </div>
            </div>
          </div>

          {/* Our Products For You - Wedding Services */}
          <div className="py-24 bg-white">
            <h2 className="text-center text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 bg-clip-text text-transparent mb-20">
              Our Products For You
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
              <div className="group text-center p-8 rounded-2xl bg-gradient-to-b from-orange-50 to-yellow-50 border border-orange-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl shadow-lg group-hover:scale-110 transition-transform p-3">
                  <Camera className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Traditional Photography</h3>
                <p className="text-gray-600 text-sm">Classic posed wedding portraits</p>
              </div>
              
              <div className="group text-center p-8 rounded-2xl bg-gradient-to-b from-emerald-50 to-green-50 border border-emerald-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl shadow-lg group-hover:scale-110 transition-transform p-3">
                  <CameraOff className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Candid Photography</h3>
                <p className="text-gray-600 text-sm">Natural candid moments captured</p>
              </div>

              <div className="group text-center p-8 rounded-2xl bg-gradient-to-b from-purple-50 to-indigo-50 border border-purple-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl shadow-lg group-hover:scale-110 transition-transform p-3">
                  <Video className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Traditional Videography</h3>
                <p className="text-gray-600 text-sm">Conventional wedding ceremony coverage</p>
              </div>

              <div className="group text-center p-8 rounded-2xl bg-gradient-to-b from-blue-50 to-cyan-50 border border-blue-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl shadow-lg group-hover:scale-110 transition-transform p-3">
                  <Film className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Cinematic Videography</h3>
                <p className="text-gray-600 text-sm">Hollywood-style cinematic wedding films</p>
              </div>

              <div className="group text-center p-8 rounded-2xl bg-gradient-to-b from-pink-50 to-rose-50 border border-pink-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-r from-pink-400 to-rose-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl shadow-lg group-hover:scale-110 transition-transform p-3">
                  <Clapperboard className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Reels Shoot</h3>
                <p className="text-gray-600 text-sm">Instagram Reels & short-form content</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
