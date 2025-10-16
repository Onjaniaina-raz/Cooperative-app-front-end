import { Captions } from "lucide-react";

interface VehiculeListProps {
  plate: string;
  place?: string;
  vehiculeclass: string;
  disponibility: string;
}

const VehiculeList = ({
  plate,
  place,
  vehiculeclass,
  disponibility,
}: VehiculeListProps) => {
  return (
    <>
      <section className="flex gap-2 items-center">
        <Captions className="w-5 h-5 text-coop-2" />
        <span className="font-bold">:</span>
        <span className="font-[RedHatDisplay] font-bold">{plate}</span>
      </section>

      {/* <section className="flex gap-2 items-center justify-start">
        <span className="font-bold">Nombre de place :</span>
        <span className="font-[RedHatDisplay] font-bold">{place}</span>
      </section> */}

      <section className="flex gap-2 items-center justify-start">
        <span className="font-bold">Classe :</span>
        <span className="font-regular">{vehiculeclass}</span>
      </section>

      <section>
        <span className="font-semibold">{disponibility}</span>
      </section>
    </>
  );
};

export default VehiculeList;
