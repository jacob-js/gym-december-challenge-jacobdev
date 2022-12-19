import Image from 'next/image'
import React from 'react'
import Button from '../../ui/Button'

const SchoolAndResearch = () => {
  return (
    <div className='px-6 max-w-362 mx-auto mt-24'>
        <div className="flex relative items-center">
            <Image width={736} height={500} alt="" src="https://tum.de/fileadmin/_processed_/7/c/csm_20220209_Neubau_EI_AH_672635_aa584b6500.webp" className='object-cover h-[500px]' />
            <div className="w-2/4 absolute left-2/4">
                <div className="bg-bright text-dark-blue p-10">
                    <div className="text-3xl font-bold tracking-small">Schools and Research Centers</div>
                    <div className="tracking-small mt-5 mb-8">They form the academic foundation of TUM: Our schools and departments, connected at disciplinary interfaces by integrative research institutes to create an organization that drives innovation.</div>
                    <Button text="ORGANIZATION" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default SchoolAndResearch