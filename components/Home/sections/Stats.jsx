import React from 'react'
import Title from '../../ui/Title'

const Stats = () => {
  return (
    <div className='px-6 max-w-362 mx-auto mt-24'>
        <Title text="TUM in numbers" />
        <div className="mt-12 flex gap-6">
            <div className="bg-primary flex flex-col font-bold text-white p-10 w-[70%]">
                <div className="text-[130px] mb-5 leading-[99px]">50,000</div>
                <div className="text-[34px] leading-[44px] tracking-small">Students</div>
            </div>
            <div className="flex flex-col gap-6 justify-between">
                <div className="flex text-dark-blue font-bold bg-[#f7b11e] p-5 items-end">
                    <div className="text-[90px] leading-[68px] w-2/4 flex-shrink-0">176</div>
                    <div className="text-[22px] leading-[28px] flex-grow-0 tracking-small">ERC Grants for cutting-edge research</div>
                </div>
                <div className="flex text-dark-blue font-bold bg-[#b55ca5] p-5 items-end">
                    <div className="text-[90px] leading-[68px] w-2/4 flex-shrink-0">18</div>
                    <div className="text-[22px] leading-[28px] flex-grow-0 tracking-small">Nobel laureates</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Stats