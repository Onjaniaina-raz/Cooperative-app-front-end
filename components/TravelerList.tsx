import { IdCard, Phone, UserSquare, VenusAndMars } from "lucide-react";
import React from "react";

interface TravelerListProps {
  name: string;
  phone: string;
  gender: string;
  idCard: string;
}

const TravelerList = ({ name, phone, gender, idCard }: TravelerListProps) => {
  return (
    <>
      <section className="flex gap-2 items-center">
        <UserSquare className="w-5 h-5 text-coop-2" />
        <span className="font-bold">:</span>
        <span className="font-[RedHatDisplay] font-bold">{name}</span>
      </section>

      <section className="flex gap-2 items-center">
        <Phone className="w-5 h-5 text-coop-2" />
        <span className="font-bold">:</span>
        <span className="font-[RedHatDisplay] font-bold">{phone}</span>
      </section>

      <section className="flex gap-2 items-center">
        <VenusAndMars className="w-6 h-6 text-coop-2" />
        <span className="font-bold">:</span>
        <span className="font-regular">{gender}</span>
      </section>

      <section className="flex gap-2 items-center">
        <IdCard className="w-6 h-6 text-coop-2" />
        <span className="font-bold">:</span>
        <span className="font-semibold">{idCard}</span>
      </section>
    </>
  );
};

export default TravelerList;
