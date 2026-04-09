"use client";

import Image from 'next/image';
import { useState } from 'react';

export default function InstagramButton() {
  const [isOpen, setIsOpen] = useState(false);
  const instagramUrl = 'https://www.instagram.com/pb_photography/';

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Floating Instagram Button */}
      <button
        onClick={toggleMenu}
        className='fixed bottom-6 right-28 z-50 w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white rounded-full shadow-2xl hover:shadow-pink-500/25 hover:scale-110 transition-all duration-300 border-4 border-white flex items-center justify-center'
        aria-label='Instagram'
      >
        <Image src='/images/ig-instagram-icon.svg' alt='Instagram' width={28} height={28} />
      </button>

      {/* Instagram Menu */}
      {isOpen && (
        <div className='fixed bottom-28 right-28 z-50 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 animate-in slide-in-from-bottom-4 duration-300'>
          <div className='p-6 space-y-4'>
            <div className='flex items-center space-x-3'>
              <div className='w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center'>
                <Image src='/images/ig-instagram-icon.svg' alt='Instagram' width={24} height={24} />
              </div>
              <div>
                <h3 className='font-bold text-lg text-gray-900'>Follow on Instagram</h3>
                <p className='text-pink-600 font-semibold'>@Pb_Photography</p>
              </div>
            </div>

            <div className='grid grid-cols-1 gap-3 pt-4 border-t border-gray-100'>
              <a
                href={instagramUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='group flex items-center space-x-3 p-4 rounded-xl bg-gradient-to-r from-pink-50 to-rose-50 hover:from-pink-100 hover:to-rose-100 transition-all border border-pink-200 hover:shadow-md hover:-translate-y-0.5'
              >
                <div className='w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center flex-shrink-0'>
                  <Image src='/images/ig-instagram-icon.svg' alt='Instagram' width={20} height={20} className='w-5 h-5' />
                </div>
                <div className='flex-1 min-w-0'>
                  <p className='font-semibold text-gray-900 group-hover:text-pink-700'>Open Instagram</p>
                  <p className='text-sm text-gray-500'>View profile</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Click outside to close */}
      {isOpen && (
        <div 
          className='fixed inset-0 z-40'
          onClick={toggleMenu}
        />
      )}
    </>
  );
}

