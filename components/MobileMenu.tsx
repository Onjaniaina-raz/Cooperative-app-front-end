"use client";
import { navLinks } from "@/constants";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import Navlink from "./Navlink";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden">
      <button
        className="text-gray-700 hover:text-coop-2 transition-colors cursor-pointer"
        onClick={toggleMenu}
      >
        <Menu />
      </button>

      <div
        className={`w-full h-full flex flex-col bg-white fixed top-0 left-0 z-50 transition-all duration-300 ease-in-out transform
        ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex w-full items-center justify-between h-20 border border-b border-coop-3 px-4">
          <Link href={"/cooperative_management/home"}>
            <h5 className="text-coop-2 text-xl font-semibold font-[SpaceMono]">
              Transp'Or Cooperative
            </h5>
          </Link>
          <button
            className="text-gray-700 hover:text-coop-2 transition-colors cursor-pointer"
            onClick={toggleMenu}
          >
            <X />
          </button>
        </div>

        <nav className="font-[RedHatDisplay] flex flex-col items-center flex-1 gap-10">
          <ul className="flex flex-col items-center justify-center gap-6 h-full text-xl">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Navlink href={link.url} label={link.label} />
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex w-full items-center justify-between h-20 border border-t border-coop-3 bg-coop-4">
            <h5 className="text-white text-xl font-semibold font-[SpaceMono] text-center w-full">
              Transp'Or Cooperative Manager
            </h5>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
