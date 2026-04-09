import Link from 'next/link';
import { Share2, Users, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-black text-white border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">pbPhotography</h3>
            <p className="text-gray-400 mb-4">
              Professional video production that tells your story.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com" className="text-gray-400 hover:text-white transition p-2 rounded" target="_blank" rel="noopener noreferrer">
                <Share2 size={24} />
              </a>
              <a href="https://www.instagram.com" className="text-gray-400 hover:text-white transition p-2 rounded" target="_blank" rel="noopener noreferrer">
                <Users size={24} />
              </a>
              <a href="tel:+15551234567" className="text-gray-400 hover:text-white transition p-2 rounded">
                <Phone size={24} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/" className="hover:text-white transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition">About</Link></li>
              <li><Link href="/book-us" className="hover:text-white transition">Book Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-gray-400 mb-2">hello@pbPhotography.com</p>
            <p className="text-gray-400">+1 (555) 123-4567</p>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} PB-Photography. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

