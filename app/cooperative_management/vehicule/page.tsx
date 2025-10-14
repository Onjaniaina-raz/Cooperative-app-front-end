import VehiculeSection from "@/components/VehiculeSection"

const page = () => {
  return (
    <div className="flex-1 w-full p-10 flex flex-col gap-6">
      
      <h5 className="font-[SpaceMono] font-bold text-xl underline">
        Liste des vehicules
      </h5>

      <VehiculeSection />

    </div>
  )
}

export default page
