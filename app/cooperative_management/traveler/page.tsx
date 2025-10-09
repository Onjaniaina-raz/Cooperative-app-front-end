import { Plus } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <div className='flex-1 w-full p-10 flex flex-col gap-6'>
      <h5 className='font-[SpaceMono] font-bold text-xl'>
        Liste des voyageurs
      </h5>

      <section className='flex justify-between items-center'>
        <button className='flex items-center _button gap-2'>
            <span>Ajouter </span>
            <Plus className='h-4 w-4'/>
        </button>

        <div>
            
        </div>
      </section>
    </div>
  )
}

export default page
