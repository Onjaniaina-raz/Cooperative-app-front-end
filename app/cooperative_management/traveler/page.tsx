import { ArrowBigLeftIcon, ArrowBigRight, Plus, Search } from "lucide-react";

const page = () => {
  return (
    <div className="flex-1 w-full p-10 flex flex-col gap-6">
      <h5 className="font-[SpaceMono] font-bold text-xl underline">
        Liste des voyageurs
      </h5>

      <section className="flex justify-between items-center">
        <div className="flex gap-8">

          <button className="flex items-center _button gap-2">
            <span>Ajouter </span>
            <Plus className="h-4 w-4" />
          </button>

          <div className="flex justify-between items-center gap-4">
            <button className="_arrowbtn"><ArrowBigLeftIcon /></button>
            <span className="flex items-center justify-center border border-black font-bold h-8 w-8 rounded-full bg-white font-[SpaceMono]">1</span>
            <button className="_arrowbtn"><ArrowBigRight /></button>
          </div>

        </div>

        <form action='' className="relative flex items-center text-gray-400 focus:text-gray-600 group">

          <Search className="absolute ml-3"/>

          <input type="text" name="search" placeholder="Search" autoComplete="off" aria-label="search"
          className="_input pl-10 focus:bg-white"
          />
        </form>

      </section>
    </div>
  );
};

export default page;
