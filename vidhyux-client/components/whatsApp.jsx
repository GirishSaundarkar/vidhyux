"use client";

import Image from 'next/image';
import { Phone } from 'lucide-react';
import { useState } from 'react';

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = '9975520680';

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Floating WhatsApp Button */}
      <button
        onClick={toggleMenu}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl hover:shadow-green-500/25 hover:scale-110 transition-all duration-300 border-4 border-white flex items-center justify-center"
        aria-label="WhatsApp"
      >
        <Image src="/images/icons8-whatsapp.svg" alt="WhatsApp" width={32} height={32} className="w-8 h-8" />
      </button>

      {/* WhatsApp Menu */}
      {isOpen && (
        <div className="fixed bottom-28 right-6 z-50 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 animate-in slide-in-from-bottom-4 duration-300">
          <div className="p-6 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <Image src="/images/icons8-whatsapp.svg" alt="WhatsApp" width={24} height={24} className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900">Contact via WhatsApp</h3>
                <p className="text-green-600 font-semibold">+91 {phoneNumber}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 pt-4 border-t border-gray-100">
              <a
                href={`https://wa.me/${phoneNumber}?text=Hi! I'd like to book Vidhyux for my event!`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-3 p-4 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 transition-all border border-green-200 hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Image src="/images/icons8-whatsapp.svg" alt="WhatsApp" width={20} height={20} className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-900 group-hover:text-green-700">Send Message</p>
                  <p className="text-sm text-gray-500">Quick enquiry</p>
                </div>
              </a>


            </div>
          </div>
        </div>
      )}

      {/* Click outside to close */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40"
          onClick={toggleMenu}
        />
      )}
    </>
  );
}

