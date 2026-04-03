"use client";

import Image from 'next/image';
import { Phone } from 'lucide-react';
import { useState } from 'react';

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = '919876543210'; // Replace with your WhatsApp number

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
                <p className="text-green-600 font-semibold">+91 98765 43210</p>
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

              <a
                href={`tel:${phoneNumber}`}
                className="group flex items-center space-x-3 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 transition-all border border-blue-200 hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-900 group-hover:text-blue-700">Call Now</p>
                  <p className="text-sm text-gray-500">Instant call</p>
                </div>
              </a>

              <button
                onClick={scrollToTop}
                className="group flex items-center space-x-3 p-4 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 hover:bg-gray-200 transition-all border border-gray-200 hover:shadow-md hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5 text-gray-600 group-hover:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                <div className="flex-1 min-w-0 text-left">
                  <p className="font-semibold text-gray-900 group-hover:text-gray-800">Back to Top</p>
                  <p className="text-sm text-gray-500">Scroll up</p>
                </div>
              </button>
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
