"use client";

import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
    { name: "Blog", href: "#blog" },
    { name: "Faq", href: "#faq" },
  ];

  const [activeLink, setActiveLink] = useState("Home");

  return (
    <nav className="bg-[#E5F1FC] w-full px-4 py-4 flex justify-between items-center">
      <div>
        <h1 className="text-black text-2xl font-bold">FitGenie</h1>
      </div>
      <div>
        <ul>
          <li>
            {links.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="text-black px-4 py-2 hover:bg-[#D1E3F9] rounded"
                onClick={() => setActiveLink(item.name)}
                style={{
                  fontWeight: activeLink === item.name ? "bold" : "normal",
                  textDecoration:
                    activeLink === item.name ? "underline" : "none",
                }}
              >
                {item.name}
              </a>
            ))}
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex items-center gap-6">
          <li>
            <Link
              href="/login"
              className="text-black border hover:bg-gray-800 hover:text-white duration-300 px-4 py-2 rounded"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              href="/signup"
              className="text-black border hover:bg-gray-800 hover:text-white duration-300 px-4 py-2 rounded"
            >
              Signup
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
