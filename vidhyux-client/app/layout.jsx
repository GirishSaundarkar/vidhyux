import "./globals.css";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/whatsApp";
import CallNowButton from "@/components/CallNow";
import InstagramFeed from "@/components/instagram";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <CallNowButton />
        <InstagramFeed />
        <WhatsAppButton />
      </body>
    </html>
  );
}
