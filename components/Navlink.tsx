"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navlink = ({
  href,
  label,
  className,
}: {
  href: string;
  label: string;
  className?: string;
}) => {

  const pathname = usePathname();
  console.log(`Path: ${pathname}, Link: ${href}, Active: ${pathname === href}`);

  return (
    <div className="relative group">
      <Link
        href={href}
        className={`py-1 md:py-7 lg:px-2 text-gray-700 group-hover:text-coop-2 transition-colors block ${
          pathname === href ? "text-coop-2" : ""
        } ${className}`}
      >
        {label}
      </Link>
      
      <div className={`absolute bottom-0 left-0 h-0.5 bg-coop-2 transition-all duration-300 ${
        pathname === href ? "w-full" : "w-0 group-hover:w-full"
      }`} />
    </div>
  );
};

export default Navlink;