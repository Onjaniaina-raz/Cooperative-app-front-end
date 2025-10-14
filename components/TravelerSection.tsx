"use client";
import { CalendarCheck, Car, Pencil, Trash } from "lucide-react";
import TravelerList from "./TravelerList";
import { travelers } from "@/constants";
import { ArrowBigLeftIcon, ArrowBigRight, Plus, Search } from "lucide-react";
import { useEffect, useState } from "react";
import ListSkeleton from "./ListSkeleton";

const TravelerSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const listPerPage = 7;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [currentPage]);

  const totalPages = Math.ceil(travelers.length / listPerPage);
  const indexOfLastDriver = currentPage * listPerPage;
  const indexOfFirstDriver = indexOfLastDriver - listPerPage;
  const currentTravelers = travelers.slice(
    indexOfFirstDriver,
    indexOfLastDriver
  );

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <section className="flex justify-between items-center">
        <div className="flex gap-8">
          <button className="flex items-center _button gap-2">
            <span>Ajouter </span>
            <Plus className="h-4 w-4" />
          </button>

          <div className="flex justify-between items-center gap-4">
            <button
              className="_arrowbtn"
              onClick={prevPage}
              disabled={currentPage === 1}
            >
              <ArrowBigLeftIcon />
            </button>
            <span className="flex items-center justify-center border border-black font-bold h-8 w-8 rounded-full bg-white font-[SpaceMono]">
              {currentPage}
            </span>

            <button
              className="_arrowbtn"
              onClick={nextPage}
              disabled={currentPage === totalPages}
            >
              <ArrowBigRight />
            </button>
          </div>
        </div>

        <form
          action=""
          className="relative flex items-center text-gray-400 focus:text-gray-600 pe-20 group"
        >
          <Search className="absolute ml-3" />

          <input
            type="text"
            name="search"
            placeholder="Search"
            autoComplete="off"
            aria-label="search"
            className="_input pl-10 focus:bg-white"
            disabled={isLoading}
          />
        </form>
      </section>

      {isLoading ? (
        <ListSkeleton />
      ) : (
        <div className="flex flex-1 flex-col gap-2">
        {currentTravelers.map((traveler) => (
          <div
            className="py-6 bg-white rounded-lg flex items-center justify-between px-4 flex-wrap"
            key={traveler.id}
          >
            <TravelerList
              name={traveler.name}
              phone={traveler.phone}
              gender={traveler.gender}
              idCard={traveler.idCard}
            />

            <section className="flex gap-4 items-center">
              <button className="_deletebtn">
                <Trash className="w-5 h-5" />
              </button>

              <button className="_editbtn">
                <Pencil className="w-5 h-5" />
              </button>

              <button className="_actionbtn">
                <Car className="w-5 h-5" />
              </button>

              <button className="_actionbtn">
                <CalendarCheck className="w-5 h-5" />
              </button>
            </section>
          </div>
        ))}
      </div>
      )}

    </>
  );
};

export default TravelerSection;
