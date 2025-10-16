import React from 'react'

const TextInput = () => {
  return (
    <label className='relative'>
      <input type='text' className='px-6 h-[50px] w-full bg-white border outline-none focus:border-coop-5 transition duration-200 rounded-lg'/>
      <span className='text-opacity-80 absolute left-0 top-0 mx-6 px-2 transition duration-200 input-text'>Input</span>
    </label>
  )
}

export default TextInput
