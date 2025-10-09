import React from "react";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface CardProps {
  label: string;
  icon: LucideIcon;
  href: string;
}

const MenuItems = ({ label, icon: Icon, href = "#" }: CardProps) => {
  return (
    <Link
      href={href}
      className="flex-1 md:flex-3/12 md:h-[250px] lg:h-[350px] bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group border-4 border-white hover:border-coop-4 cursor-pointer"
    >
      <section className="flex items-center justify-start w-full h-full px-10 gap-20">
        <div className="border p-5 rounded-lg border-coop-4 text-coop-4 group-hover:border-white transition-color duration-300">
          <Icon className="lg:w-20 lg:h-20 w-8 h-8 md:w-12 md:h-12" />
        </div>
        <h2 className="md:text-xl lg:text-2xl font-[RedHatDisplay]">{label}</h2>
      </section>
    </Link>
  );
};

export default MenuItems;
