"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname(); 

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact Us", path: "/book-us" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/50 text-white">
      <div className="flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold">pb Photography</h1>

        <nav className="space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`hover:text-blue-400 transition ${
                pathname === item.path ? "text-blue-400 font-semibold" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}