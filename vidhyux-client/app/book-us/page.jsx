"use client";

import { useState } from 'react';
import Header from '@/components/Header';
import Map from '@/components/Map';

export default function BookUs() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    eventDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const formatDateForSubmit = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}/${month}/${day}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const submitData = {
      ...formData,
      eventDate: formatDateForSubmit(formData.eventDate)
    };
    
    console.log('Formatted Form Data:', submitData);
    
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/book-us`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(submitData),
    });
    
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong');
    }

    alert('Booking submitted successfully!');
    console.log('Response:', data);
  };

  return (
    <>
      <Header />
      <main 
        className="relative flex-grow flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: `url('/wedding/DSC09100.jpg')` }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />
        <form
          onSubmit={handleSubmit}
          className="bg-white/95 backdrop-blur-md p-8 rounded-lg shadow-xl w-full max-w-md border border-white/20 relative z-10"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 drop-shadow-lg">Contact Us</h2>

          <div className="mb-6">
            <label className="block mb-3 font-semibold text-gray-700 drop-shadow-md">First Name *</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition shadow-lg"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block mb-3 font-semibold text-gray-700 drop-shadow-md">Last Name *</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition shadow-lg"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block mb-3 font-semibold text-gray-700 drop-shadow-md">Phone *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition shadow-lg"
              required
            />
          </div>

          <div className="mb-8">
            <label className="block mb-3 font-semibold text-gray-700 drop-shadow-md">Event Date *</label>
            <input
              type="date"
              name="eventDate"
              value={formData.eventDate}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-sm shadow-lg"
              required
            />
            <p className="text-xs text-gray-500 mt-1 drop-shadow-sm">Date will be formatted as YYYY/MM/DD on submission</p>
          </div>

          <Map />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-[1.02] transition-all duration-200 shadow-xl hover:shadow-2xl"
          >
            Submit Booking Request
          </button>
        </form>
      </main>
    </>
  );
}

