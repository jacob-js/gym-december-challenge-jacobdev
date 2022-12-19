import Image from 'next/image'
import React from 'react'

const DegreeProgram = () => {
  return (
    <div className='max-w-362 w-full mx-auto mt-40 px-6'>
        <select name="" id="" placeholder='Select degree on enter keyword' className='p-5 bg-gray-200 font-bold w-full outline-none text-2xl text-gray-600' defaultValue="1">
            <option value="1">Select degree on enter keyword</option>
        </select>
        <div className="text-primary font-medium mt-5 flex justify-end">Degree programs 
            <Image src="/icons/arrow-right.svg" width={24} height={32} alt="" className='ml-1' />
        </div>
    </div>
  )
}

export default DegreeProgram