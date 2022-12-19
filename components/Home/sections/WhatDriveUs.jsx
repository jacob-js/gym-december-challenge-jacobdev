import Image from 'next/image';
import React from 'react'
import Button from '../../ui/Button';

const WhatDriveUs = () => {
  return (
    <div className='px-6 max-w-362 mx-auto mt-24'>
        <div className="flex relative items-center">
            <Image width={736} height={505} alt="" src="https://tum.de/fileadmin/_processed_/8/1/csm_csm_20211111_Presidential_student_Lunch_Garching_AE_Z_-1004_64e4d1584d_4b7c164f6e.webp" className='object-cover h-[505px]' />
            <div className="w-2/4 absolute left-2/4">
                <div className="bg-primary text-white p-10">
                    <div className="text-3xl font-bold tracking-small">What drives us: President Thomas F. Hofmann about TUM</div>
                    <div className="tracking-small mt-5 mb-8">Research and innovations for society, innovative teaching and continuing education: This is how we shape a sustainable future, relying on the intelligence of the entire university and working closely with global partners to do so.</div>
                    <Button text="Read more" theme="white" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhatDriveUs;