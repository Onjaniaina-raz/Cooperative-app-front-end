import ReservationSection from "@/components/ReservationSection"

const page = () => {
  return (
    <div className="flex-1 w-full p-10 flex flex-col gap-6">
      <h5 className="font-[SpaceMono] font-bold text-xl underline">
        Faire une reservation 
      </h5>

      <ReservationSection />

    </div>
  )
}

export default page
