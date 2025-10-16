import { Calendar, Car, Map, UserSquare } from "lucide-react";

interface DriverListProps {
  date: string;
  vehicule: string;
  driver: string;
  trajet: string;
}

const HistoryList = ({ date, vehicule, driver, trajet }: DriverListProps) => {
  return (
    <>
      <section className="flex gap-2 items-center">
        <Calendar className="w-5 h-5 text-coop-2" />
        <span className="font-bold">:</span>
        <span className="font-[RedHatDisplay] font-bold">{date}</span>
      </section>

      <section className="flex gap-2 items-center">
        <Car className="w-5 h-5 text-coop-2" />
        <span className="font-bold">:</span>
        <span className="font-[RedHatDisplay] font-bold">{vehicule}</span>
      </section>

      <section className="flex gap-2 items-center">
        <UserSquare className="w-5 h-5 text-coop-2" />
        <span className="font-bold">:</span>
        <span className="font-[RedHatDisplay] font-bold">{driver}</span>
      </section>

      <section className="flex gap-2 items-center">
        <Map className="w-5 h-5 text-coop-2" />
        <span className="font-bold">:</span>
        <span className="font-[RedHatDisplay] font-bold">{trajet}</span>
      </section>
    </>
  );
};

export default HistoryList;
