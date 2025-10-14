import DriverSection from '@/components/DriverSection'

const page = () => {
  return (
    <div className="flex-1 w-full p-10 flex flex-col gap-6">
      
      <h5 className="font-[SpaceMono] font-bold text-xl underline">
        Liste des conducteurs
      </h5>

        <DriverSection />

    </div>
  )
}

export default page
