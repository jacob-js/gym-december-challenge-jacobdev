import Image from 'next/image'
import React from 'react'
import Button from '../../ui/Button'

const AlumniStory = () => {
  return (
    <div className='px-6 max-w-362 mx-auto mt-48'>
        <div className="flex relative items-center">
            <div className="w-2/4 z-20">
                <div className="bg-[#EA7237] text-dark-blue p-10">
                    <div className="text-3xl font-bold tracking-small">&quot;Here I have met a lot of people who are breaking new ground&quot;</div>
                    <div className="tracking-small mt-5 mb-8">Philip Häusser, alumnus</div>
                    <Button text="READ THE ALUMNI STORY" />
                </div>
            </div>
            <div className="absolute right-0 -ml-10 z-10 w-[55%] h-[500px] bg-red-600">
                <Image width={735} height={500} alt="" src="https://tum.de/fileadmin/_processed_/b/1/csm_Dr_Philip_Haeusser-Credit_Christian_Kaufmann-5_d9de9a5b3b.webp" className='object-cover h-[500px] w-full' />
            </div>
        </div>
    </div>
  )
}

export default AlumniStory