"use client";

import Slider from "react-slick";

import Image from 'next/image';

const images = [
  {
    src: '/photo-1511285560929-80b456fea0bc.jpeg',
    alt: 'Wedding Cinematic Video Production'
  },
  {
    src: '/photo-1517486808906-6ca8b3f04846.jpeg',
    alt: 'Professional Event Filmmaking'
  },
  {
    src: '/photo-1519741497674-611481863552.jpeg',
    alt: 'Destination Wedding Coverage'
  },
  {
    src: '/photo-1505455184862-554165e5f6ba.jpeg',
    alt: 'Corporate Video Production'
  }
];

export default function HeroSlider() {
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 500,
    arrows: true,
  };

  return (
    <div className="relative mt-[-80px] h-screen w-full">
      <Slider {...settings}>
        {images.map((img, i) => (
          <div key={i} className="h-screen relative">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="100vw"
              priority={i === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30 flex items-center justify-center">
              <div className="text-center text-white px-6">
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 drop-shadow-2xl leading-tight">
                  VIDHYUX
                </h2>
                <p className="text-xl md:text-2xl lg:text-3xl opacity-90 drop-shadow-lg mb-8 max-w-2xl mx-auto">
                  Cinematic Storytelling
                </p>
                <a href="/book-us" className="inline-block bg-white text-gray-900 px-12 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-all shadow-2xl hover:shadow-white/50 hover:scale-105">
                  Book Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
