import { MapPin } from "lucide-react"
import TextInput from "./TextInput"

const ReservationSection = () => {
  return (
    <div className="flex-1 p-10">
      <div className="h-full w-full bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.002] flex flex-col justify-between">
            <section className="relative flex items-center h-[100px]">
                <div className="h-2 w-full bg-gray-200 rounded-full absolute">
                </div>
                <div className="flex justify-between absolute w-full">
                    <span className="p-6 bg-coop-4 rounded-full text-white">
                        <MapPin className="w-8 h-8"/>
                    </span>
                </div>
            </section>

            <section className="flex-1">
                <div className="">
                    <TextInput />
                </div>
            </section>
      </div>
    </div>
  )
}

export default ReservationSection
