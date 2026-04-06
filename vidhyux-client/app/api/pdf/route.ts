import { NextRequest, NextResponse } from 'next/server';
import puppeteer from 'puppeteer';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.json();
    
    const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Contract PDF</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap');
    body { font-family: 'Outfit', sans-serif; }
    h1,h2,h3 { font-family: 'Playfair Display', serif; }
  </style>
</head>
<body class="bg-[#FDFBF7] p-12 text-sm">
  <!-- Full contract HTML here, using formData props -->
  <div class="max-w-4xl mx-auto">
    <header class="relative h-40 bg-cover bg-center flex flex-col items-center justify-center" style="background-image: url('https://images.unsplash.com/photo-1769038933441-2457038f8dda?crop=entropy&amp;cs=srgb&amp;fm=jpg&amp;ixid=M3w4NTYxODF8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcGhvdG9ncmFwaHklMjBlbGVnYW50fGVufDB8fHx8MTc3NTI2NTEwOXww&amp;ixlib=rb-4.1.0&amp;q=85'); background-color: rgba(139, 116, 95, 0.7); background-blend-mode: overlay;">
      <div class="text-center z-10 text-white">
        <h1 class="text-4xl mb-2" style="font-family: 'Playfair Display', serif; font-style: italic; font-weight: 400;">${formData.tagline}</h1>
        <p class="text-xl font-semibold tracking-[0.2em]" style="font-family: 'Outfit', sans-serif;">${formData.brandName}</p>
      </div>
    </header>
    
    <section class="space-y-6">
      <div class="space-y-2 text-stone-900">
        <div class="flex items-center gap-2">
          <span class="font-medium text-gray-600 font-outfit min-w-[60px]">Client:</span>
          <span class="text-lg font-playfair font-semibold">${formData.clientName}</span>
        </div>
        <div class="flex items-center gap-2">
          <svg class="h-4 w-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
          </svg>
          <span class="font-medium text-gray-600 font-outfit">Event:</span>
          <span class="font-outfit">${formData.event}</span>
        </div>
        <div class="flex items-center gap-2">
          <svg class="h-4 w-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.85a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
          </svg>
          <span class="font-medium text-gray-600 font-outfit">Location:</span>
          <span class="font-outfit">${formData.location}</span>
        </div>
      </div>
      
      <section>
        <h2 class="text-3xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
          <span class="text-3xl text-amber-600">✦</span>
          Programs Covered
        </h2>
        <div class="overflow-hidden border border-gray-300 rounded-xl">
          <table class="w-full">
            <thead>
              <tr class="bg-amber-700 text-white">
                <th class="p-4 text-left font-semibold">Date</th>
                <th class="p-4 text-left font-semibold">Side</th>
                <th class="p-4 text-left font-semibold">Type of Photography</th>
                <th class="p-4 text-left font-semibold">Location</th>
              </tr>
            </thead>
            <tbody>
              ${formData.programs.map((p, i) => `
                <tr class="border-t border-gray-200 hover:bg-gray-50 ${i % 2 === 0 ? '' : 'bg-gray-50'}">
                  <td class="p-4 font-medium">${p.day}</td>
                  <td class="p-4">${p.side.charAt(0).toUpperCase() + p.side.slice(1)}</td>
                  <td class="p-4">${p.type}</td>
                  <td class="p-4 font-medium">${p.locations}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </section>
      
      <section>
        <h2 class="text-2xl font-semibold italic text-gray-800 mb-4 flex items-center gap-2">
          <span class="text-2xl text-amber-600">✦</span>
          What's Included
        </h2>
        <ul class="space-y-2">
          ${formData.included.map(item => `<li class="flex items-start gap-3">
            <span class="text-amber-600 mt-1 min-w-[1rem]">•</span>
            <span>${item}</span>
          </li>`).join('')}
        </ul>
      </section>
      
      <div class="grid md:grid-cols-2 gap-8">
        <section>
          <h3 class="text-2xl font-semibold italic text-gray-800 mb-6 flex items-center gap-2">
            <span class="text-amber-600">✦</span>
            Investment
          </h3>
          <div class="bg-amber-600 text-white p-6 rounded-2xl mb-4 shadow-lg">
            <div class="flex justify-between items-center">
              <span class="text-lg font-bold">Total:</span>
              <span class="text-3xl font-black">₹${formData.totalInvestment}</span>
            </div>
          </div>
          <div class="bg-white border-2 border-amber-200 p-6 rounded-xl shadow-md">
            <div class="flex justify-between text-gray-700">
              <span class="font-semibold">Down Payment:</span>
              <span class="font-bold text-amber-700">₹${formData.downPayment}</span>
            </div>
          </div>
        </section>
        
        <section>
          <h3 class="text-xl font-semibold text-gray-800 mb-4">Payment Schedule</h3>
          <div class="space-y-2">
            ${formData.payments.map(p => `<div class="flex justify-between items-center bg-white border border-gray-200 p-4 rounded-lg shadow-sm">
              <span>${p.label}</span>
              <span class="font-bold text-lg">₹${p.amount}</span>
            </div>`).join('')}
          </div>
        </section>
      </div>
      
      <footer class="mt-6 pt-4 border-t border-gray-300 text-center pb-4">
        <p class="text-2xl font-semibold italic text-amber-700 mb-1">${formData.brandName}</p>
        <p class="text-xs text-gray-600 font-medium">Team ${formData.brandName}</p>
      </footer>
    </div>
  </div>
</body>
</html>
    `;

    const browser = await puppeteer.launch({ 
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: 'networkidle0' });
    const pdf = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: { top: '0mm', right: '10mm', left: '10mm', bottom: '10mm' },
      scale: 0.8
    });
    await browser.close();

    return new NextResponse(pdf, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${formData.clientName.replace(/\s+/g, '_')}_Contract.pdf"`,
      },
    });
  } catch (error) {
    console.error('PDF generation error:', (error as Error).stack || error);
    return NextResponse.json({ error: 'PDF generation failed' }, { status: 500 });
  }
}
