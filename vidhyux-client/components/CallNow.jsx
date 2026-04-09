"use client";

import { Phone } from 'lucide-react';
import { useState } from 'react';

export default function CallNowButton() {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = '9975520680';

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Floating Call Button */}
      <button
        onClick={toggleMenu}
className="fixed bottom-6 right-52 z-50 w-16 h-16 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-2xl hover:shadow-blue-500/25 hover:scale-110 transition-all duration-300 border-4 border-white flex items-center justify-center"
        aria-label="Call Now"
      >
        <Phone size={28} />
      </button>

      {/* Call Menu */}
      {isOpen && (
        <div className="fixed bottom-28 right-44 z-50 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 animate-in slide-in-from-bottom-4 duration-300">
          <div className="p-6 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <Phone size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900">Call pb photography Now</h3>
                <p className="text-blue-600 font-semibold">+91 {phoneNumber}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 pt-4 border-t border-gray-100">
              <a
                href={`tel:${phoneNumber}`}
                className="group flex items-center space-x-3 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 transition-all border border-blue-200 hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-900 group-hover:text-blue-700">Call Direct</p>
                  <p className="text-sm text-gray-500">Instant connection</p>
                </div>
              </a>

              <a
                href={`sms:${phoneNumber}?body=Hi pb photography team, I would like to know more about your team!`}
                className="group flex items-center space-x-3 p-4 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 transition-all border border-green-200 hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-white rotate-90" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-900 group-hover:text-green-700">Send SMS</p>
                  <p className="text-sm text-gray-500">Quick text enquiry</p>
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

