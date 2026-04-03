"use client"; // needed for useState

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
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
    
    const response = await fetch('http://localhost:3000/v1/book-us', {
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
      <main className='flex-grow flex items-center justify-center bg-gray-100 min-h-[calc(100vh-160px)]'>
        <form
          onSubmit={handleSubmit}
          className='bg-white p-8 rounded-lg shadow-xl w-full max-w-md'
        >
          <h2 className='text-3xl font-bold mb-8 text-center text-gray-800'>Contact Us</h2>

          <div className='mb-6'>
            <label className='block mb-3 font-semibold text-gray-700'>First Name *</label>
            <input
              type='text'
              name='firstName'
              value={formData.firstName}
              onChange={handleChange}
              className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition'
              required
            />
          </div>

          <div className='mb-6'>
            <label className='block mb-3 font-semibold text-gray-700'>Last Name *</label>
            <input
              type='text'
              name='lastName'
              value={formData.lastName}
              onChange={handleChange}
              className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition'
              required
            />
          </div>

          <div className='mb-6'>
            <label className='block mb-3 font-semibold text-gray-700'>Phone *</label>
            <input
              type='tel'
              name='phone'
              value={formData.phone}
              onChange={handleChange}
              className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition'
              required
            />
          </div>

          <div className='mb-8'>
            <label className='block mb-3 font-semibold text-gray-700'>Event Date *</label>
            <input
              type='date'
              name='eventDate'
              value={formData.eventDate}
              onChange={handleChange}
              className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-sm'
              required
            />
            <p className='text-xs text-gray-500 mt-1'>Date will be formatted as YYYY/MM/DD on submission</p>
          </div>

          <Map />
          <button
            type='submit'
            className='w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl'
          >
            Submit Booking Request
          </button>
        </form>
      </main>
      {/* <Footer /> */}
    </>
  );
}

