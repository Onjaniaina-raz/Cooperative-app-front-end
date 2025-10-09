import MenuItems from "@/components/MenuItems";
import { menuItems } from "@/constants";
import { LucideIceCreamBowl } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div className="flex-1 w-full p-10 flex items-center">

      <div className="flex flex-wrap gap-6 justify-start items-center flex-1 h-fit gap-y-6">
        
        {menuItems.map((item, index) => (
          <MenuItems 
          key={index}
          label={item.label}
          icon={item.icon}
          href={item.url}
          />
        ))}

      </div>
    </div>
  );
};

export default page;
