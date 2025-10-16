import HistorySection from "@/components/HistorySection"

const page = () => {
  return (
    <div className="flex-1 w-full p-10 flex flex-col gap-6">
      
      <h5 className="font-[SpaceMono] font-bold text-xl underline">
        Historique de voyage
      </h5>

      <HistorySection />

    </div>
  )
}

export default page
