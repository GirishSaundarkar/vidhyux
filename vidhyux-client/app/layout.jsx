import "./globals.css";
import Header from "@/components/Header";
import InstagramFeed from "@/components/instagram";

import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/whatsApp";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
        <InstagramFeed />
      </body>

    </html>
  );
}