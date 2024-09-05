"use client";

import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <nav className="mx-auto flex w-full items-center justify-between px-4 py-4 md:max-w-7xl lg:py-8">
      <div className="flex items-center gap-16">
        <div className="flex items-center gap-4">
          <div className="block lg:hidden">
            <button
              className="cursor-pointer rounded-xl border border-[#272526] bg-[#18181a] p-2 hover:border-indigo-600"
              onClick={toggleVisibility}
            >
              <Menu size={20} color="#f7f7f7" />
            </button>
            {visible && (
              <ul
                className="absolute left-0 top-20 z-20 h-fit w-full rounded-xl bg-[#18181a] py-2 shadow-lg"
                onBlur={() => setVisible(false)}
              >
                <li
                  className="cursor-pointer px-4 py-2 text-md font-semibold text-white hover:bg-[#252529] hover:font-extrabold hover:text-indigo-600"
                  onClick={() => setVisible(false)}
                >
                  Home
                </li>
                <li
                  className="ext-md cursor-pointer px-4 py-2 font-semibold text-gray-400 hover:bg-[#252529] hover:font-extrabold hover:text-indigo-600"
                  onClick={() => setVisible(false)}
                >
                  Pricing
                </li>
                <li
                  className="ext-md cursor-pointer px-4 py-2 font-semibold text-gray-400 hover:bg-[#252529] hover:font-extrabold hover:text-indigo-600"
                  onClick={() => setVisible(false)}
                >
                  About Us
                </li>
                <li
                  className="ext-md cursor-pointer px-4 py-2 font-semibold text-gray-400 hover:bg-[#252529] hover:font-extrabold hover:text-indigo-600"
                  onClick={() => setVisible(false)}
                >
                  Contact
                </li>
              </ul>
            )}
          </div>
          <div className="relative">
            <h1 className="text-xl font-extrabold text-white">Mambo</h1>
            <span className="absolute -right-3 top-0 h-2.5 w-2.5 rounded-full bg-indigo-600"></span>
          </div>
        </div>
        <ul className="hidden items-center gap-8 lg:flex">
          <li className="text-md font-semibold text-white">Home</li>
          <li className="text-md font-semibold text-neutral-500">Pricing</li>
          <li className="text-md font-semibold text-neutral-500">About Us</li>
          <li className="text-md font-semibold text-neutral-500">Contact</li>
        </ul>
      </div>
      <div className="flex items-center gap-8">
        <button className="rounded-xl px-6 py-2 text-sm font-semibold text-white md:px-8 md:py-3 md:text-md">
          Log in
        </button>
        <button className="rounded-xl bg-indigo-600 px-6 py-2 text-sm font-semibold text-white md:px-8 md:py-3 md:text-md">
          Sign up
        </button>
      </div>
    </nav>
  );
}
