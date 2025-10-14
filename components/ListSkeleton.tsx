import React from 'react'

const ListSkeleton = () => {
  return (
    <div className="flex flex-1 flex-col gap-2">
      {Array.from({ length: 7 }, (_, index) => (
        <div 
          key={index}
          className="py-6 bg-white rounded-lg flex items-center justify-between px-4 flex-wrap animate-pulse"
        >
            
          <div className="flex justify-between gap-4">
            
            <div className="flex gap-2 items-center">
              <div className="w-5 h-5 bg-gray-200 rounded"></div>
              <div className="w-3 h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-48"></div>
            </div>
            
            
            <div className="flex gap-2 items-center">
              <div className="w-5 h-5 bg-gray-200 rounded"></div>
              <div className="w-3 h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-32"></div>
            </div>
            
            
            <div className="flex gap-2 items-center">
              <div className="w-6 h-6 bg-gray-200 rounded"></div>
              <div className="w-3 h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-20"></div>
            </div>
            
            
            <div className="flex gap-2 items-center">
              <div className="w-6 h-6 bg-gray-200 rounded"></div>
              <div className="w-3 h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-36"></div>
            </div>
            
            
            <div className="flex gap-2 items-center">
              <div className="w-6 h-6 bg-gray-200 rounded"></div>
              <div className="w-3 h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-56"></div>
            </div>
          </div>


          <section className="flex gap-4 items-center">
            {Array.from({ length: 4 }, (_, btnIndex) => (
              <div 
                key={btnIndex}
                className="w-10 h-10 bg-gray-200 rounded-lg"
              ></div>
            ))}
          </section>
        </div>
      ))}
    </div>
  )
}

export default ListSkeleton