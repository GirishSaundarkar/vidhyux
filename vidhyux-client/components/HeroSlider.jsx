 "use client";
 
 export default function HeroSlider() {
   return (
     <div className='relative -mt-20 h-[calc(100vh-80px)] w-full overflow-hidden'>
       <video
         autoPlay
         loop
         muted
         playsInline
         poster='/photo-1519741497674-611481863552.jpeg'
         className='w-full h-full object-cover'
       >
         <source src='/240841_medium.mp4' type='video/mp4' />
         Your browser does not support the video tag.
       </video>
       
       <div className='absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/40 flex items-center justify-center'>
         <div className='text-center text-white px-6 max-w-4xl mx-auto'>
           <h2 className='text-5xl md:text-7xl lg:text-8xl font-black mb-6 drop-shadow-2xl leading-tight'>
             PB PhotoGraphy
           </h2>
           <p className='text-xl md:text-2xl lg:text-3xl opacity-90 drop-shadow-lg mb-8'>
             Cinematic Storytelling
           </p>
           <a 
             href='/book-us' 
             className='inline-block bg-white text-gray-900 px-12 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-all shadow-2xl hover:shadow-white/50 hover:scale-105'
           >
             Book Now
           </a>
         </div>
       </div>
     </div>
   );
 }

